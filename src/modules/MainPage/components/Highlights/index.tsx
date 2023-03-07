import { useContext } from "react";
import { Sparkle } from "phosphor-react";

import { GlobalContext } from "../../../../pages/index";
// import { data } from "../../../../shared/mock/newsData";

import ThumbNews from "../../../../shared/components/ThumbNews";
import SectionTitle from "../../../../shared/components/SectionTitle";
import useWindowSize from "../../../../shared/utils/useWindowSize";

import { Container } from "./styles";

const Highlights = () => {
  const { news } = useContext(GlobalContext);

  // const news = data;

  const windowSize = useWindowSize();
  const isHighlightToResize = windowSize.windowWidth <= 1045;

  return (
    <Container>
      <SectionTitle
        icon={<Sparkle weight="thin" size={40} color="#65D2AE" />}
        title="Destaques"
      />
      <div className="highlight">
        {!isHighlightToResize && (
          <ThumbNews
            category={news[0].category}
            description={news[0].description}
            source={news[0].source}
            design="highlight"
            image={news[0].image}
            publishedAt={news[0].published_at}
            title={news[0].title}
            url={news[0].url}
          />
        )}
        <div className="secondary-highlights">
          {isHighlightToResize && (
            <ThumbNews
              category={news[0].category}
              description={news[0].description}
              source={news[0].source}
              design="vertical"
              image={news[0].image}
              publishedAt={news[0].published_at}
              title={news[0].title}
              url={news[0].url}
            />
          )}
          {news.slice(1, 5).map((news: any, index: number) => (
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
