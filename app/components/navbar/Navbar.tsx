import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-[10%] h-full flex flex-col justify-center items-center">
      <ul className="flex flex-col items-start gap-16">
        <Link
          className="relative text-2xl cursor-pointer after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          href={"/"}
        >
          Home
        </Link>

        <Link
          className="relative text-2xl cursor-pointer after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          href={"/aboutme"}
        >
          About Me
        </Link>
        <Link
          className="relative text-2xl cursor-pointer after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          href={"/gallery"}
        >
          Gallery
        </Link>
        <Link
          className="relative text-2xl cursor-pointer after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          href={"/rates"}
        >
          Rates
        </Link>
        <Link
          className="relative text-2xl cursor-pointer after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
          href={"https://www.instagram.com/tinavivix/"}
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}
