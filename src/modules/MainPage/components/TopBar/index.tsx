import Image from "next/image";
import logo from "../../../../shared/assets/nanoticia-logo.png";

import useWindowSize from "../../../../shared/utils/useWindowSize";

import { Container } from "./styles";

const TopBar = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 720;

  return (
    <Container>
      <Image src={logo} alt="logo" />
      {isMobile && (
        <div className="date-temperature">
          <h4>Terça-feira, 1 Nov, 2022</h4>
          <h4>São Paulo, 18ºC</h4>
        </div>
      )}
    </Container>
  );
};

export default TopBar;
