import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

const WithSpinner = () => {
  const Spinner = () => {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );
  };
  return Spinner;
};

export default WithSpinner;
