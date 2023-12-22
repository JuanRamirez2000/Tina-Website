import CloduinaryImageWrapper from "@/app/components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/kzel2r28yhdyjahi2d51";

export default function Rates() {
  return (
    <main className="flex flex-col-reverse items-center justify-center w-full h-screen py-10 lg:flex-row lg:py-0">
      <section className="flex flex-col items-center justify-center w-full h-1/2 lg:h-full lg:w-2/3">
        <div className="flex flex-col items-center w-full max-w-3xl bg-green-200 justify-evenly h-3/4 ">
          <h1 className="text-2xl lg:text-5xl">Services and Pricing</h1>
          <ul className="text-sm w-96 lg:w-full lg:max-w-xl">
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                soluta voluptatem repudiandae ad id recusandae iure ullam
                ratione commodi veniam?
              </p>
            </li>
            <li>
              <p>
                Vero itaque quidem reprehenderit! Laboriosam laborum voluptate
                magni! Voluptates officiis labore sunt rem molestiae nam autem
                nesciunt sapiente odio mollitia.
              </p>
            </li>
            <li>
              <p>
                Cum, cumque fugiat. Esse illum quas recusandae nemo quasi
                voluptatibus! Inventore ex tenetur itaque, id ut totam debitis?
                Recusandae, ipsum!
              </p>
            </li>
          </ul>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center w-full h-1/2 lg:h-full lg:w-1/3">
        <figure className="relative w-3/4 h-full lg:w-full lg:h-full">
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
