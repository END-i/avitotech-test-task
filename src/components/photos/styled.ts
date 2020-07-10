import styled from "styled-components";

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
`;
export const Image = styled.img`
  background: #888;
  min-width: 229px;
  max-width: 280px;
  max-height: 142px;
  width: 30%;
  margin: 15px 10px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s;
  :hover {
    opacity: 1;
  }
`;
