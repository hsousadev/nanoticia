import React from "react";
import Image, { StaticImageData } from "next/image";

import { Container } from "./styles";

interface ThumbNewsProps {
  category?: string;
  description: string;
  source: string;
  style?: any;
  image: string;
  publishedAt: string;
  title: string;
  url: string;
}

const ThumbNews = ({
  category,
  description,
  source,
  style,
  image,
  publishedAt,
  title,
  url,
}: ThumbNewsProps) => {
  return (
    <Container style={style}>
      <div className="thumb-image">
        <img src={image} alt="fill" />
      </div>
      <div className="info">
        {style === "highlight" && (
          <>
            <h4>{source}</h4>
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <p className="publishedAt">{publishedAt}</p>
            <p>{category}</p>
          </>
        )}
        {style === "vertical" && (
          <>
            <p className="publishedAt">{publishedAt}</p>
            <h4>{title}</h4>
            <p>{source}</p>
          </>
        )}
      </div>
    </Container>
  );
};

export default ThumbNews;
