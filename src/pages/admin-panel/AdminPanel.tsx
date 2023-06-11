import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import interiorDesign from "../../assets/interior-design.png";

export function AdminPanel() {
  const [t, i18n] = useTranslation();
  return (
    <div className="w-full h-full flex gap-11 items-center justify-center mt-20 flex-wrap">
      <div className="flex flex-col items-center gap-20 flex-[1_1_500px]">
        <div className="text-blue-400 text-6xl font-mono subpixel-antialiased font-black underline text-center">
          {t("adminPanel.title")}
        </div>

        <p className="w-4/5 text-slate-300 text-justify">{t("adminPanel.description")}</p>
        <Link to="/login">
          <button className="shadow-lg shadow-indigo-500/40 bg-indigo-500 text-slate-300 px-8 py-2 rounded">
            {t("adminPanel.login")}
          </button>
        </Link>
      </div>
      <img
        src={interiorDesign}
        alt="Decoration"
        width={900}
        height={900}
        className="flex-[1_1_400px] w-full"
      />
    </div>
  );
}
