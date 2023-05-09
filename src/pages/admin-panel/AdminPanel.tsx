import { Link } from "react-router-dom";
import interiorDesign from "../../assets/interior-design.png";

export function AdminPanel() {
  return (
    <div className="w-full flex gap-11 items-center">
      <div className="flex flex-col items-center gap-20">
        <div className="text-blue-400 text-6xl font-mono subpixel-antialiased font-black underline text-center">
          Admin Panel
        </div>

        <p className="w-4/5 text-slate-300 text-justify">
          The start page of an admin panel for a website serves as the central hub for managing the
          website's content and settings. It provides an overview of the website's status and
          performance, as well as quick access to the most commonly used tools and features. The
          start page typically includes widgets or modules that display key metrics such as site
          traffic, user engagement, and sales data, allowing the site administrator to quickly
          assess the site's performance.
        </p>
        <Link to="/login">
          <button className="shadow-lg shadow-indigo-500/40 bg-indigo-500 text-slate-300 px-8 py-2 rounded">
            Login
          </button>
        </Link>
      </div>
      <img src={interiorDesign} alt="Decoration" />
    </div>
  );
}
