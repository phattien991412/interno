import React from "react";

export const SplitText = ({ text }) => {
  let arrText = Array.from(text).map((item, i) => {
    return <span className="character">{item}</span>;
  });
  return arrText;
};
