import { Link } from "react-router-dom";

interface AppIconProps {
  icon: string;
  title: string;
  appPath: string;
};

export function AppIcon({ icon, title, appPath }: AppIconProps) {
  return (
    <Link to={appPath} className="flex flex-col items-center gap-1 cursor-pointer group">
      <img src={`/icons/${icon}`} className="rounded-lg w-16 group-hover:scale-105 transition-all"  draggable="false"/>
      <span>{title}</span>
    </Link>
  );
};
