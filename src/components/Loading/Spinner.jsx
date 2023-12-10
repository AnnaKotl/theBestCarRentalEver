import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { SpinnerContainer } from "./Spinner.styles";

const Spinner = ({ color, size, timeout }) => {
  return (
    <SpinnerContainer>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}>
        <PuffLoader color={color || "#0d1757"} type={"Gear"} size={size || 200} timeout={8000} />
      </div>
    </SpinnerContainer>
  );
};

export default Spinner;