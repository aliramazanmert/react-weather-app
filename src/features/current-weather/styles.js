import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const WeatherText = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #546269;
`;

export const Temperature = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 100px;
  line-height: 117px;
  color: #546269;

  :after {
    font-size: 70px;
    line-height: 82px;
    vertical-align: text-top;
    content: "°";
  }
`;

export const City = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #546269;
`;
