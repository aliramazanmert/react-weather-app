import styled from "styled-components";

export const MinTemp = styled.div`
  color: #d0d0d0;
`;

export const ForecastItem = styled.div`
  display: flex;
  align-items: center;

  > * {
    :nth-child(1) {
      flex: 0 0 45%;
    }
    :nth-child(2) {
      flex: 0 0 40%;
    }
    :nth-child(3) {
      flex: 0 0 7.5%;
    }
    :nth-child(4) {
      flex: 0 0 7.5%;
      text-align: end;
    }
  }
`;

export const Icon = styled.img`
  width: 55px;
  height: 55px;
`;

export const Container = styled.div`
  width: 100%;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;
