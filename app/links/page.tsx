import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLink,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import Image from "next/image";

export default function Links() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-gradient-to-br from-indigo-300 to-pink-300">
      <div className="flex flex-col items-center justify-center w-full h-full max-w-lg gap-8">
        <div className="relative flex flex-col items-center justify-center w-1/2 h-1/4">
          <Image
            src="/assets/images/linksPhoto.jpg"
            alt=""
            fill
            className="object-cover object-top w-16 h-16 rounded-3xl"
          />
        </div>
        <p className="text-4xl font-semibold tracking-tight">Tina Dinh</p>
        <ul className="flex flex-col w-3/4 max-w-5xl gap-4 text-2xl">
          <li className="px-2 py-1 rounded-lg bg-slate-100">
            <Link
              href={"https://www.instagram.com/tinavivix/"}
              className="flex flex-row items-center justify-between"
              aria-label="Instagram Link"
              target="_blank"
            >
              Modeling Insta
              <FontAwesomeIcon icon={faInstagram} className="w-7 h-7" />
            </Link>
          </li>
          <li className="px-2 py-1 rounded-lg bg-slate-100">
            <Link
              href={"https://www.instagram.com/tinavivix/"}
              className="flex flex-row items-center justify-between"
              aria-label="Instagram Link"
              target="_blank"
            >
              Portfolio Site
              <FontAwesomeIcon icon={faLink} className="w-7 h-7" />
            </Link>
          </li>
          <li className="px-2 py-1 rounded-lg bg-slate-100">
            <Link
              href={"https://www.instagram.com/tinavivix/"}
              className="flex flex-row items-center justify-between"
              aria-label="Instagram Link"
              target="_blank"
            >
              Calendly
              <FontAwesomeIcon icon={faCalendarDays} className="w-7 h-7" />
            </Link>
          </li>
          <li className="px-2 py-1 rounded-lg bg-slate-100">
            <Link
              href={"https://www.instagram.com/tinavivix/"}
              className="flex flex-row items-center justify-between"
              aria-label="Instagram Link"
              target="_blank"
            >
              Buy Me A Coffee
              <FontAwesomeIcon icon={faMugHot} className="w-7 h-7" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
