import React from "react";
import styled from "styled-components";

import { IErrorProps } from "common/types";

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  color: #e41616;
  font-size: 30px;
  background: #ffe6e6;
`;

export default function ({ error, children }: IErrorProps) {
  return (
    <>
      {error && <Error>{error}</Error>}
      {!error && children}
    </>
  );
}
