/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { TFuncReturn } from 'react-i18next';
import moment from 'moment';

export default function SessionInfo(props: { data: any, s: TFuncReturn<'translation', string, string>, s1: TFuncReturn<'translation', string, string> }) {
  return (
    <>
      <h2 className="titleSession">{props.s}</h2>
      <p>{props.data.titulo}</p>
      {(props.data.textoexpediente === '' || props.data.textoexpediente === props.data.titulo) ? <></> : (
        <>
          <h2 className="titleSession">Texto Expediente</h2>
          <p>{props.data.textoexpediente}</p>
        </>
      )}
      {props.data.titulosubgrupo === '' ? <></> : (
        <>
          <h2 className="titleSession">Titulo Subgrupo</h2>
          <p>{props.data.titulosubgrupo}</p>
        </>
      )}
      {props.data.textosubgrupo === '' ? <></> : (
        <>
          <h2 className="titleSession">Texto Subgrupo</h2>
          <p>{props.data.textosubgrupo}</p>
        </>
      )}
      <div className="dateSessionParent">
        <h2 className="dateSession">{props.s1}</h2>
        <p>
          {moment(props.data.fecha.toString(), 'YYYY-MM-DD')
            .format('DD-MM-YYYY')}
        </p>
      </div>
      <h2 className="dateSession">Numero de Sesion:</h2>
      <p>{props.data.votacionNumber}</p>
    </>
  );
}
