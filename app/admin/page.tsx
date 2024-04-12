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

  if (!checkRole("admin")) {
    redirect("/");
  }

  return (
    <div className="pt-32">
      <h1>Tina Dinh&apos;s Portfolio Dashboard</h1>

      <PhotoTable data={data} columns={columns} />
    </div>
  );
}
