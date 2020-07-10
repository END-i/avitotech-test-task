import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 56px;
  text-align: center;
  border-top: 1px solid #cccccc;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #cccccc;
  margin-top: auto;
`;

export default function () {
  return <Wrapper>&copy; 2018 - {new Date().getFullYear()}</Wrapper>;
}
