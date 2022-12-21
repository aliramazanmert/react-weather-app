import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 667px;
  width: 375px;
  padding: 53px 50px;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
  backdrop-filter: blur(5px);
  border-radius: 30px;
  font-family: Roboto;
  font-style: normal;
`;

export const Background = styled.div`
  display: flex;
  background: url(road-tree-wet-rain.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
