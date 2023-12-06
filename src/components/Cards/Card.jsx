import { CardContainer } from "./CardStyles";
import React from "react";

export default function Card({ imageLink, width, height, children }) {
  return (
    <CardContainer $width={width} $height={height}>
      <img src={imageLink} alt="" />
      {children}
    </CardContainer>
  );
}
