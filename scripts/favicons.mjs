#!/usr/bin/env node
/**
 * Renders the raster icons from public/favicon.svg, the pd_coral stitch in
 * blue on a transparent ground. They're scaled with nearest neighbour so the
 * stitches stay crisp:
 *
 *   favicon.ico            32px, for browsers that ask for /favicon.ico
 *   apple-touch-icon.png   180px, iOS home screen
 *   img/icons/icon-192.png, icon-512.png   web app manifest
 *
 *   node scripts/favicons.mjs
 */
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const svg = "public/favicon.svg";

// Sizes that aren't a multiple of 16 are drawn at the nearest one below and
// padded with transparency, so every stitch is the same number of pixels.
const png = (size) => {
  const drawn = size - (size % 16);
  const pad = (size - drawn) / 2;
  return sharp(svg, { density: 72 })
    .resize(drawn, drawn, { kernel: "nearest" })
    .extend({
      top: Math.floor(pad),
      bottom: Math.ceil(pad),
      left: Math.floor(pad),
      right: Math.ceil(pad),
      background: "#0000",
    })
    .png()
    .toBuffer();
};

// An .ico holding a single PNG: 6-byte header, one 16-byte entry, the image.
const ico = (image, size) => {
  const head = Buffer.alloc(22);
  head.writeUInt16LE(1, 2); // type: icon
  head.writeUInt16LE(1, 4); // one image
  head.writeUInt8(size, 6);
  head.writeUInt8(size, 7);
  head.writeUInt16LE(1, 10); // colour planes
  head.writeUInt16LE(32, 12); // bits per pixel
  head.writeUInt32LE(image.length, 14);
  head.writeUInt32LE(22, 18); // image offset
  return Buffer.concat([head, image]);
};

writeFileSync("public/favicon.ico", ico(await png(32), 32));
writeFileSync("public/apple-touch-icon.png", await png(180));
writeFileSync("public/img/icons/icon-192.png", await png(192));
writeFileSync("public/img/icons/icon-512.png", await png(512));
