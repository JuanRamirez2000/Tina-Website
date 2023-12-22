import CloduinaryImageWrapper from "@/app/components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/kzel2r28yhdyjahi2d51";

export default function Rates() {
  return (
    <main className="flex flex-col-reverse items-center justify-center w-full h-screen py-10 lg:flex-row lg:py-0">
      <section className="flex flex-col items-center justify-center w-full h-1/2 lg:h-full lg:w-2/3">
        <div className="flex flex-col items-center w-full max-w-3xl bg-green-200 h-3/4 ">
          <div>
            <h2>Services</h2>
            <ul>
              <li>
                <p>
                  I shoot mainly portraits, boudouir, lifestyle, street, and
                  implied nude/creative implied nude.
                </p>
              </li>
              <li>
                <p>
                  Locations are within Inland Empire, Orange County, and DTLA.
                  Shoots outside these areas can still be done but require more
                  planning. We can always discuss locations and which would work
                  best for us.
                </p>
              </li>
              <li>
                <p>
                  I will come with my own basic hair and makeup look unlress
                  requested. If you want a specific style please let me know
                </p>
              </li>
              <li>
                <p>
                  I also contain a decently sized collection of lingerie, street
                  wear, and accessories to use for the shoot. Please let me know
                  if you want any specific look with appearal such as color,
                  style, etc...
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Rates</h2>
            <p>Rates cover all forms of photography</p>
            <ul>
              <li>
                <h3>Basic shoot (1-3hrs):</h3>
                <p>$75/hr</p>
              </li>
              <li>
                <h3>Half Day (4-5hrs):</h3>
                <p>$300 flat rate</p>
              </li>
              <li>
                <h3>Full Day (6-8hrs):</h3>
                <p>$500 flat rate</p>
              </li>
            </ul>
          </div>
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
