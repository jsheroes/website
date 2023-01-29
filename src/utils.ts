export const getPersonIdFromFilePath = (file: string): string => {
  return file.replace(".md", "").split("/").pop() || "";
};
