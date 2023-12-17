import CloduinaryImageWrapper from "./components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/kzel2r28yhdyjahi2d51";
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full gap-6 px-10">
      <section className="flex flex-col items-center w-full h-screen md:justify-around md:flex-row">
        <div className="flex flex-col items-center justify-center gap-5 h-1/4 md:h-full md:w-1/2 ">
          <h1 className="text-6xl md:text-[8rem] md:tracking-tighter">
            Tina Dinh
          </h1>
          <p className="text-2xl md:text-5xl">Model</p>
          <div className="flex-col hidden w-4/5 gap-4 p-4 md:flex md:w-3/5 bg-slate-200 rounded-xl">
            <h2 className="text-2xl font-medium underline md:text-3xl">
              Physical Stats
            </h2>
            <ul className="flex flex-row justify-between w-full text-sm font-medium md:text-base text-slate-500">
              <li>Height 5&apos;4&quot;</li>
              <li>Chest 34&quot;</li>
              <li>Waist 28&quot;</li>
              <li>Hair Dark</li>
              <li>Eyes Dark</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-4/5 gap-2 h-3/5 md:h-3/4 md:w-1/3">
          <figure className="relative w-full h-full">
            <CloduinaryImageWrapper
              src={HERO_PAGE_IMAGE_ID}
              alt="Tina Hero Section photo"
              className="object-cover rounded-xl"
            />
          </figure>
          <div className="flex flex-col w-full gap-4 p-4 md:hidden md:w-3/5 bg-slate-200 rounded-xl">
            <h2 className="text-2xl font-medium underline md:text-3xl">
              Physical Stats
            </h2>
            <ul className="flex flex-row justify-between w-full text-sm font-medium md:text-base text-slate-500">
              <li>Height 5&apos;4&quot;</li>
              <li>Chest 34&quot;</li>
              <li>Waist 28&quot;</li>
              <li>Hair Dark</li>
              <li>Eyes Dark</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
