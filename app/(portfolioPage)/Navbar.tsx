"use client";

import { Menu } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [subMenuVisable, setSubMenuVisable] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-10 flex flex-row items-center justify-center w-full p-4 px-6 text-zinc-200 bg-zinc-950">
      <div className="flex-grow">
        <p className="text-xl font-semibold tracking-tight">Tina Dinh</p>
      </div>
      <ul className="flex-row hidden gap-6 px-10 lg:flex">
        <li className="px-3.5 py-2 rounded-lg hover:bg-sky-400">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-3.5 py-2 rounded-lg hover:bg-sky-400">
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex items-center justify-center w-full gap-1">
              Gallery <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 z-20 w-32 mt-2 origin-top-right rounded-md shadow-lg text-zinc-200 bg-zinc-950">
              <Menu.Item>
                <Link
                  href={"/gallery?contentType=street"}
                  className="flex items-center w-full px-2 py-2 rounded-md hover:bg-sky-400"
                >
                  Street
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={"/gallery?contentType=portait"}
                  className="flex items-center w-full px-2 py-2 rounded-md hover:bg-sky-400"
                >
                  Portait
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={"/gallery?contentType=boudoir"}
                  className="flex items-center w-full px-2 py-2 rounded-md hover:bg-sky-400"
                >
                  Boudoir
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </li>
        <li className="px-3.5 py-2 rounded-lg hover:bg-sky-400">
          <Link href={"/rates"}>Rates</Link>
        </li>
        <li className="px-3.5 py-2 rounded-lg hover:bg-sky-400">
          <Link href={"/links"}>Links</Link>
        </li>
        <li className="px-3.5 py-2 rounded-lg hover:bg-sky-400">
          <Link href={"https://www.instagram.com/tinavivix/"}>Contact</Link>
        </li>
      </ul>
      <Menu as="div" className="lg:hidden">
        <Menu.Button>
          <Bars3Icon className="w-7 h-7" />
        </Menu.Button>
        <Menu.Items className="absolute left-0 z-10 w-2/3 h-screen pl-4 rounded-md shadow-lg text-zinc-200 bg-zinc-950">
          <Menu.Item>
            <Link
              href={"/"}
              className="flex items-center w-full px-2 py-2 text-lg rounded-md"
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button
              className="flex items-center w-full px-2 py-2 text-lg rounded-md"
              onClick={(e) => {
                e.preventDefault();
                setSubMenuVisable((prev) => !prev);
              }}
            >
              Gallery <ChevronDownIcon className="w-6 h-6" />
            </button>
          </Menu.Item>
          {subMenuVisable && (
            <>
              <Menu.Item>
                <Link
                  href={"/gallery?contentType=street"}
                  className="flex items-center w-full px-2 py-2 ml-4 text-lg rounded-md"
                >
                  Street
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={"/gallery?contentType=portait"}
                  className="flex items-center w-full px-2 py-2 ml-4 text-lg rounded-md"
                >
                  Portait
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={"/gallery?contentType=boudoir"}
                  className="flex items-center w-full px-2 py-2 ml-4 text-lg rounded-md"
                >
                  Boudoir
                </Link>
              </Menu.Item>
            </>
          )}
          <Menu.Item>
            <Link
              href={"/rates"}
              className="flex items-center w-full px-2 py-2 text-lg rounded-md"
            >
              Rates
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              href={"/links"}
              className="flex items-center w-full px-2 py-2 text-lg rounded-md"
            >
              Links
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              href={"https://www.instagram.com/tinavivix/"}
              className="flex items-center w-full px-2 py-2 text-lg rounded-md"
            >
              Contact
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </nav>
  );
}
