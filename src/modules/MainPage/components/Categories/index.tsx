import { useEffect, useState } from "react";
import Moment from "react-moment";
import * as moment from "moment";
import "moment/locale/pt-br";

import { Newspaper, YoutubeLogo } from "phosphor-react";
import { getCurrentDate } from "../../../../shared/utils/getCurrentDate";

import CategoryCard from "../../../../shared/components/CategoryCard";
import useWindowSize from "../../../../shared/utils/useWindowSize";
import scrollToComment from "../../../../shared/utils/smoothScroll";

import { Container } from "./styles";

const Categories = () => {
  moment.locale("pt-br");
  const currentDate = getCurrentDate();

  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 500;
  const shouldShowDateAndTemperature = windowSize.windowWidth > 720;

  const [iconsSize, setIconSize] = useState(48);
  const iconColor = "#213249";

  useEffect(() => {
    if (isMobile) setIconSize(24);
    else setIconSize(48);
  }, [isMobile]);

  return (
    <Container>
      <div className="categories-card">
        <CategoryCard
          icon={<Newspaper weight="thin" size={iconsSize} color={iconColor} />}
          title="Notícias"
          onClick={() => scrollToComment("news")}
        />
        <CategoryCard
          icon={
            <YoutubeLogo weight="thin" size={iconsSize} color={iconColor} />
          }
          title="Ao vivo"
          onClick={() =>
            window.open(
              "https://www.youtube.com/results?search_query=not%C3%ADcias&sp=EgJAAQ%253D%253D",
              "_blank"
            )
          }
        />
      </div>
      {shouldShowDateAndTemperature && (
        <div className="date-temperature">
          <h3>Hoje é</h3>
          <h2>
            <Moment format="D MMM YYYY">{currentDate}</Moment>
          </h2>
        </div>
      )}
    </Container>
  );
};

export default Categories;
