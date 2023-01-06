import { useContext } from "react";
import { Sparkle } from "phosphor-react";

import { GlobalContext } from "../../../../pages/index";

import ThumbNews from "../../../../shared/components/ThumbNews";

import { Container } from "./styles";

const Highlights = () => {
  const { green, greenIconsSize, news } = useContext(GlobalContext);

  return (
    <Container>
      <h2>
        <Sparkle weight="thin" size={greenIconsSize} color={green} /> Destaques
      </h2>
      <div className="big-thumb">
        <ThumbNews
          category=""
          description=""
          source=""
          style=""
          image=""
          publishedAt={0}
          title=""
          url=""
        />
      </div>
    </Container>
  );
};

export default Highlights;
