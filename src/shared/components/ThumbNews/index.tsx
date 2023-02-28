import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import {
  Newspaper,
  SoccerBall,
  Laptop,
  PlayCircle,
  Briefcase,
  Heartbeat,
  Atom,
  YoutubeLogo,
} from "phosphor-react";

import { Container } from "./styles";

interface ThumbNewsProps {
  category?: string;
  description: string;
  source: string;
  design?: any;
  image: string | null;
  publishedAt: string;
  title: string;
  url: string;
}

const ThumbNews = ({
  category,
  description,
  source,
  design,
  image,
  publishedAt,
  title,
  url,
}: ThumbNewsProps) => {
  const iconsColor = "#65D2AE";

  const icons = [
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

  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    if (image?.length) setHasImage(true);
  }, []);

  return (
    <Container
      hasImage={hasImage}
      design={design}
      onClick={() => window.open(url, "_blank")}
    >
      <div className="thumb-image">
        {image ? (
          <img src={image} alt="fill" />
        ) : (
          icons.map(
            (icon, index) =>
              icon.name === category && (
                <div key={index}>
                  {icon.image} <h4>{source}</h4>
                </div>
              )
          )
        )}
      </div>
      <div className="info">
        {design === "highlight" && (
          <>
            <h4>{source}</h4>
            <h2>{title}</h2>
            <p className="description">
              {description
                .replace(/&#8220;/i, "'")
                .replace(/&#8221;/i, "'")
                .replace(/&#8211;/i, "'")
                .replace(/&#8216;/i, "'")}
            </p>
            <p className="publishedAt">
              <Moment fromNow ago>
                {publishedAt}
              </Moment>
            </p>
          </>
        )}
        {design === "vertical" && (
          <>
            <p className="publishedAt">
              <Moment fromNow ago>
                {publishedAt}
              </Moment>
            </p>
            <h4>{title}</h4>
            <p>{source}</p>
          </>
        )}
      </div>
    </Container>
  );
};

export default ThumbNews;
