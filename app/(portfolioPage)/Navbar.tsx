import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col drawer-content">
        {/* Navbar */}
        <div className="w-full px-5 text-slate-700 bg-slate-300 lg:px-10 navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Bars3CenterLeftIcon className="w-8 h-8" />
            </label>
          </div>
          <div className="flex-1 text-xl font-semibold">Tina Dinh</div>
          <div className="flex-none hidden lg:block">
            <ul className="text-lg menu menu-horizontal">
              <li className="btn btn-ghost hover:bg-sky-400">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="btn btn-ghost hover:bg-sky-400 ">
                <div className="dropdown dropdown-bottom">
                  <div tabIndex={0} role="button">
                    Gallery
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] text-slate-700 bg-slate-300 rounded-box w-32 "
                  >
                    <li className="transition-all rounded-lg hover:scale-110 hover:bg-sky-400">
                      <Link href={"/gallery?contentType=street"}>Street</Link>
                    </li>
                    <li className="transition-all rounded-lg hover:scale-110 hover:bg-sky-400">
                      <Link href={"/gallery?contentType=portraits"}>
                        Portaits
                      </Link>
                    </li>
                    <li className="transition-all rounded-lg hover:scale-110 hover:bg-sky-400">
                      <Link href={"/gallery?contentType=boudoir"}>
                        Boudouir
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="btn btn-ghost hover:bg-sky-400">
                <Link href={"/rates"}>Rates</Link>
              </li>
              <li className="btn btn-ghost hover:bg-sky-400">
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
        <ul className="min-h-full p-4 text-lg text-slate-700 bg-slate-300 menu w-72">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <details open>
              <summary>Gallery</summary>
              <ul>
                <li>
                  <Link href={"/gallery?contentType=street"}>Street</Link>
                </li>
                <li>
                  <Link href={"/gallery?contentType=portraits"}>Portaits</Link>
                </li>
                <li>
                  <Link href={"/gallery?contentType=boudoir"}>Boudouir</Link>
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
