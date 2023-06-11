import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const adminLogin = import.meta.env.VITE_ADMIN_LOGIN;
      const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

      if (login === adminLogin && password === adminPassword) {
        navigate("/admin-panel");
      } else {
        setLogin("");
        setPassword("");
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-20">
      <h1 className="text-blue-400 text-6xl font-mono subpixel-antialiased font-black underline text-center">
        {t("adminPanel.login")}
      </h1>
      <div className="flex flex-col items-center w-1/5 gap-8">
        <label className="flex flex-col min-w-min w-full">
          {t("adminPanel.login")}:{" "}
          <input
            value={login}
            type="text"
            className="border text-slate-900 rounded py-2 px-4 mr-2"
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>

        <label className="flex flex-col min-w-min w-full">
          {t("adminPanel.password")}:{" "}
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border text-slate-900 rounded py-2 px-4 mr-2"
          />
        </label>
      </div>
      <div className="flex flex-col items-center gap-2">
        {isError && <p className="text-red-500">{t("adminPanel.error")}</p>}
        <button
          className="shadow-lg shadow-indigo-500/40 bg-indigo-500 text-slate-300 px-8 py-2 rounded"
          onClick={handleLogin}
        >
          {t("adminPanel.signIn")}
        </button>
      </div>
    </div>
  );
}
