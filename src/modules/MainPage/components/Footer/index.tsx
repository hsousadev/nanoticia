import React from "react";
import Image from "next/image";

import { ArrowUp, CodeSimple } from "phosphor-react";

import logo from "../../../../shared/assets/nanoticia-logo.svg";

import { Container } from "./styles";
import smoothScroll from "../../../../shared/utils/smoothScroll";

const Footer = () => {
  return (
    <Container>
      <div className="logo-and-return-top">
        <Image src={logo} alt="" width={128} />

        <div className="return-top">
          <button onClick={() => smoothScroll("top")}>
            <h4>Voltar ao topo</h4>
            <ArrowUp weight="thin" size={24} color="#213249" />
          </button>
        </div>
      </div>
      <div className="copyrights">
        <h4>Copyright © 2023 · Todos os direitos reservados. </h4>
        <h4>
          <CodeSimple weight="bold" size={24} color="#828282" />
          Desenvolvido por{" "}
          <strong>
            <a href="https://henriquesousadev.vercel.app" target="_blank">
              Henrique Sousa
            </a>
          </strong>
        </h4>
      </div>
    </Container>
  );
};

export default Footer;
