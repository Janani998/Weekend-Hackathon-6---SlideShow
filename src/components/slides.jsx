import React from "react";

export default function Slides({ title, text }) {
  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
    </>
  );
}
