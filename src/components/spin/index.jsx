import React from "react";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";

import { StyledSpin } from "./styles";

const Spin = ({ centered }) => {
  return (
    <StyledSpin
      $centered={centered}
      indicator={<LoadingOutlined style={{ fontSize: 64 }} spin />}
    />
  );
};

Spin.propTypes = {
  centered: PropTypes.bool,
};

Spin.defaultProps = {
  centered: false,
};

export default Spin;
