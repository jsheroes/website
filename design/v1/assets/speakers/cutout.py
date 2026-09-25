# Usage: pip install onnxruntime pillow numpy; U2NET_MODEL=/path/u2net_human_seg.onnx SPEAKERS_DIR=src/images/speakers OUT_DIR=out python cutout.py
# Model: u2net_human_seg.onnx from https://github.com/danielgatis/rembg/releases (v0.0.0). Edit the `names` map in __main__ to cover all speakers.
import numpy as np, onnxruntime as ort, glob, os, sys
from PIL import Image, ImageOps, ImageFilter
MODEL=os.environ.get('U2NET_MODEL','u2net_human_seg.onnx')
sess=ort.InferenceSession(MODEL,providers=['CPUExecutionProvider'])
inp=sess.get_inputs()[0].name
SRC=os.environ.get('SPEAKERS_DIR','src/images/speakers/')
if not SRC.endswith('/'): SRC+='/'
def mask(im):
    r=im.convert('RGB').resize((320,320),Image.BILINEAR)
    a=np.asarray(r).astype(np.float32); a=a/max(a.max(),1e-6)
    a=(a-[0.485,0.456,0.406])/[0.229,0.224,0.225]
    a=a.transpose(2,0,1)[None].astype(np.float32)
    o=sess.run(None,{inp:a})[0][0][0]
    o=(o-o.min())/(o.max()-o.min()+1e-8)
    m=Image.fromarray((o*255).astype(np.uint8)).resize(im.size,Image.LANCZOS)
    return m
def process(name,out,size=520,ratio=1.04,side_k=3.1):
    im=Image.open(SRC+name); im=ImageOps.exif_transpose(im).convert('RGB')
    m=mask(im)
    # sharpen the matte: push toward 0/1 with smoothstep, small blur
    a=np.asarray(m).astype(np.float32)/255
    a=np.clip((a-0.35)/0.4,0,1); a=a*a*(3-2*a)
    m=Image.fromarray((a*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8))
    a=np.asarray(m)
    ys,xs=np.where(a>128)
    y0=ys.min(); H=im.height
    # head width from top band
    band=a[y0:y0+int(0.22*(ys.max()-y0)+8)]
    bx=np.where(band.max(0)>128)[0]
    cx=(bx.min()+bx.max())/2; hw=bx.max()-bx.min()
    ybot=ys.max()
    side=hw*side_k
    side=min(side,(ybot-y0+0.05*side)*size/(0.80*size*ratio))
    side=max(side,hw*2.05)
    top=y0-0.05*side
    box=(int(cx-side/2),int(top),int(cx+side/2),int(top+side*ratio))
    g=ImageOps.grayscale(im); g=ImageOps.autocontrast(g,cutoff=1)
    g=Image.eval(g,lambda v:int(255*((v/255)**1.05)))
    la=Image.merge('LA',(g,m))
    la=la.crop(box)  # crop pads with transparent
    la=la.resize((size,int(size*ratio)),Image.LANCZOS)
    la.save(out,optimize=True)
    return la
OUT=os.environ.get('OUT_DIR','cut')
os.makedirs(OUT,exist_ok=True)
if __name__=='__main__':
    names={'phil-hawksworth.jpg':'phil','suz-hinton.jpg':'suz','daniel-roe.jpg':'daniel','ryan-townsend.jpg':'ryan','anjana-vakil.jpg':'anjana','craig-abbott.jpeg':'craig','cyd-stumpel.png':'cyd','misha-korolev.jpg':'misha'}
    ims=[]
    for f,n in names.items():
        ims.append(process(f,f'{OUT}/{n}.png'))
    W=len(ims)*270
    sheet=Image.new('RGB',(4*270,2*290),(255,204,103))
    for i,im in enumerate(ims):
        t=im.resize((260,int(260*im.height/im.width)))
        rgba=t.convert('RGBA')
        sheet.paste(rgba,((i%4)*270+5,(i//4)*290+5),rgba)
    sheet.save(f'{OUT}/_sheet.png')
