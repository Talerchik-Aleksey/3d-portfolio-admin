import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const [t, i18n] = useTranslation();
  const locales: Record<string, string> = { en: "en", ru: "ru" };

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
          {t("header.home")}
        </Link>
      </nav>
      <div className="flex items-center">
        <ul className="flex items-center space-x-2 bg-stone-900 rounded-full border-2 border-stone-800">
          {Object.keys(locales).map((key) => (
            <li
              key={key}
              className={`cursor-pointer px-2 rounded-full ${
                i18n.language === key ? "bg-blue-500" : ""
              }`}
            >
              <button onClick={() => i18n.changeLanguage(key)}>{locales[key]}</button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
