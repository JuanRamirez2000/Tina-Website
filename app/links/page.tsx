import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLink,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faAmazon } from "@fortawesome/free-brands-svg-icons";
import CloduinaryImageWrapper from "../components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/kzel2r28yhdyjahi2d51";

import Link from "next/link";

export default function Links() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-auto bg-gradient-to-br from-indigo-300 to-pink-300">
      <div className="flex flex-col items-center justify-center w-full h-screen max-w-lg gap-4 overflow-auto min-h-fit">
        <figure className="relative w-2/3 h-1/2 grow-0">
          <CloduinaryImageWrapper
            src={HERO_PAGE_IMAGE_ID}
            alt="Tina Hero Section photo"
            className="object-cover rounded-xl"
          />
        </figure>
        <div className="flex flex-col items-center w-full gap-6 h-1/4">
          <h1 className="text-4xl font-semibold tracking-tight">Tina Dinh</h1>
          <p className="text-lg text-center w-72">
            Model with a passion for displaying beauty elegantly
          </p>
          <ul className="flex flex-col w-3/4 max-w-5xl gap-4 text-2x">
            <li className="px-3 py-1  rounded-2xl bg-slate-100">
              <Link
                href={"https://www.instagram.com/tinavivix/"}
                className="flex flex-row items-center justify-between text-center"
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Instagram</p>
                  <p className="text-sm text-slate-600">
                    My modeling instagram
                  </p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 rounded-2xl bg-slate-100">
              <Link
                href={"https://www.instagram.com/tinavivix/"}
                className="flex flex-row items-center justify-between text-center"
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLink} className="w-8 h-8" />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Portfolio</p>
                  <p className="text-sm text-slate-600">
                    Portfolio site for all my modeling
                  </p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 rounded-2xl bg-slate-100">
              <Link
                href={"https://www.instagram.com/tinavivix/"}
                className="flex flex-row items-center justify-between text-center"
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCalendarDays} className="w-8 h-8" />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Calendly</p>
                  <p className="text-sm text-slate-600">Book Me!</p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 rounded-2xl bg-slate-100">
              <Link
                href={"https://www.instagram.com/tinavivix/"}
                className="flex flex-row items-center justify-between text-center"
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon icon={faAmazon} className="w-8 h-8" />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Amazon Wishlist</p>
                  <p className="text-sm text-slate-600">Come buy me a gift</p>
                </div>
              </Link>
            </li>
            <li className="px-3 py-1 rounded-2xl bg-slate-100">
              <Link
                href={"https://www.instagram.com/tinavivix/"}
                className="flex flex-row items-center justify-between text-center"
                aria-label="Instagram Link"
                target="_blank"
              >
                <FontAwesomeIcon icon={faMugHot} className="w-8 h-8" />
                <div className="flex flex-col grow">
                  <p className="text-xl font-semibold">Come buy me a coffee</p>
                  <p className="text-sm text-slate-600">
                    Always great to support
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
