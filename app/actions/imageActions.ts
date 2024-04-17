"use server";
import cloudinary from "cloudinary";

export const addImageTags = async (cldPublicId: string, tags: string[]) => {
  if (tags.length === 0) return { status: "success" };

  const simplified_strings = tags.map((tag) => tag.replace("new_", ""));

  try {
    await cloudinary.v2.uploader.add_tag(simplified_strings.join(","), [
      cldPublicId,
    ]);
    return { status: "success" };
  } catch (err) {
    console.error(err);
    return { status: "error" };
  }
};

export const updateImageTags = async (cldPublicId: string, tags: string[]) => {
  const simplified_strings = tags.map((tag) => tag.replace("edit_", ""));

  try {
    await cloudinary.v2.uploader.replace_tag(simplified_strings.join(","), [
      cldPublicId,
    ]);
    return { status: "success" };
  } catch (err) {
    console.error(err);
    return { status: "error" };
  }
};
