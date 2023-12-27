import CloduinaryImageWrapper from "../components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/sh194qz8a88nyu0mkay6";
export default function Home() {
  return (
    <main className="flex flex-col-reverse items-center justify-around w-full h-screen lg:flex-row">
      <section className="flex flex-col items-center justify-center w-full px-8 min-h-fit lg:min-h-screen lg:w-2/3">
        <div className="flex flex-col items-center w-full max-w-3xl gap-4 h-fit ">
          <h2 className="text-3xl font-semibold">Tina Dinh</h2>
          <p className="max-w-xl text-center lg:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            quas quam iste commodi pariatur assumenda, distinctio quasi!
            Cupiditate totam incidunt laborum ab aperiam illum, laboriosam
            recusandae dolor, vel, corporis modi quo omnis atque voluptatibus
            ullam voluptas libero repellat sunt. Inventore asperiores assumenda
            temporibus quisquam facilis.
          </p>
          <h2 className="text-3xl font-semibold">Stats</h2>
          <ul className="flex flex-row gap-4">
            <li>
              <h3>Height</h3>
              <p>5&apos;4&quot;</p>
            </li>
            <li>
              <h3>Bust</h3>
              <p>35&apos;</p>
            </li>
            <li>
              <h3>Waist</h3>
              <p>28&apos;</p>
            </li>
          </ul>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center w-full h-96 lg:h-full lg:w-1/3">
        <figure className="relative w-3/4 h-full lg:w-full lg:h-full grow-0">
          <CloduinaryImageWrapper
            src={HERO_PAGE_IMAGE_ID}
            alt="Tina Hero Section photo"
            className="object-cover rounded-lg lg:rounded-none"
          />
        </figure>
      </div>
    </main>
  );
}
