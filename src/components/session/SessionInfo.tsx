import React from 'react';
import { TFuncReturn } from 'react-i18next';

export default function SessionInfo(props: { data: any, s: TFuncReturn<'translation', string, string>, s1: TFuncReturn<'translation', string, string> }) {
  return (
    <>
      <h2 className="dateSession">Sesion:</h2>
      <p>{props.data.votacionNumber}</p>
      <h2 className="titleSession">{props.s}</h2>
      <p>{props.data.titulo}</p>
      <h2 className="titleSession">Subtitulo</h2>
      <p>{props.data.titulosubgrupo}</p>
      <h2 className="dateSession">{props.s1}</h2>
      <p>{props.data.fecha.toString()}</p>
    </>
  );
}
