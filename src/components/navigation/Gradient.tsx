import React from 'react';

export default function Gradient({
  tagToRender,
  id,
}: any) {
  return (
    <span id={id} className="gradient skew">
      <h1 className="logo un-skew">
        {tagToRender}
      </h1>
    </span>
  );
}
