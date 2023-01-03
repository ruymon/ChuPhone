import { AiOutlineCloudDownload, AiOutlineSearch } from "react-icons/ai";
import { usePlayStore } from "../hooks/usePlayStore";

interface PlayStoreProps {};

export function PlayStore({}: PlayStoreProps) {
  const { apps } = usePlayStore();

  const selectedApp = apps.find(app => app.routePath === location.pathname);

  return (
    <div className="h-full w-full px-6 text-neutral-100 py-4 flex flex-col gap-4 max-h-[48rem] overflow-y-auto overflow-x-hidden">
      <div className="w-full bg-neutral-700 px-4 rounded-full flex items-center gap-2 text-neutral-200">
        <AiOutlineSearch />
        <input className="py-2 w-full bg-transparent placeholder:text-neutral-300 focus:outline-none" placeholder="Buscar por apps & games" />
      </div>

      <h1 className="text-2xl font-bold mb-1">Apps</h1>

      <div className="flex flex-col gap-1 w-full">
        {
          apps.map(({ icon, name, routePath, installed, size }) => (
            <button type="button" className="text-left flex items-center group justify-between w-full hover:bg-neutral-800 rounded-lg p-2" key={routePath}>
              <div className="flex items-center gap-3">
                <img src={`/icons/${icon}`}
                  className="w-12 h-12"
                />
                <div className="flex flex-col">
                  <h1 className="text-lg font-medium leading-6 text-neutral-100">{name}</h1>
                  <p className="text-sm text-neutral-400">{size}</p>
                </div>
              </div>


              {installed ? (
                <div className="hidden items-center group-hover:flex text-green-500 p-1 px-3 rounded-lg hover:bg-green-500/10">
                  <span>Abrir</span>
                </div>

              ) : (
                <div className="hidden items-center gap-2 group-hover:flex">
                  <AiOutlineCloudDownload />
                  <span>Instalar</span>
                </div>

              )}






            </button>
          ))
        }
      </div>
    </div>
  );
};  
