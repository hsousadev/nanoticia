import { useContext, useEffect, useState } from "react";
import { Sparkle } from "phosphor-react";

import { GlobalContext } from "../../../../pages/index";

import ThumbNews from "../../../../shared/components/ThumbNews";
import SectionTitle from "../../../../shared/components/SectionTitle";
import useWindowSize from "../../../../shared/utils/useWindowSize";

import { Container } from "./styles";

const Highlights = () => {
  const { news } = useContext(GlobalContext);

  const windowSize = useWindowSize();
  const isHighlightToResize = windowSize.windowWidth <= 1045;

  const newsMock = {
    category: "Esportes",
    description:
      "Apesar de ter saído atrás no placar, o América-MG conseguiu acabar com o jejum de vitórias em...",
    source: "Estadão Conteúdo",
    design: "highlight",
    image:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte6772a27d458ca38/6340544504a357107858cc27/america_mg_x_sao_paulo.jpg",
    publishedAt: "2020-01-01",
    title:
      "América-MG vira sobre o Avaí e volta a vencer em casa no Brasileirão",
    url: "https://ge.globo.com/",
  };

  return (
    <Container>
      <SectionTitle
        icon={<Sparkle weight="thin" size={40} color="#65D2AE" />}
        title="Destaques"
      />

      <div className="highlight">
        {!isHighlightToResize && (
          <ThumbNews
            category={newsMock.category}
            description={newsMock.description}
            source={newsMock.source}
            design={newsMock.design}
            image={newsMock.image}
            publishedAt={newsMock.publishedAt}
            title={newsMock.title}
            url={newsMock.url}
          />
        )}
        <div className="secondary-highlights">
          {isHighlightToResize && (
            <ThumbNews
              category={newsMock.category}
              description={newsMock.description}
              source={newsMock.source}
              design="vertical"
              image={newsMock.image}
              publishedAt={newsMock.publishedAt}
              title={newsMock.title}
              url={newsMock.url}
            />
          )}
          <ThumbNews
            category={newsMock.category}
            description={newsMock.description}
            source={newsMock.source}
            design="vertical"
            image={newsMock.image}
            publishedAt={newsMock.publishedAt}
            title={newsMock.title}
            url={newsMock.url}
          />
          <ThumbNews
            category={newsMock.category}
            description={newsMock.description}
            source={newsMock.source}
            design="vertical"
            image={newsMock.image}
            publishedAt={newsMock.publishedAt}
            title={newsMock.title}
            url={newsMock.url}
          />
          <ThumbNews
            category={newsMock.category}
            description={newsMock.description}
            source={newsMock.source}
            design="vertical"
            image={newsMock.image}
            publishedAt={newsMock.publishedAt}
            title={newsMock.title}
            url={newsMock.url}
          />
          <ThumbNews
            category={newsMock.category}
            description={newsMock.description}
            source={newsMock.source}
            design="vertical"
            image={newsMock.image}
            publishedAt={newsMock.publishedAt}
            title={newsMock.title}
            url={newsMock.url}
          />
        </div>
      </div>
    </Container>
  );
};

export default Highlights;
