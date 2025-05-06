import {
  LucideDiscAlbum,
  LucideHeart,
  LucideHome,
  LucideListMusic,
  LucidePlaneTakeoff,
  LucideUserRoundSearch,
  LucideVideo,
} from "lucide-react";
import React from "react";
import Logo from "../ui/logo";

const primaryLinks = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: <LucideHome />,
  },
  {
    id: 2,
    label: "About Us",
    path: "/about",
    icon: <LucideUserRoundSearch />,
  },
  {
    id: 3,
    label: "Tour",
    path: "/tour",
    icon: <LucidePlaneTakeoff />,
  },
];

const secondaryLinks = [
  {
    id: 1,
    label: "Albums",
    path: "/albums",
    icon: <LucideDiscAlbum />,
  },
  {
    id: 2,
    label: "Favourite Songs",
    path: "/songs",
    icon: <LucideHeart />,
  },
  {
    id: 3,
    label: "Videos",
    path: "/videos",
    icon: <LucideVideo />,
  },
  {
    id: 4,
    label: "Playlist",
    path: "/playlist",
    icon: <LucideListMusic />,
  },
];

export default function Sidebar() {
  return (
    <nav className="h-screen pt-10 pl-8">
      <Logo />
      <div className="my-10">
        <ul className="space-y-5">
          {primaryLinks.map((link) => (
            <li key={link.id}>
              <a href={link.path}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-muted-foreground">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <br />

        <ul className="space-y-5">
          <h3 className="text-muted-foreground">Your Collection</h3>
          {secondaryLinks.map((link) => (
            <li key={link.id}>
              <a href={link.path}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-muted-foreground">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
