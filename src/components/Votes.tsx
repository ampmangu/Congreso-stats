import React from 'react';

export default function Votes({ values, index }: any) {
  return (
    <>
      <div style={{ gridArea: `gr${index};` }}>{values[0]}</div>
      <div key="favour" className="votes-col">{values[1][0]}</div>
      <div key="against" className="votes-col">{values[1][1]}</div>
      <div key="abstentions" className="votes-col">{values[1][2]}</div>
      <div key="not-there" className="votes-col">{values[1][3]}</div>
    </>
  );
}
