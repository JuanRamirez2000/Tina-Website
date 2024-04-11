import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { PhotoTable } from "./table/PhotoTable";
import cloudinary from "cloudinary";
import { columns } from "./table/columns";

export default async function Page() {
  const { resources: data } = await cloudinary.v2.api.resources_by_asset_folder(
    "Tina/boudoir"
  );

  if (!checkRole("admin")) {
    redirect("/");
  }

  return (
    <div>
      <h1>Tina Dinh&apos;s Portfolio Dashboard</h1>
      <PhotoTable data={data} columns={columns} />
    </div>
  );
}
