import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLink,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import CloduinaryImageWrapper from "../components/CloudinaryImageWraper";

const HERO_PAGE_IMAGE_ID = "Tina/kzel2r28yhdyjahi2d51";

import Link from "next/link";

export default function Links() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-gradient-to-br from-indigo-300 to-pink-300">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-lg gap-4">
        <figure className="relative w-2/3 h-2/4 ">
          <CloduinaryImageWrapper
            src={HERO_PAGE_IMAGE_ID}
            alt="Tina Hero Section photo"
            className="object-cover rounded-xl"
          />
        </figure>

        <h1 className="text-4xl font-semibold tracking-tight">Tina Dinh</h1>
        <p className="text-lg text-center w-72">
          Model with a passion for displaying beauty elegantly
        </p>
        <ul className="flex flex-col w-3/4 max-w-5xl gap-4 text-2xl">
          <li className="px-2 py-1 rounded-2xl bg-slate-100">
            <Link
              href={"https://www.instagram.com/tinavivix/"}
              className="flex flex-row items-center justify-between text-center"
              aria-label="Instagram Link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-7 h-7" />
              <p className="grow">Instagram</p>
            </Link>
          </li>
          <li className="px-2 py-1 rounded-2xl bg-slate-100">
            <Link
              href={"https://www.instagram.com/tinavivix/"}
              className="flex flex-row items-center justify-between text-center"
              aria-label="Instagram Link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLink} className="w-7 h-7" />
              <p className="grow">Portfolio Site</p>
            </Link>
          </li>
          <li className="px-2 py-1 rounded-2xl bg-slate-100">
            <Link
              href={"https://www.instagram.com/tinavivix/"}
              className="flex flex-row items-center justify-between text-center"
              aria-label="Instagram Link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faCalendarDays} className="w-7 h-7" />
              <p className="grow">Calendly</p>
            </Link>
          </li>
          <li className="px-2 py-1 rounded-2xl bg-slate-100">
            <Link
              href={"https://www.instagram.com/tinavivix/"}
              className="flex flex-row items-center justify-between text-center"
              aria-label="Instagram Link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faMugHot} className="w-7 h-7" />
              <p className="grow">Buy Me A Coffee</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
