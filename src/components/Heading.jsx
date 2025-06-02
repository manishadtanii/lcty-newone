import React from "react";

function Heading({ data }) {
  const { title, textAlign, spacing, fontSize, color="secondary-text-1" } = data;
  return (
    <h2 className={`  ${color} ${textAlign} ${spacing} ${fontSize}`}>
      {title.map((part, i) => (
        <span key={i} className={part.class}>
          {" "}
          {part.text}{" "}
        </span>
      ))}
    </h2>
  );
}

export default Heading;
