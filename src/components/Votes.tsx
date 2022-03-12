import React from 'react';
import { Link } from 'react-router-dom';

export default function Votes({ values, index }: any) {
  return (
    <>
      <div className="votes-group-name" style={{ gridArea: `gr${index};` }}><Link to={`/groups/${values[1].grupo.replace(/\s/g, '')}`}>{values[1].grupo}</Link></div>
      <div key="favour" className="votes-col">{values[1].afavor}</div>
      <div key="against" className="votes-col">{values[1].enContra}</div>
      <div key="abstentions" className="votes-col">{values[1].abstencion}</div>
      <div key="not-there" className="votes-col">{values[1].nsnc}</div>
    </>
  );
}
