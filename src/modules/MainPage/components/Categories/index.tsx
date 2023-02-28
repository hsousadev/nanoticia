import { useEffect, useState } from "react";

import { Newspaper, YoutubeLogo } from "phosphor-react";

import CategoryCard from "../../../../shared/components/CategoryCard";
import useWindowSize from "../../../../shared/utils/useWindowSize";

import { Container } from "./styles";

const Categories = () => {
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
          title="News"
        />
        <CategoryCard
          icon={
            <YoutubeLogo weight="thin" size={iconsSize} color={iconColor} />
          }
          title="Ao vivo"
        />
      </div>
      {shouldShowDateAndTemperature && (
        <div className="date-temperature">
          <h2>
            Terça-feira, <br /> 1 Nov, 2022
          </h2>
          <h3>São Paulo, 18ºC</h3>
        </div>
      )}
    </Container>
  );
};

export default Categories;
