import cloudinary from "cloudinary";
import ImageGrid from "./ImageGrid";

export default async function Gallery() {
  const results = await cloudinary.v2.api.resources({
    resource_type: "image",
    prefix: "Tina",
    type: "upload",
    max_results: 100,
  });

  if (!results) return <h1>Loading...</h1>;
  return (
    <main className="flex flex-col items-center w-full h-screen ">
      <ImageGrid images={results.resources} />
    </main>
  );
}
