import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SearchResult from '../../service/SearchResult';

const VotacionResult = (props: SearchResult) => {
  const { t } = useTranslation();
  return (
    <div key={props.id} className="votacion">
      <h2 className="titleVotacion">Titulo: </h2>
      <p>{`${props.titulo} ${props.textoexpediente}`}</p>
      <br />
      <h2 className="titleVotacion">Legislatura: </h2>
      <p>{props.legislatura}</p>
      <br />
      <h2 className="titleVotacion">Fecha:</h2>
      <p>
        {' '}
        {moment(props.fecha.toString(), 'YYYY-MM-DD')
          .format('DD-MM-YYYY')}
      </p>
      <br />
      <Link to={`/sessions/${props.id}`}>{t('more_info')}</Link>
    </div>
  );
};
export default VotacionResult;
