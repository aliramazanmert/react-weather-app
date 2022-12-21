import styled, { css } from "styled-components";
import { Spin } from "antd";

export const StyledSpin = styled(Spin)`
  ${({ $centered }) =>
    $centered &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  color: white;
`;
