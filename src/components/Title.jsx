import React from "react";

export const Title = ({ text, subTitle }) => {
  return (
    <div className="text-3xl font-semibold">
      <h1>{text}</h1>
      <h1>{subTitle}</h1>
    </div>
  );
};
