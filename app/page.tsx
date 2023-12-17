import CloduinaryImageWrapper from "./components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/kzel2r28yhdyjahi2d51";
export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full gap-6">
      <section className="flex flex-col items-center justify-around w-full h-screen md:flex-row">
        <div className="flex flex-col items-center justify-center gap-5 h-2/5 md:h-fuill md:w-1/2 ">
          <h1 className="text-6xl md:text-[8rem] md:tracking-tighter">
            Tina Dinh
          </h1>
          <p className="text-2xl md:text-5xl">Model</p>
          <ul className="flex flex-row gap-2 md:text-2xl">
            <li>Street</li>
            <li>Boudoir</li>
            <li>Lifesyle</li>
          </ul>
        </div>
        <figure className="relative w-4/5 h-3/5 md:h-full md:w-1/2 ">
          <CloduinaryImageWrapper
            src={HERO_PAGE_IMAGE_ID}
            alt="Tina Hero Section photo"
            className="object-cover rounded-xl"
          />
        </figure>
      </section>
      <hr className="w-4/5 h-px border-0 bg-slate-800" />
      <section className="flex flex-col items-center w-full h-screen gap-4 md:flex-row">
        <div className="flex flex-col w-4/5 gap-4 md:h-full">
          <h2 className="text-3xl font-medium underline">Physical Stats</h2>
          <ul className="flex flex-row justify-between w-full font-medium text-slate-500 ">
            <li>Height 5&apos;4&quot;</li>
            <li>Chest 35&quot;</li>
            <li>Waist 28&quot;</li>
            <li>Hair Dark</li>
            <li>Eyes Dark</li>
          </ul>
        </div>

        <figure className="relative w-4/5 h-3/5 md:h-full md:w-1/2">
          <CloduinaryImageWrapper
            src={"Tina/zgcdcfg83hruq1p30eke"}
            alt="Tina Hero Section photo"
            className="object-cover rounded-xl"
          />
        </figure>
        <figure className="relative w-4/5 h-3/5 md:h-full md:w-1/2">
          <CloduinaryImageWrapper
            src={"Tina/uaif2e1mxyndcgn0pk4a"}
            alt="Tina Hero Section photo"
            className="object-cover rounded-xl"
          />
        </figure>
      </section>
    </main>
  );
}
