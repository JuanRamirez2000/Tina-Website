import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faAmazon } from "@fortawesome/free-brands-svg-icons";
import CloduinaryImageWrapper from "../../components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/kzel2r28yhdyjahi2d51";

import Link from "next/link";

export default function Links() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-300 to-pink-300">
      <section className="flex flex-col items-center justify-center w-full max-w-lg min-h-screen gap-2 py-20 overflow-y-auto md:py-0 h-fit">
        <figure className="relative w-2/3 h-[30rem] grow-0">
          <CloduinaryImageWrapper
            src={HERO_PAGE_IMAGE_ID}
            alt="Tina Hero Section photo"
            fill={true}
            className="object-cover rounded-xl"
          />
        </figure>
        <div className="flex flex-col items-center w-full gap-5 h-fit">
          <h1 className="text-4xl font-semibold tracking-tight">Tina Dinh</h1>
          <ul className="flex flex-col w-3/4 max-w-5xl gap-4 text-2xl">
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={"https://www.instagram.com/tinavivix/"}
                className="flex flex-row items-center justify-between text-center "
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-10 h-10 p-1.5 rounded-xl text-slate-50 bg-gradient-to-bl from-purple-500 via-red-600 to-amber-400"
                />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Instagram</p>
                  <p className="text-sm text-slate-600">Modeling Instagram</p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={"https://www.tinamodeling.net"}
                className="flex flex-row items-center justify-between text-center "
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  className="w-10 h-10 p-1.5 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white"
                />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Portfolio</p>
                  <p className="text-sm text-slate-600">
                    My Modeling Portfolio
                  </p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={
                  "https://www.amazon.com/hz/wishlist/ls/229375X9AS1M9?ref_=wl_share"
                }
                className="flex flex-row items-center justify-between text-center "
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faAmazon}
                  className="w-10 h-10 p-1.5 rounded-xl bg-gradient-to-br from-blue-400 to-emerald-400 text-slate-50"
                />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Amazon Wishlist</p>
                  <p className="text-sm text-slate-600">Buy Me A Gift</p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 transition-all rounded-2xl bg-slate-100 hover:scale-105">
              <Link
                href={"https://www.buymeacoffee.com/vivixtina"}
                className="flex flex-row items-center justify-between text-center "
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faMugHot}
                  className="w-10 h-10 p-1.5 rounded-xl bg-gradient-to-br from-cyan-200 to-cyan-400 text-slate-50"
                />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Buy Me A Coffee</p>
                  <p className="text-sm text-slate-600">
                    Always Great To Support
                  </p>
                </div>
              </Link>
            </li>
          </ul>
          <h2 className="text-sm text-slate-700">
            Made with love by{" "}
            <Link
              href={"https://www.juanr.dev"}
              className="text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              @Juan
            </Link>
          </h2>
        </div>
      </section>
    </main>
  );
}
