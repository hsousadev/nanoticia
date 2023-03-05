import { Container, Content } from "./styles";

import TopBar from "./components/TopBar";
import Categories from "./components/Categories";
import Highlights from "./components/Highlights";
import News from "./components/News";

const MainPage = () => {
  return (
    <Container>
      <Content>
        <TopBar />
        <Categories />
        <h2 className="slogan">
          Os principais portais <br /> de notícias em <mark>um só lugar.</mark>
        </h2>
        <Highlights />
        <News />
      </Content>
    </Container>
  );
};

export default MainPage;
