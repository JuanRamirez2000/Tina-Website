import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { PhotoTable } from "./table/PhotoTable";
import cloudinary from "cloudinary";
import { columns } from "./table/columns";

export default async function Page() {
  const { resources: data } = await cloudinary.v2.api.resources({
    prefix: "Tina/",
    max_results: "200",
    resource_type: "image",
    type: "upload",
    tags: true,
  });

  const { resources: coverImages } = await cloudinary.v2.api.resources_by_tag(
    "coverImage",
    { tags: true }
  );
  const streetCoverPhoto = coverImages.find((image) =>
    image.tags.includes("coverImageStreet")
  );
  const portraitCoverPhoto = coverImages.find((image) =>
    image.tags.includes("coverImagePortait")
  );
  const studioCoverPhoto = coverImages.find((image) =>
    image.tags.includes("coverImageStudio")
  );
  const boudoirCoverPhoto = coverImages.find((image) =>
    image.tags.includes("coverImageBoudoir")
  );

  if (!checkRole("admin")) {
    redirect("/");
  }

  return (
    <section className="w-full min-h-screen flex flex-row pt-24">
      <div className="w-1/2">
        <PhotoTable data={data} columns={columns} />
      </div>
      <div className="w-1/2">
        <ul className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-2">
          <li className="w-full h-96 bg-cyan-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Street Photo Cover Image</h2>
          </li>
          <li className="w-full h-96 bg-indigo-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Portait Photo Cover Image</h2>
          </li>
          <li className="w-full h-96 bg-rose-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Studio Photo Cover Image</h2>
          </li>
          <li className="w-full h-96 bg-pink-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Boudoir Photo Cover Image</h2>
          </li>
        </ul>
      </div>
    </section>
  );
}
