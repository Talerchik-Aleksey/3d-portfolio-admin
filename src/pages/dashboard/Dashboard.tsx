import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Work = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export function Dashboard() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch works from backend and set to works state
  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    fetch(backendUrl)
      .then((res) => res.json())
      .then((data) => {
        setWorks(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  async function deleteHandler(id: number) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    await fetch(`${backendUrl}/${id}`, {
      method: "DELETE",
    });
    setWorks((prevWorks) => prevWorks.filter((work) => work.id !== id));
  }

  return (
    <div className="w-5/6 mx-auto">
      <h1 className="text-3xl font-bold text-slate-200 mt-10">Dashboard</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 mt-10">
        {loading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          works.map((work) => (
            <div
              key={work.id}
              className="rounded-lg bg-slate-700 p-4 flex flex-col gap-4 w-max max-w-sm"
            >
              <div>
                <h2 className="text-2xl pb-2 font-bold">{work.name}</h2>
                <p className="mb-4">{work.description}</p>
                <img src={work.image} alt={work.name} className=" w-full rounded" />
              </div>
              <div>
                <Link to={`/edit/${work.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Edit</button>
                </Link>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => deleteHandler(work.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
