import Link from "next/link";
import CloduinaryImageWrapper from "../components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "tina-website-39_ncgjkh";
export default function Home() {
  return (
    <main className="flex flex-col-reverse items-center justify-around w-full py-24 h-fit lg:h-full lg:py-0 lg:flex-row">
      <section className="flex flex-col items-center justify-center w-full min-h-fit lg:h-full lg:w-2/3">
        <div className="flex flex-col items-center w-full max-w-3xl gap-4 h-fit ">
          <h2 className="text-3xl font-semibold">Tina Dinh</h2>
          <p className="max-w-xl px-4 text-left text-center">
            Hey! I&apos;m Tina! <br /> A full time student and hobbyist model.{" "}
            <br /> I got into modeling as an attempt to show natural beauty and
            elegance through many forms of media. My main focus right now is
            photoshoots.
            <br /> Most of my work revolves around Street, Portait, and Boudoir
            modeling, however I am open to other forms of modeling if the time
            and shoot fit my style. <br /> This site was made to showcase my
            work. Lets shoot sometime!
          </p>
          <div className="flex flex-col items-center justify-center w-64 h-32 p-4 rounded-lg bg-gradient-to-br from-indigo-300 to-pink-300">
            <ul className="flex flex-row gap-6 ">
              <li>
                <h3 className="text-sm font-semibold">Height</h3>
                <p className="text-3xl font-bold">5&apos;4&quot;</p>
              </li>
              <li>
                <h3 className="text-sm font-semibold ">Bust</h3>
                <p className="text-3xl font-bold">34&quot;</p>
              </li>
              <li>
                <h3 className="text-sm font-semibold ">Waist</h3>
                <p className="text-3xl font-bold">28&quot;</p>
              </li>
            </ul>
          </div>
          <h2 className="text-sm text-slate-700">
            Made with love by{" "}
            <Link
              href={"https://www.juanr.dev"}
              className="text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              @Juan
            </Link>
          </h2>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center w-full h-96 lg:h-full lg:w-1/3">
        <figure className="relative w-3/4 h-full lg:w-full grow-0">
          <CloduinaryImageWrapper
            src={HERO_PAGE_IMAGE_ID}
            alt="Tina Hero Section photo"
            fill={true}
            className="object-cover rounded-lg lg:rounded-none"
          />
        </figure>
      </div>
    </main>
  );
}
