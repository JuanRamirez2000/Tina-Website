import CloduinaryImageWrapper from "./components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/zxqjljwwojnk4fweiy8d";
export default function Home() {
  return (
    <main className="h-full w-[90%]">
      <section className="flex flex-row items-center justify-around w-full h-full">
        <div className="flex flex-col items-center grow">
          <h1 className="text-[8rem] font-windSong">Tina Dinh</h1>
        </div>
        <figure className="h-full overflow-hidden w-fit">
          <CloduinaryImageWrapper
            width={735}
            height={1080}
            src={HERO_PAGE_IMAGE_ID}
            sizes="100vw"
            alt="Tina Hero Page"
          />
        </figure>
      </section>
    </main>
  );
}
