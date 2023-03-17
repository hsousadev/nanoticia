import { Container, Content } from "./styles";

import TopBar from "./components/TopBar";
import Categories from "./components/Categories";
import Highlights from "./components/Highlights";
import News from "./components/News";
import Footer from "./components/Footer";
import { useEffect } from "react";

const MainPage = () => {
  useEffect(() => {
    const wasReloaded = sessionStorage.getItem("wasReloaded");

    if (wasReloaded !== "true") {
      sessionStorage.setItem("wasReloaded", "true");
      window.location.reload();
    }
  }, []);

  return (
    <Container id="top">
      <Content>
        <TopBar />
        <Categories />
        <h2 className="slogan">
          Os principais portais <br /> de notícias em <mark>um só lugar.</mark>
        </h2>
        <Highlights />
        <News />
        <Footer />
      </Content>
    </Container>
  );
};

export default MainPage;
