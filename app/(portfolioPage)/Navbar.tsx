import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className=" drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        {/* Navbar */}
        <div className="w-full text-white bg-pink-300 navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Bars3CenterLeftIcon className="w-8 h-8" />
            </label>
          </div>
          <div className="flex-1 text-xl font-semibold navbar-start">
            Tina Dinh
          </div>
          <div className="flex-none hidden lg:block navbar-end">
            <ul className="text-lg menu menu-horizontal">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/aboutme"}>About Me</Link>
              </li>
              <li>
                <details className="dropdown">
                  <summary>Gallery</summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-pink-300 rounded-lg w-32 text-lg">
                    <li>
                      <Link href={"/"}>Street</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Portaits</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Boudouir</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"/rates"}>Rates</Link>
              </li>
              <li>
                <Link href={"/links"}>Links</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      {/* Side Navigation */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full p-4 text-lg text-white bg-pink-300 menu w-72">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/aboutme"}>About Me</Link>
          </li>
          <li>
            <details open>
              <summary>Gallery</summary>
              <ul>
                <li>
                  <Link href={"/"}>Street</Link>
                </li>
                <li>
                  <Link href={"/"}>Boudoir</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/rates"}>Rates</Link>
          </li>
          <li>
            <Link href={"/links"}>Links</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
