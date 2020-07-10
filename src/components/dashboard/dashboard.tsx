import React from "react";

import { Header, Photos, Footer, Modal } from "components";
import { Wrapper } from "./styled";

export default function () {
  return (
    <>
      <Wrapper>
        <Header />
        <Photos />
        <Footer />
      </Wrapper>
      <Modal />
    </>
  );
}
