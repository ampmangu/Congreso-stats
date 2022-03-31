import React from 'react';
import SearchResult from './SearchResult';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VotacionResult = (props: any) => {
    const { t } = useTranslation();
    return (
        <div key={props.votacion.id} className="votacion">
            <h2 className="titleVotacion">Titulo: </h2>
            <p>{props.votacion.titulo + ' ' + props.votacion.textoexpediente}</p>
            <br />
            <h2 className="titleVotacion">Legislatura: </h2>
            <p>{props.votacion.legislatura}</p>
            <br />
            <h2 className="titleVotacion">Fecha:</h2>
            <p> {moment(props.votacion.fecha.toString(), 'YYYY-MM-DD').format('DD-MM-YYYY')}</p>
            <br />
            <Link to={`/sessions/${props.votacion.id}`}>{t('more_info')}</Link>
        </div>
    )
}
export default VotacionResult;