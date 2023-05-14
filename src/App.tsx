import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { AdminPanel } from "./pages/admin-panel/AdminPanel";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { EditWorkForm } from "./pages/form-edit/formEdit";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="text-stone-100">
      <Header />
      <Routes>
        <Route element={<AdminPanel />} path={"/"} />
        <Route element={<Login />} path={"/login"} />
        <Route element={<Dashboard />} path={"/admin-panel"} />
        <Route element={<EditWorkForm />} path={"/edit/:id"} />
      </Routes>
    </div>
  );
}

export default App;
