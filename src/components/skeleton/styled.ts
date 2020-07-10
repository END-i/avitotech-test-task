import styled, { css } from "styled-components";

import { ISkeletonWrapperStyled, ISketeletonStyled } from "./types";

const Wrapper = styled.div<ISkeletonWrapperStyled>`
  position: relative;
  opacity: ${({ load }) => (load ? 1 : 0)};
  ${({ styles: { width, height } }) => css`
    width: ${width ? width + "px" : "auto"};
    height: ${height ? height + "px" : "auto"};
  `};
  ${({ styles: { rest } }) => rest};
  overflow: hidden;
  background: #ddd;
  transition: 0.5s;
`;

const Skeleton = styled.div<ISketeletonStyled>`
  @keyframes progress {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ddd 10%, #fff 60%, #ddd);
  animation: progress 1s ease-in-out infinite;
`;
export { Wrapper, Skeleton };
