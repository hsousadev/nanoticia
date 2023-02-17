import { useEffect, useState } from "react";

import {
  Newspaper,
  SoccerBall,
  Laptop,
  PlayCircle,
  Briefcase,
  Heartbeat,
  Atom,
  YoutubeLogo,
} from "phosphor-react";

import CategoryCard from "../../../../shared/components/CategoryCard";
import useWindowSize from "../../../../shared/utils/useWindowSize";

import { Container } from "./styles";

const Categories = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 500;

  const [iconsSize, setIconSize] = useState(48);
  const iconColor = "#213249";

  useEffect(() => {
    if (isMobile) setIconSize(24); else setIconSize(48);
  }, [isMobile]);

  return (
    <Container>
      <CategoryCard
        icon={<Newspaper weight="thin" size={iconsSize} color={iconColor} />}
        title="News"
      />
      <CategoryCard
        icon={<SoccerBall weight="thin" size={iconsSize} color={iconColor} />}
        title="Esportes"
      />
      <CategoryCard
        icon={<Laptop weight="thin" size={iconsSize} color={iconColor} />}
        title="Tech"
      />
      <CategoryCard
        icon={<PlayCircle weight="thin" size={iconsSize} color={iconColor} />}
        title="Enterterimento"
      />
      <CategoryCard
        icon={<Briefcase weight="thin" size={iconsSize} color={iconColor} />}
        title="Negócios"
      />
      <CategoryCard
        icon={<Heartbeat weight="thin" size={iconsSize} color={iconColor} />}
        title="Saúde"
      />
      <CategoryCard
        icon={<Atom weight="thin" size={iconsSize} color={iconColor} />}
        title="Ciência"
      />
      <CategoryCard
        icon={<YoutubeLogo weight="thin" size={iconsSize} color={iconColor} />}
        title="Ao vivo"
      />
    </Container>
  );
};

export default Categories;
