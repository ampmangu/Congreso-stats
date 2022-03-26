import React, { useState, useMemo } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Pagination from '../components/results/Pagination';
import '../styles/results.scss';

import moment from 'moment';

const Results = () => {
    let PageSize = 10;
    const { state }: any = useLocation();
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return state.results.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <div className="results">
            {state !== undefined && state.results.length > 0 && (
                <>
                    <h1>Resultados encontrados: {state.results.length}</h1>
                    <div className="listResults">
                        {currentTableData.map((votacion: any) => (
                            <div className="votacion">
                                <h2 className="titleVotacion">Titulo: </h2>
                                <p>{votacion.titulo + ' ' + votacion.textoexpediente}</p>
                                <br />
                                <h2 className="titleVotacion">Legislatura: </h2>
                                <p>{votacion.legislatura}</p>
                                <br />
                                <h2 className="titleVotacion">Fecha:</h2>
                                <p> {moment(votacion.fecha.toString(), 'YYYY-MM-DD').format('DD-MM-YYYY')}</p>
                                <br />
                                <Link to={`/sessions/${votacion.id}`}>{t('more_info')}</Link>
                            </div>
                        ))} </div>
                </>
            )}
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={state.results.length}
                pageSize={PageSize}
                onPageChange={(page: any) => setCurrentPage(page)}
            />
        </div>

    )
}

export default withRouter(Results);