import React, { useEffect, useState } from "react";

import { ThumbNewsProps } from "./interface";
import { icons } from "./components/Icons";
import { categories } from "./components/Categories";

import { Container } from "./styles";

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
  var date = new Date(publishedAt);
  const hourDate = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [hasImage, setHasImage] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    for (let i in categories) {
      if (categories[i].type === category) {
        setNewCategory(categories[i].name);
      }
    }
  }, [category]);

  useEffect(() => {
    if (image?.length) setHasImage(true);
  }, [image?.length]);

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
              icon.name === category && <div key={index}>{icon.image}</div>
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
            <p className="publishedAt">Hoje às {hourDate} </p>
          </>
        )}
        {design === "vertical" && (
          <>
            <div>
              <p className="publishedAt">Hoje às {hourDate} </p>
              <h4>{title}</h4>
              <p>{source}</p>
            </div>
            <div className="category">
              <p>{newCategory}</p>
              {icons.map(
                (icon, index) =>
                  icon.name === category && <div key={index}>{icon.image}</div>
              )}
            </div>
          </>
        )}
        {design === "horizontal" && (
          <>
            <div>
              <p className="publishedAt">Hoje às {hourDate} </p>
              <h4>{title}</h4>
              <p>{source}</p>
            </div>
            <div className="category">
              <p>{newCategory}</p>
              {icons.map(
                (icon, index) =>
                  icon.name === category && <div key={index}>{icon.image}</div>
              )}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default ThumbNews;
