import styled from "styled-components";

export const MinTemp = styled.div`
  color: #d0d0d0;
`;

export const HourlyForecastContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 48px;
  gap: 15px;
`;

export const HourlyForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  line-height: 23px;
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

export const HourlyIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const Icon = styled.img`
  width: 55px;
  height: 55px;
`;

export const DailyForecastContainer = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 23px;
  margin-top: 48px;
`;

export const Container = styled.div`
  width: 100%;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
`;
