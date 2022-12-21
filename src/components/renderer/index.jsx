import React from "react";
import PropTypes from "prop-types";
import { Result } from "antd";
import Spin from "../spin";

const Renderer = ({ isError, error, isLoading, component }) => {
  if (isError) {
    return <Result status="error" title={error} />;
  }

  if (isLoading) {
    return <Spin centered />;
  }

  return component;
};

Renderer.propTypes = {
  isError: PropTypes.bool,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  component: PropTypes.node.isRequired,
};

Renderer.defaultProps = {
  isError: false,
  error: "Something went wrong",
  isLoading: false,
};

export default Renderer;
