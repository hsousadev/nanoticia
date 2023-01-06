import { Container, Content } from "./styles";

import TopBar from "./components/TopBar";
import Categories from "./components/Categories";
import Highlights from "./components/Highlights";

const MainPage = () => {
  return (
    <Container>
      <Content>
        <TopBar />
        <Categories />
        <h2>Os  portais <br/> de notícias em <mark>um só lugar.</mark></h2>
        <Highlights />
      </Content>
    </Container>
  );
};

export default MainPage;
