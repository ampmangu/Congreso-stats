import React from 'react';

export default function Gradient({ tagToRender }: any) {
  return (
    <span className="gradient skew">
      <h1 className="logo un-skew">
        {tagToRender}
      </h1>
    </span>
  );
}
