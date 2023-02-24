import React from "react";
import Moment from "react-moment";
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
  return (
    <Container design={design} onClick={() => window.open(url, "_blank")}>
      <div className="thumb-image">
        {image && <img src={image} alt="fill" />}
      </div>
      <div className="info">
        {design === "highlight" && (
          <>
            <h4>{source}</h4>
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <p className="publishedAt">
              <Moment fromNow ago>
                {publishedAt}
              </Moment>
            </p>
            <p>{category}</p>
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
