import React from "react";
import { ModelResultContainer } from "./ModelResult.styles";
import { ModelViewer } from "react-3d-model-viewer";
import demoModel from "../../assets/stls/girltower.stl";

function ModelResult() {
  return (
    <ModelResultContainer>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-10 text-center mb-4">
            <h1>Model Result</h1>
          </div>
          <div className="col-12">
            <ModelViewer color="brown" url={demoModel} />
          </div>
        </div>
      </div>
    </ModelResultContainer>
  );
}

export default ModelResult;
