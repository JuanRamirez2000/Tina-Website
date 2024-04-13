import cloudinary from "cloudinary";
import CoverImageCardEdit from "./CoverImageCardEdit";

export default async function CoverImageSettings() {
  const { resources: coverImages } = await cloudinary.v2.api.resources_by_tag(
    "coverImage",
    { tags: true }
  );
  const heroCoverImage = coverImages.find((image) =>
    image.tags.includes("coverImageHero")
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
  return (
    <ul className="w-4/5 lg:w-full flex flex-col gap-2">
      <li className="w-full h-fit bg-emerald-100 p-4 rounded-lg">
        <CoverImageCardEdit
          coverImageName="Hero"
          coverImageUrl={heroCoverImage?.url as string}
        />
      </li>
      <li className="w-full h-fit bg-cyan-100 p-4 rounded-lg">
        <CoverImageCardEdit
          coverImageName="Street"
          coverImageUrl={streetCoverPhoto?.url as string}
        />
      </li>
      <li className="w-full h-fit relative bg-indigo-100 p-4 rounded-lg">
        <CoverImageCardEdit
          coverImageName="Porait"
          coverImageUrl={portraitCoverPhoto?.url as string}
        />
      </li>
      <li className="w-full h-fit relative bg-rose-100 p-4 rounded-lg">
        <CoverImageCardEdit
          coverImageName="Studio"
          coverImageUrl={studioCoverPhoto?.url as string}
        />
      </li>
      <li className="w-full h-fit relative bg-pink-100 p-4 rounded-lg">
        <CoverImageCardEdit
          coverImageName="Boudoir"
          coverImageUrl={boudoirCoverPhoto?.url as string}
        />
      </li>
    </ul>
  );
}
