import { useEffect } from "react";
import { Sparkle } from "phosphor-react";

import { GlobalContext } from "../../../../pages/index";
import { data } from "../../../../shared/mock/newsData";

import ThumbNews from "../../../../shared/components/ThumbNews";
import SectionTitle from "../../../../shared/components/SectionTitle";
import useWindowSize from "../../../../shared/utils/useWindowSize";

import { Container } from "./styles";

const Highlights = () => {
  // const { news } = useContext(GlobalContext);
  const windowSize = useWindowSize();
  const isHighlightToResize = windowSize.windowWidth <= 1045;
  const newsWithImages = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].image) {
      newsWithImages.push(data[i]);
    }
  }

  const firstNews = newsWithImages.slice(0, 5);

  return (
    <Container>
      <SectionTitle
        icon={<Sparkle weight="thin" size={40} color="#65D2AE" />}
        title="Destaques"
      />
      <div className="highlight">
        {!isHighlightToResize && (
          <ThumbNews
            category={firstNews[0].category}
            description={firstNews[0].description}
            source={firstNews[0].source}
            design="highlight"
            image={firstNews[0].image}
            publishedAt={firstNews[0].published_at}
            title={firstNews[0].title}
            url={firstNews[0].url}
          />
        )}
        <div className="secondary-highlights">
          {isHighlightToResize && (
            <ThumbNews
              category={firstNews[0].category}
              description={firstNews[0].description}
              source={firstNews[0].source}
              design="vertical"
              image={firstNews[0].image}
              publishedAt={firstNews[0].published_at}
              title={firstNews[0].title}
              url={firstNews[0].url}
            />
          )}
          {firstNews.slice(1, 5).map((news, index) => (
            <ThumbNews
              key={index}
              category={news.category}
              description={news.description}
              source={news.source}
              design="vertical"
              image={news.image}
              publishedAt={news.published_at}
              title={news.title}
              url={news.url}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Highlights;
