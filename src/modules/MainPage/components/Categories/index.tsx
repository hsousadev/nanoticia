import { Newspaper, SoccerBall, Laptop, PlayCircle, Briefcase, Heartbeat, Atom, YoutubeLogo} from "phosphor-react";

import CategoryCard from "../../../../shared/components/CategoryCard";

import { Container } from "./styles";

const Categories = () => {

  const iconsSize = 48;
  const iconColor = "#213249";

  return (
    <Container>
      <CategoryCard icon={<Newspaper weight="thin" size={iconsSize} color={iconColor} />} title="News" />
      <CategoryCard icon={<SoccerBall weight="thin" size={iconsSize} color={iconColor} />} title="News" />
      <CategoryCard icon={<Laptop weight="thin" size={iconsSize} color={iconColor} />} title="News" />
      <CategoryCard icon={<PlayCircle weight="thin" size={iconsSize} color={iconColor} />} title="News" />
      <CategoryCard icon={<Briefcase weight="thin" size={iconsSize} color={iconColor} />} title="News" />
      <CategoryCard icon={<Heartbeat weight="thin" size={iconsSize} color={iconColor} />} title="News" />
      <CategoryCard icon={<Atom weight="thin" size={iconsSize} color={iconColor} />} title="News" />
      <CategoryCard icon={<YoutubeLogo weight="thin" size={iconsSize} color={iconColor} />} title="News" />
    </Container>
  );
};

export default Categories;
