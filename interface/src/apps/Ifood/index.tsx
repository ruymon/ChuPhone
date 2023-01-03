import { useState } from "react";
import { Loader } from "./Loader";

export function Ifood() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader callbackFunction={setIsLoading}/>
  } else {
    return (
      <div className="h-full w-full select-none px-6 bg-neutral-100 text-white py-4 flex flex-col gap-6 items-center justify-center">
        <h1>Olá</h1>
      </div>
    );
  };
};