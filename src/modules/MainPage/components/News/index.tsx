import React, { useContext, useState } from "react";
import { Newspaper, PlusCircle, MinusCircle } from "phosphor-react";
import { GlobalContext } from "../../../../pages/index";

import SectionTitle from "../../../../shared/components/SectionTitle";
import ThumbNews from "../../../../shared/components/ThumbNews";

import useWindowSize from "../../../../shared/utils/useWindowSize";
import useShuffleArrays from "../../../../shared/utils/useShuffleArrays";

// import { data } from "../../../../shared/mock/newsData";

import { Container } from "./styles";

const News = () => {
  const { news } = useContext(GlobalContext);

  const windowSize = useWindowSize();

  const isNewsToResize = windowSize.windowWidth <= 1180;

  const [showSecondHalf, setShowSecondHalf] = useState(false);

  // const data = [...generalNews, ...technologyNews, ...worldNews, ...sportNews];

  const dataNews = news;

  return (
    <Container id="noticias">
      <SectionTitle
        icon={<Newspaper weight="thin" size={40} color="#65D2AE" />}
        title="Mais notícias"
      />
      <div className="news">
        {dataNews.slice(5, 20).map((news: any, index: any) => (
          <ThumbNews
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            image={news.image}
            publishedAt={news.publishedAt}
            source={news.source}
            design={isNewsToResize ? "vertical" : "horizontal"}
          />
        ))}

        {showSecondHalf &&
          dataNews
            .slice(20)
            .map((news: any, index: any) => (
              <ThumbNews
                key={index}
                title={news.title}
                description={news.description}
                url={news.url}
                image={news.image}
                publishedAt={news.publishedAt}
                source={news.source}
                design={isNewsToResize ? "vertical" : "horizontal"}
              />
            ))}
      </div>

      <div className="see-more-news">
        <button onClick={() => setShowSecondHalf(!showSecondHalf)}>
          {!showSecondHalf ? (
            <>
              <h4>Ver mais notícias</h4>
              <PlusCircle weight="thin" size={28} color="#65D2AE" />
            </>
          ) : (
            <>
              <h4>Ver menos notícias</h4>
              <MinusCircle weight="thin" size={28} color="#65D2AE" />
            </>
          )}
        </button>
      </div>
    </Container>
  );
};

export default News;
