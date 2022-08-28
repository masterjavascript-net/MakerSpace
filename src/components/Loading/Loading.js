import React from "react";
import LoadingWrapper from "./Loading.styles";

function Loading() {
  return (
    <LoadingWrapper>
      <span className="loader"></span>
      <span className="loading">Loading</span>
    </LoadingWrapper>
  );
}

export default Loading;
