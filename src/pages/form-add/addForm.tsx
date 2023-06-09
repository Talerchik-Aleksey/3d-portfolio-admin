import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export function AddWorkForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImage] = useState("");
  const [object, setObject] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();

  function handleFileSelect(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      setFileContent(event?.target?.result as string);
    };

    reader.readAsText(file);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    if (!fileContent) {
      alert(t("adminPanel.noFile"));
      return;
    }

    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/new`, {
      name,
      description,
      image: imageUrl,
      object: fileContent,
    });
    setName("");
    setDescription("");
    setImage("");
    setObject("");
    setLoading(false);
    if (response.status === 200) {
      navigate("/admin-panel");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">{t("adminPanel.addWork")}</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          {t("adminPanel.name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={100}
          required
          className="border w-full text-white-900 rounded-full py-2 px-4 mr-2 bg-neutral-700 border-neutral-600 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-medium mb-1">
          {t("adminPanel.descriptionLabel")}
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          maxLength={1000}
          required
          className="border w-full text-white-900 rounded py-2 px-4 mr-2 bg-neutral-700 border-neutral-600 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block font-medium mb-1">
          {t("adminPanel.image")}
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={imageUrl}
          onChange={(event) => setImage(event.target.value)}
          required
          className="border w-full text-white-900 rounded-full py-2 px-4 mr-2 bg-neutral-700 border-neutral-600 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="object" className="block font-medium mb-1">
          {t("adminPanel.object")}
        </label>
        <input
          type="file"
          id="object"
          name="object"
          onChange={handleFileSelect}
          accept=".gltf"
          required
          className="border w-full text-white-900 rounded-full py-2 px-4 mr-2 bg-neutral-700 border-neutral-600 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        />
      </div>
      <div className="flex justify-end gap-6 items-center align-center">
        <Link to="/admin-panel" className="flex items-center text-sm">
          <button type="button" className="text-gray-500 font-medium mr-4">
            {t("adminPanel.cancel")}
          </button>
        </Link>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {t("adminPanel.add")}
        </button>
        {loading && <img src="./download.png" alt="loading" className="animate-bounce w-6 h-6" />}
      </div>
    </form>
  );
}
