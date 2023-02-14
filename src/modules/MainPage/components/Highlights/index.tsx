import { useContext } from "react";
import { Sparkle } from "phosphor-react";

import { GlobalContext } from "../../../../pages/index";

import ThumbNews from "../../../../shared/components/ThumbNews";
import exampleImage from '../../../../shared/assets/america-mineiro.jpg'

import { Container } from "./styles";

const Highlights = () => {
  const { news } = useContext(GlobalContext);

  const newsMock = {
    category: "Esportes",
    description: "Apesar de ter saído atrás no placar, o América-MG conseguiu acabar com o jejum de vitórias em...",
    source: "Estadão Conteúdo",
    style: "bigHorizontal",
    image: exampleImage,
    publishedAt: "2020-01-01",
    title: "América-MG vira sobre o Avaí e volta a vencer em casa no Brasileirão",
    url: "https://ge.globo.com/"
  }

  return (
    <Container>
      <h2>
        <Sparkle weight="thin" size={40} color="#65D2AE" /> Destaques
      </h2>
      <div className="big-thumb">
        <ThumbNews
          category={newsMock.category}
          description={newsMock.description}
          source={newsMock.source}
          style={newsMock.style}
          image={newsMock.image}
          publishedAt={newsMock.publishedAt}
          title={newsMock.title}
          url={newsMock.url}
        />
      </div>
    </Container>
  );
};

export default Highlights;
