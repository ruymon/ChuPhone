import Lottie from "react-lottie";
import animationData from './../../assets/apps/ifood/groceries-loader.json';

const animationDefaultOptions = {
  loop: false,
  autoplay: true,
  animationData,
};

export function Loader({ callbackFunction }: { callbackFunction: (value: boolean) => void}) {  

  const animationEventListeners = [
    {
      eventName: "complete",
      callback: () => callbackFunction(false),
    },
  ];
  
  return (
    <div className="h-full w-full flex flex-col gap-6 items-center justify-center">
      <div className="scale-95 cursor-default">
        <Lottie options={animationDefaultOptions} isClickToPauseDisabled={true} eventListeners={animationEventListeners}/>
      </div>
    </div>
  );
};