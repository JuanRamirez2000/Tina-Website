import cloudinary from "cloudinary";
import ImageGrid from "./ImageGrid";

export default async function Gallery({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const contentType = searchParams.contentType;
  const { resources } = await cloudinary.v2.api.resources_by_tag(
    contentType as string,
    {
      max_results: 200,
    }
  );

  if (!resources) return <h1>Loading...</h1>;
  const shuffledResources = resources.sort(() => 0.5 - Math.random());

  return (
    <main className="flex flex-col items-center h-full py-16 lg:py-24 w-fit">
      <ImageGrid images={shuffledResources} />
    </main>
  );
}
