import React from "react";
import LoadingWrapper from "./Loading.styles";

function Loading() {
  return (
    <LoadingWrapper>
      <span class="loader"></span>
      <span class="loading">Loading</span>
    </LoadingWrapper>
  );
}

export default Loading;
