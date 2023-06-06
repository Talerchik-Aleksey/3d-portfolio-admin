import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  return (
    <header className="flex flex-col-reverse gap-5 justify-between items-center md:flex-row py-3 w-5/6 my-0 mx-auto">
      <nav className="gap-10 flex text-stone-300 font-bold ">
        <Link
          to={"/"}
          className={`${
            location.pathname === "/"
              ? "text-blue-500 hover:text-blue-400"
              : "text-stone-300 hover:text-stone-100"
          } cursor-pointer`}
        >
          Home
        </Link>
      </nav>
    </header>
  );
}
