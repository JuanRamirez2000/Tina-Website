import cloudinary from "cloudinary";
import ImageGrid from "../components/ImageGrid";

export default async function Gallery() {
  const results = await cloudinary.v2.api.resources({
    resource_type: "image",
    prefix: "Tina/",
    type: "upload",
    max_results: 100,
  });
  return (
    <main>
      <div>
        <ImageGrid images={results.resources} />
      </div>
    </main>
  );
}
