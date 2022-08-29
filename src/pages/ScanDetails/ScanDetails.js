import React from "react";
import { useLocation } from "react-router-dom";

function ScanDetails({ qrCode }) {
  const { state } = useLocation();
  const { qrCode: qrCodeFromState } = state || {};

  return (
    <div className="py-5">
      <h1 className="text-center text-success ">{qrCodeFromState}</h1>
    </div>
  );
}

export default ScanDetails;
