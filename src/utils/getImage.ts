import type { ImageMetadata } from "astro";

function getImage(path: string) {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/images/**/*.{jpeg,jpg,png,gif,svg,webp,jfif}"
  );

  const imagePath = `/src/images/${path}`;

  if (!images[imagePath])
    throw new Error(
      `"${path}" does not exist in glob: "/src/images/*.{jpeg,jpg,png,gif,svg,webp,jfif}"`
    );

  return images[imagePath]();
}

export { getImage };
