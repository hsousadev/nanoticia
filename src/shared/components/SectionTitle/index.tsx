import React from "react";

import { Container } from "./styles";

interface SectionTitleProps {
  icon: any;
  title: string;
}

const SectionTitle = ({ icon, title }: SectionTitleProps) => {
  return (
    <Container>
      {icon}
      {title}
    </Container>
  );
};

export default SectionTitle;
