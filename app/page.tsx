import CloduinaryImageWrapper from "./components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/kzel2r28yhdyjahi2d51";
export default function Home() {
  return (
    <main className="w-full h-full p-4">
      <section className="flex flex-col items-center justify-around w-full h-full">
        <div className="flex flex-col items-center justify-center gap-2 grow">
          <h1 className="text-4xl">Tina Dinh</h1>
          <p className="text-lg">Modeling</p>
          <ul className="flex flex-row gap-2">
            <li>Street</li>
            <li>Boudoir</li>
            <li>Lifesyle</li>
          </ul>
        </div>
        <figure className="h-fit w-fit">
          <CloduinaryImageWrapper
            width={735}
            height={1080}
            src={HERO_PAGE_IMAGE_ID}
            sizes="100vw"
            alt="Tina Hero Section photo"
            className="rounded-xl"
          />
        </figure>
      </section>
    </main>
  );
}
