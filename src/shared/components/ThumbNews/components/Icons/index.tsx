import {
  Newspaper,
  SoccerBall,
  Laptop,
  PlayCircle,
  Briefcase,
  Heartbeat,
  Atom,
} from "phosphor-react";

const iconsColor = "#65D2AE";
export const icons = [
  {
    name: "general",
    image: <Newspaper weight="thin" size={64} color={iconsColor} />,
  },
  {
    name: "sports",
    image: <SoccerBall weight="thin" size={64} color={iconsColor} />,
  },
  {
    name: "technology",
    image: <Laptop weight="thin" size={64} color={iconsColor} />,
  },
  {
    name: "entertainment",
    image: <PlayCircle weight="thin" size={64} color={iconsColor} />,
  },
  {
    name: "business",
    image: <Briefcase weight="thin" size={64} color={iconsColor} />,
  },
  {
    name: "health",
    image: <Heartbeat weight="thin" size={64} color={iconsColor} />,
  },
  {
    name: "science",
    image: <Atom weight="thin" size={64} color={iconsColor} />,
  },
];
