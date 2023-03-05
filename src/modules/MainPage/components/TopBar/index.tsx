import Image from "next/image";
import Moment from "react-moment";
import * as moment from "moment";
import "moment/locale/pt-br";

import logo from "../../../../shared/assets/nanoticia-logo.png";

import { getCurrentDate } from "../../../../shared/utils/getCurrentDate";

import useWindowSize from "../../../../shared/utils/useWindowSize";

import { Container } from "./styles";

const TopBar = () => {
  moment.locale("pt-br");
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 720;

  const currentDate = getCurrentDate();

  return (
    <Container>
      <Image src={logo} alt="logo" />
      {isMobile && (
        <div className="date-temperature">
          <h4>Hoje é</h4>
          <Moment format="D MMM YYYY">{currentDate}</Moment>
        </div>
      )}
    </Container>
  );
};

export default TopBar;
