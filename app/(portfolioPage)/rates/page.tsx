import CloduinaryImageWrapper from "@/app/components/CloudinaryImageWraper";

const RATES_IMAGE_ID = "Tina/kzel2r28yhdyjahi2d51";

export default function Rates() {
  return (
    <main className="flex flex-col-reverse items-center justify-around w-full py-4 h-fit lg:h-full lg:py-0 lg:flex-row">
      <section className="flex flex-col items-center justify-center w-full min-h-fit lg:h-full lg:w-2/3">
        <div className="flex flex-col items-center w-full max-w-3xl gap-4 h-fit ">
          <h2 className="text-3xl font-semibold">Services</h2>
          <ul className="flex flex-col gap-4 px-4">
            <li>
              <p>
                I shoot mainly portraits, boudouir, lifestyle, street, and
                implied nude/creative implied nude.
              </p>
            </li>
            <li>
              <p>
                Locations are within Inland Empire, Orange County, and LA
                County. Shoots outside these areas can still be done but require
                more planning. We can always discuss locations and which would
                work best for us. I do not travel outside of SoCal at this time.
              </p>
            </li>
            <li>
              <p>
                I will come with my own basic hair and makeup look unless
                requested. If you want a specific style please let me know and I
                will see what I can do
              </p>
            </li>
            <li>
              <p>
                I hold a decently sized collection of lingerie, street wear, and
                accessories to use for the shoot. I do prefer to use clothes
                that I have not used in shoots before, however this isn&apos;t
                necessary. Please let me know if you want any specific look with
                appearal such as color, style, etc...
              </p>
            </li>
          </ul>
          <h2 className="text-3xl font-semibold">Rates</h2>
          <p>Rates cover all forms of photography</p>
          <ul className="flex flex-col gap-4 p-6 rounded-lg bg-gradient-to-br from-indigo-300 to-pink-300">
            <li>
              <h3 className="text-sm font-semibold">Basic shoot (1-3hrs):</h3>
              <p className="text-2xl font-bold">$75/hr</p>
            </li>
            <li>
              <h3 className="text-sm font-semibold">Half Day (4-5hrs):</h3>
              <p className="text-2xl font-bold">$300 flat rate</p>
            </li>
            <li>
              <h3 className="text-sm font-semibold">Full Day (6-8hrs):</h3>
              <p className="text-2xl font-bold">$500 flat rate</p>
            </li>
          </ul>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center w-full h-96 lg:h-full lg:w-1/3">
        <figure className="relative w-3/4 h-full lg:w-full grow-0">
          <CloduinaryImageWrapper
            src={RATES_IMAGE_ID}
            alt="Tina Hero Section photo"
            fill={true}
            className="object-cover rounded-lg lg:rounded-none"
          />
        </figure>
      </div>
    </main>
  );
}
