import React, { useEffect, useState } from "react";

import useWindowSize from "../../utils/useWindowSize";

import { Container } from "./styles";

interface CategoryCardProps {
  icon: any;
  title: string;
}

const CategoryCard = ({ icon, title }: CategoryCardProps) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 500;

  const [newTitle, setNewTitle] = useState(title);
  const abbreviatedTitle = title.slice(0, 7) + "...";

  useEffect(() => {
    if (isMobile && title.length > 8) {
      setNewTitle(abbreviatedTitle);
    }
  }, [isMobile]);

  return (
    <Container>
      {icon}
      <div>
        <p>{newTitle}</p>
        {newTitle == "Ao vivo" && <span className="pulse"></span>}
      </div>
    </Container>
  );
};

export default CategoryCard;
