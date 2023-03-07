import Image from "next/image";

import logo from "../../../../shared/assets/nanoticia-logo.svg";

import useWindowSize from "../../../../shared/utils/useWindowSize";

import { getFormatTodayDate } from "../../../../shared/utils/formatTodayDate";

import { Container } from "./styles";
import { useEffect, useState } from "react";

const TopBar = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 720;

  const [today, setToday] = useState<string>();

  useEffect(() => {
    setToday(getFormatTodayDate());
  }, []);

  return (
    <Container>
      <Image src={logo} width={200} alt="logo" />
      {isMobile && (
        <div className="date-temperature">
          <h4>Hoje é</h4>
          {today}
        </div>
      )}
    </Container>
  );
};

export default TopBar;
