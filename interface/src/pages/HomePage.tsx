import { AppIcon } from "../components/AppIcon";
import { usePlayStore } from "../hooks/usePlayStore";

export function HomePage() {
  const { apps: installedApps } = usePlayStore();

  return (
    <div className="rounded-md flex flex-col relative h-full w-full select-none">
      <div className="text-white flex flex-col justify-between px-8 h-full w-full z-50 absolute py-6">

        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-semibold">21:15</h1>
          <span>seg. 2 de janeiro</span>
        </div>

        <div className="grid grid-cols-4 grid-flow-row justify-between gap-6">
          {
            installedApps.map(({ icon, name, installed, routePath }) => {
              if (!installed) return null;

              return (
                <AppIcon icon={icon} title={name} appPath={routePath} key={routePath}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
