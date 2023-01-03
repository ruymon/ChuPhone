import { createContext, ReactNode, useState } from "react";
import { defaultAppsHelper, IApps } from "../helpers/defaultAppsHelper";

interface PlayStoreContextProviderProps {
  children: ReactNode;
}

interface IPlayStoreContext {
  apps: IApps[];
  setApps: React.Dispatch<React.SetStateAction<IApps[]>>;
}

export const PlayStoreContext = createContext({} as IPlayStoreContext);

export function PlayStoreContextProvider({children}: PlayStoreContextProviderProps) {
  const [apps, setApps] = useState<IApps[]>(defaultAppsHelper);

  return (
    <PlayStoreContext.Provider value={{ apps, setApps }}>
      {children}
    </PlayStoreContext.Provider>
  );
}
