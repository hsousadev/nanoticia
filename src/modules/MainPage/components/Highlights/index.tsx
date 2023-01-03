import { useContext } from 'react';
import { Sparkle } from "phosphor-react";

import { GlobalContext } from "../../../../pages/index"
import { Container } from './styles';

const Highlights = () => {


  const { green, greenIconsSize } = useContext(GlobalContext);

  return <Container>
    <h2><Sparkle weight="thin" size={greenIconsSize} color={green} /> Destaques</h2>
  </Container>;
}

export default Highlights;