import Link from "next/link";
import CloduinaryImageWrapper from "../components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/odxnrqgyzpbp2xpr5qve";

const TINA_STREET_THUMBNAIL = "Tina/kzel2r28yhdyjahi2d51";
const TINA_PORTRAIT_THUMBNAIL = "Tina/odo4vy9x1vmfivfxdwbs";
const TINA_STUDIO_THUMBNAIL = "Tina/hi44jqyqn2lozf3fkati";
const TINA_BOUDOIR_THUMBNAIL = "Tina/tkq0frt7w1qwcllmsku1";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full px-5 lg:px-10 h-fit py-14 lg:h-fit">
      <section className="relative w-full h-[42rem]">
        <CloduinaryImageWrapper
          src={HERO_PAGE_IMAGE_ID}
          fill={true}
          alt=""
          className="object-cover py-10"
        />
      </section>
      <section className="flex flex-col items-center justify-around w-4/5 max-w-screen-lg lg:flex-row h-96">
        <h1 className="text-5xl font-bold tracking-tight">Comp Card</h1>
        <ul className="text-xl">
          <li>Height: 5&apos;4&quot;</li>
          <li>Bust: 34&quot;</li>
          <li>Waist: 28&quot;</li>
        </ul>
      </section>

      <section className="w-full h-full">
        <ul className="flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-center size-full">
          <li className="relative w-full lg:w-3/4 h-[52rem] cursor-pointer">
            <CloduinaryImageWrapper
              src={TINA_STREET_THUMBNAIL}
              fill={true}
              alt=""
              className="object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 opacity-0 hover:opacity-100 bg-gradient-to-t from-cyan-300/[99%] pb-20">
              <p className="text-3xl font-semibold text-cyan-50">
                Street Modeling
              </p>
            </div>
          </li>
          <li className="relative w-full lg:w-3/4 h-[52rem] cursor-pointer">
            <CloduinaryImageWrapper
              src={TINA_PORTRAIT_THUMBNAIL}
              fill={true}
              alt=""
              className="object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 opacity-0 hover:opacity-100 bg-gradient-to-t from-indigo-300/[99%] pb-20">
              <p className="text-3xl font-semibold text-indigo-50">
                Portrait Modeling
              </p>
            </div>
          </li>
          <li className="relative w-full lg:w-3/4 h-[52rem] cursor-pointer">
            <CloduinaryImageWrapper
              src={TINA_STUDIO_THUMBNAIL}
              fill={true}
              alt=""
              className="object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 opacity-0 hover:opacity-100 bg-gradient-to-t from-pink-300/[99%] pb-20">
              <p className="text-3xl font-semibold text-pink-50">
                Studio Modeling
              </p>
            </div>
          </li>
          <li className="relative w-full lg:w-3/4 h-[52rem] cursor-pointer">
            <CloduinaryImageWrapper
              src={TINA_BOUDOIR_THUMBNAIL}
              fill={true}
              alt=""
              className="object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 opacity-0 hover:opacity-100 bg-gradient-to-t from-rose-300/[99%] pb-20">
              <p className="text-3xl font-semibold text-rose-50">
                Boudoir Modeling
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center w-full py-24">
        <p>
          Made with love by{" "}
          <Link href={"https://www.juanr.dev"} className="text-pink-400">
            @Juan
          </Link>
        </p>
      </section>
    </main>
  );
}
