"use client";

import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function Navbar() {
  const [subMenuVisable, setSubMenuVisable] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 z-50 flex flex-row items-center justify-center w-full p-4 px-6 text-zinc-200 bg-zinc-950">
      <div className="flex-grow">
        <p className="text-xl font-semibold tracking-tight">Tina Dinh</p>
      </div>
      <ul className="flex-row hidden gap-6 px-10 lg:flex">
        <li className="px-3.5 py-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-300 hover:to-pink-300 hover:text-zinc-900 transition-all hover:scale-105 duration-300 ">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="px-3.5 py-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-300 hover:to-pink-300 hover:text-zinc-900 transition-all hover:scale-105 duration-300">
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex items-center justify-center w-full gap-1">
              Gallery <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-50"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-50"
            >
              <Menu.Items className="absolute right-0 z-20 w-32 mt-4 origin-top rounded-md shadow-lg text-zinc-200 bg-zinc-950">
                <Menu.Item>
                  <Link
                    href={"/gallery?contentType=street"}
                    className="flex items-center w-full px-2 py-2 transition-all duration-300 rounded-md hover:bg-gradient-to-br hover:from-indigo-300 hover:to-pink-300 hover:text-zinc-900 hover:scale-105"
                  >
                    Street
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href={"/gallery?contentType=portait"}
                    className="flex items-center w-full px-2 py-2 transition-all duration-300 rounded-md hover:bg-gradient-to-br hover:from-indigo-300 hover:to-pink-300 hover:text-zinc-900 hover:scale-105"
                  >
                    Portait
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href={"/gallery?contentType=studio"}
                    className="flex items-center w-full px-2 py-2 transition-all duration-300 rounded-md hover:bg-gradient-to-br hover:from-indigo-300 hover:to-pink-300 hover:text-zinc-900 hover:scale-105"
                  >
                    Studio
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href={"/gallery?contentType=boudoir"}
                    className="flex items-center w-full px-2 py-2 transition-all duration-300 rounded-md hover:bg-gradient-to-br hover:from-indigo-300 hover:to-pink-300 hover:text-zinc-900 hover:scale-105"
                  >
                    Boudoir
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="px-3.5 py-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-300 hover:to-pink-300 hover:text-zinc-900 transition-all hover:scale-105 duration-300">
          <Link href={"/rates"}>Rates</Link>
        </li>
        <li className="px-3.5 py-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-300 hover:to-pink-300 hover:text-zinc-900 transition-all hover:scale-105 duration-300">
          <Link href={"https://www.instagram.com/tinavivix/"} target="_blank">
            Contact
          </Link>
        </li>
      </ul>
      <Menu as="div" className="lg:hidden ">
        <Menu.Button>
          <Bars3Icon className="w-7 h-7" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transform transition ease-in duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-out duration-200"
          leaveFrom="-translate-x-0 "
          leaveTo="-translate-x-full"
        >
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
            <Transition
              show={subMenuVisable}
              as={"div"}
              enter="duration-300 ease-in"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-300 ease-out"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0"
            >
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
                      href={"/gallery?contentType=studio"}
                      className="flex items-center w-full px-2 py-2 ml-4 text-lg rounded-md"
                    >
                      Studio
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
            </Transition>
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
                href={"https://www.instagram.com/tinavivix/"}
                className="flex items-center w-full px-2 py-2 text-lg rounded-md"
                target="_blank"
              >
                Contact
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}
