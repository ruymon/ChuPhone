export interface IApps {
  name: string;
  icon: string;
  routePath: string;
  size: string;
  installed: boolean;
  background?: string;
}

export const defaultAppsHelper: IApps[] = [
  {
    name: "Fleeca",
    icon: "bank.png",
    routePath: "/fleeca",
    size: "5.5 MB",
    installed: false,
  },
  {
    name: "Store",
    icon: "store.png",
    routePath: "/store",
    background: "bg-neutral-900",
    size: "101 MB",
    installed: true,
  },
  {
    name: "Blaze",
    icon: "blaze.png",
    routePath: "/blaze",
    size: "139 MB",
    installed: false,
  },
  {
    name: "Calculadora",
    icon: "calculator.png",
    background: "bg-neutral-900",
    routePath: "/calculator",
    size: "5.5 MB",
    installed: true,
  },
  {
    name: "Camera",
    icon: "camera.png",
    routePath: "/camera",
    size: "6 MB",
    installed: true,
  },
  {
    name: "Preferências",
    icon: "settings.png",
    routePath: "/settings",
    size: "4 MB",
    installed: true,
  },
  {
    name: "Contatos",
    icon: "contacts.png",
    routePath: "/contacts",
    size: "4.8 MB",
    installed: true,
  },
  {
    name: "E-mail",
    icon: "email.png",
    routePath: "/email",
    size: "46 MB",
    installed: true,
  },
  {
    name: "IFood",
    icon: "ifood.png",
    routePath: "/ifood",
    size: "130 MB",
    installed: false,
  },
  {
    name: "Instagram",
    icon: "instagram.png",
    routePath: "/instagram",
    size: "264 MB",
    installed: false,
  },
  {
    name: "Notion",
    icon: "notion.png",
    routePath: "/notion",
    size: "156 MB",
    installed: false,
  },
  {
    name: "OLX",
    icon: "olx.png",
    routePath: "/olx",
    size: "370 MB",
    installed: false,
  },
  {
    name: "Slither",
    icon: "slither.png",
    routePath: "/slither",
    size: "6 MB",
    installed: false,
  },
  {
    name: "Spotify",
    icon: "spotify.png",
    routePath: "/spotify",
    size: "250 MB",
    background: "bg-black",
    installed: true,
  },
  {
    name: "Telefone",
    icon: "phone.png",
    routePath: "/phone",
    size: "15 MB",
    installed: true,
  },
  {
    name: "Tinder",
    icon: "tinder.png",
    routePath: "/tinder",
    size: "480 MB",
    installed: false,
  },
  {
    name: "Whatsapp",
    icon: "whatsapp.png",
    routePath: "/whatsapp",
    size: "478 MB",
    installed: false,
  },
  {
    name: "Tor",
    icon: "tor.png",
    routePath: "/tor",
    size: "570 MB",
    installed: false,
  },
  {
    name: "Twitter",
    icon: "twitter.png",
    routePath: "/twitter",
    size: "1 GB",
    installed: false,
  },
  {
    name: "Truco",
    icon: "truco.png",
    size: "5 MB",
    routePath: "/truco",
    installed: false,
  },
];
