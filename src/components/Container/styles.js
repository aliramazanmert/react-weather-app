import styled from "styled-components";

export const Content = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  position: fixed;
  top: 0px;
  left: 25%;
  right: 25%;
  display: flex;
  justify-content: center;
  transform: translateY(-30%);
  width: 50%;
  height: 175px;
  text-align: center;
  z-index: 10;

  border-style: solid;
  border-color: white;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: silver;

  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.09);
`;

export const MainTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  left: 2.5%;
  right: 2.5%;
  top: 0;
  width: 95%;
  height: 500px;
  text-align: center;
  background-color: snow;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.09);
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  width: 100%;
  height: 200vh;
  text-align: center;

  background-color: dimgray;
`;
