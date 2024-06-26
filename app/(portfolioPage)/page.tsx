import Link from "next/link";
import CloduinaryImageWrapper from "../../components/CloudinaryImageWraper";
import { HeartIcon } from "@heroicons/react/24/outline";
import cloudinary from "cloudinary";

export default async function Home() {
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
    <div className="flex flex-col items-center w-full px-5 lg:px-10 h-fit lg:h-fit">
      <section className="w-full pt-32 max-w-screen-3xl h-fit">
        <div className="relative w-full h-[48rem] shadow-2xl shadow-sky-300">
          <CloduinaryImageWrapper
            src={heroCoverImage?.url as string}
            fill={true}
            alt=""
            className="object-cover object-top rounded-lg"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-around w-4/5 max-w-screen-3xl lg:flex-row h-96">
        <h1 className="text-5xl font-bold tracking-tight">Comp Card</h1>
        <ul className="text-xl">
          <li>Height: 5&apos;4&quot;</li>
          <li>Bust: 34&quot;</li>
          <li>Waist: 28&quot;</li>
        </ul>
      </section>

      <section className="w-full h-full max-w-screen-3xl">
        <ul className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-center size-full">
          <li className="relative w-full lg:w-3/4 h-[52rem] cursor-pointer shadow-2xl shadow-cyan-300">
            <Link href={`/gallery?contentType=${"street"}`}>
              <CloduinaryImageWrapper
                src={streetCoverPhoto?.url as string}
                fill={true}
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 lg:opacity-0 lg:hover:opacity-100 rounded-lg bg-gradient-to-t from-cyan-300/[99%] pb-20">
                <p className="text-3xl font-semibold text-cyan-50">Street</p>
              </div>
            </Link>
          </li>
          <li className="relative w-full lg:w-3/4 h-[52rem] cursor-pointer shadow-2xl shadow-indigo-300">
            <Link href={`/gallery?contentType=${"portait"}`}>
              <CloduinaryImageWrapper
                src={portraitCoverPhoto?.url as string}
                fill={true}
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 lg:opacity-0 lg:hover:opacity-100 rounded-lg bg-gradient-to-t from-indigo-300/[99%] pb-20">
                <p className="text-3xl font-semibold text-indigo-50">
                  Portrait
                </p>
              </div>
            </Link>
          </li>
          <li className="relative w-full lg:w-3/4 h-[52rem] cursor-pointer shadow-2xl shadow-pink-300">
            <Link href={`/gallery?contentType=${"studio"}`}>
              <CloduinaryImageWrapper
                src={studioCoverPhoto?.url as string}
                fill={true}
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 lg:opacity-0 lg:hover:opacity-100 rounded-lg bg-gradient-to-t from-pink-300/[99%] pb-20">
                <p className="text-3xl font-semibold text-pink-50">Studio</p>
              </div>
            </Link>
          </li>
          <li className="relative w-full lg:w-3/4 h-[52rem] cursor-pointer shadow-2xl shadow-rose-300">
            <Link href={`/gallery?contentType=${"boudoir"}`}>
              <CloduinaryImageWrapper
                src={boudoirCoverPhoto?.url as string}
                fill={true}
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 lg:opacity-0 lg:hover:opacity-100 rounded-lg bg-gradient-to-t from-rose-300/[99%] pb-20">
                <p className="text-3xl font-semibold text-rose-50">Boudoir</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center justify-around w-4/5 pt-12 max-w-screen-3xl h-fit">
        <h1 className="py-12 text-5xl font-bold tracking-tight">Rates</h1>
        <ul className="flex flex-col items-center justify-around w-full gap-6 text-xl lg:items-start lg:flex-row h-fit">
          <li className="w-56 h-40 text-center rounded-lg shadow-2xl shadow-cyan-300">
            <p className="p-4 text-sm font-semibold rounded-t-lg bg-cyan-300">
              Basic Shoot (1-3hrs)
            </p>
            <h3 className="inline-flex items-center justify-center w-full h-24 text-3xl font-bold">
              $75/hr
            </h3>
          </li>
          <li className="w-56 h-40 text-center rounded-lg shadow-2xl shadow-indigo-300">
            <p className="p-4 text-sm font-semibold bg-indigo-300 rounded-t-lg">
              Half Day (3-5hrs)
            </p>
            <h3 className="inline-flex items-center justify-center w-full h-24 text-3xl font-bold">
              $300
            </h3>
          </li>
          <li className="w-56 h-40 text-center rounded-lg shadow-2xl shadow-rose-300">
            <p className="p-4 text-sm font-semibold rounded-t-lg bg-rose-300">
              Full day (5+hrs)
            </p>
            <h3 className="inline-flex items-center justify-center w-full h-24 text-3xl font-bold">
              $500
            </h3>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-48 pt-24 max-w-screen-3xl">
        <p>
          Made with{" "}
          <HeartIcon className="inline w-5 h-5 text-pink-400 fill-pink-400" />{" "}
          by{" "}
          <Link href={"https://www.juanr.dev"} className="text-pink-400">
            @Juan
          </Link>
        </p>
      </section>
    </div>
  );
}
