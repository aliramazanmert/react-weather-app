import React from "react";
import PropTypes from "prop-types";
import { Result } from "antd";
import Spin from "../spin";

const Renderer = ({ isError, error, errorDescription, isLoading, component }) => {
  if (isError) {
    return <Result status="error" title={error} subTitle={errorDescription} />;
  }

  if (isLoading) {
    return <Spin centered />;
  }

  return component;
};

Renderer.propTypes = {
  isError: PropTypes.bool,
  error: PropTypes.string,
  errorDescription: PropTypes.string,
  isLoading: PropTypes.bool,
  component: PropTypes.node.isRequired,
};

Renderer.defaultProps = {
  isError: false,
  error: "Something went wrong",
  errorDescription: null,
  isLoading: false,
};

export default Renderer;
