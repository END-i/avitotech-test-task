import styled from "styled-components";

import { ReactComponent as CloseIcon } from "assets/icons/close.svg";

export const ShadowWrapper = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 619px;
  height: 425px;
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  position: relative;
`;

export const Close = styled(CloseIcon)`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 21px;
  top: 21px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CommentsList = styled.div`
  width: 100%;
  margin-left: 14px;
  overflow: auto;
`;

export const Button = styled.button`
  display: flex;
  padding: 8px 0;
  justify-content: center;

  background: #4997d0;
  border-radius: 3px;
  border: none;
  outline: none;
  box-shadow: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;

  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:active {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 331px;
  height: 205px;
  margin: 0 0 29px;
`;
export const Date = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #999999;

  margin-bottom: 5px;
`;
export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  color: #000000;
  margin-bottom: 20px;
`;

export const Empty = styled.div`
  text-align: center;
`;
