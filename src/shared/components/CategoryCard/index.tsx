import React from "react";

import { Container } from "./styles";

interface CategoryCardProps {
  icon: any;
  title: string;
}

const CategoryCard = ({ icon, title }: CategoryCardProps) => {
  return (
    <Container>
      {icon}
      <p>{title}</p>
    </Container>
  );
};

export default CategoryCard;
