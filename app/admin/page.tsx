import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { PhotoTable } from "./table/PhotoTable";
import cloudinary from "cloudinary";
import { columns } from "./table/columns";
import CoverImageSettings from "./CoverImageSettings";

export default async function Page() {
  const { resources: data } = await cloudinary.v2.api.resources({
    prefix: "Tina/",
    max_results: "200",
    resource_type: "image",
    type: "upload",
    tags: true,
  });

  if (!checkRole("admin")) {
    redirect("/");
  }

  return (
    <section className="w-full min-h-screen flex flex-row pt-24">
      <div className="w-1/2">
        <PhotoTable data={data} columns={columns} />
      </div>
      <div className="w-1/2">
        <CoverImageSettings />
      </div>
    </section>
  );
}
