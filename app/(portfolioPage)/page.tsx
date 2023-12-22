import CloduinaryImageWrapper from "../components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/sh194qz8a88nyu0mkay6";
export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen lg:flex-row">
      <section className="w-full h-1/2 lg:h-full lg:w-2/3">
        <h1>Tina Dinh</h1>
      </section>
      <div className="flex flex-col items-center justify-center w-full h-1/2 lg:h-full lg:w-1/3">
        <figure className="relative h-full lg:w-full lg:h-full">
          <CloduinaryImageWrapper
            src={HERO_PAGE_IMAGE_ID}
            alt="Tina Hero Section photo"
            className="object-cover object-bottom rounded-lg lg:rounded-none"
          />
        </figure>
      </div>
    </main>
  );
}
