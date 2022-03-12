import React from 'react';
import { Link } from 'react-router-dom';

export default function Votes({ values, index }: any) {
  return (
    <>
      <div className="votes-group-name" style={{ gridArea: `gr${index};` }}><Link to={`/groups/${values[0]}`}>{values[0]}</Link></div>
      <div key="favour" className="votes-col">{values[1][0]}</div>
      <div key="against" className="votes-col">{values[1][1]}</div>
      <div key="abstentions" className="votes-col">{values[1][2]}</div>
      <div key="not-there" className="votes-col">{values[1][3]}</div>
    </>
  );
}
