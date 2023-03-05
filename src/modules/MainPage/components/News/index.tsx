import React, { useContext, useState } from "react";
import { Newspaper, ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { GlobalContext } from "../../../../pages/index";

import SectionTitle from "../../../../shared/components/SectionTitle";
import ThumbNews from "../../../../shared/components/ThumbNews";
import useWindowSize from "../../../../shared/utils/useWindowSize";

import { data } from "../../../../shared/mock/newsData";

import { Container } from "./styles";

// interface newsProps {
//   author: string;
//   title: string;
//   description: string;
//   url: string;
//   source: string;
//   image: string;
//   category: string;
//   language: string;
//   country: string;
//   published_at: string;
// }

const News = () => {
  const { news } = useContext(GlobalContext);

  const windowSize = useWindowSize();
  const isNewsToResize = windowSize.windowWidth <= 1180;

  const [showSecondHalf, setShowSecondHalf] = useState(false);

  // const data = news;

  const firstHalf = data.slice(5, 30);
  const secondHalf = data.slice(31, 60);

  return (
    <Container>
      <SectionTitle
        icon={<Newspaper weight="thin" size={40} color="#65D2AE" />}
        title="Mais notícias"
      />
      <div className="news">
        {firstHalf.map((news: any, index: any) => (
          <ThumbNews
            key={index}
            category={news.category}
            description={news.description}
            source={news.source}
            design={isNewsToResize ? "vertical" : "horizontal"}
            image={news.image}
            publishedAt={news.published_at}
            title={news.title}
            url={news.url}
          />
        ))}

        {showSecondHalf &&
          secondHalf.map((news: any, index: any) => (
            <ThumbNews
              key={index}
              category={news.category}
              description={news.description}
              source={news.source}
              design={isNewsToResize ? "vertical" : "horizontal"}
              image={news.image}
              publishedAt={news.published_at}
              title={news.title}
              url={news.url}
            />
          ))}
      </div>

      <div className="see-more-news">
        <button onClick={() => setShowSecondHalf(!showSecondHalf)}>
          {!showSecondHalf ? (
            <>
              <h4>Ver mais notícias</h4>
              <ArrowCircleDown weight="thin" size={40} color="#65D2AE" />
            </>
          ) : (
            <>
              <h4>Ver menos notícias</h4>
              <ArrowCircleUp weight="thin" size={40} color="#65D2AE" />
            </>
          )}
        </button>
      </div>
    </Container>
  );
};

export default News;
