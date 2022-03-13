import React from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import httpClient from './service/httpClient';
import '../styles/group.scss';

const Group = () => {
  const { group } : any = useParams();
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/groups/byGroup?group=${group}`);
  const { t } = useTranslation();

  function returnInt(element: string) {
    return parseInt(element, 10);
  }

  const getVoteResult = (arrayVotes: any) => {
    const arrayNumber = arrayVotes.map(returnInt);
    const index = arrayNumber.indexOf(Math.max.apply(null, arrayNumber));
    if (index === 0) {
      return 'vote_positive';
    } if (index === 1) {
      return 'vote_negative';
    } if (index === 2) {
      return 'vote_abstention';
    }
    return 'vote_not_present';
  };
  return (
    <>

      <div className="group">
        <h2 className="group-name">
          {group}
        </h2>
        {loading ? <div>...loading</div>
          : (
            <>
              {data.map((element: any) => (
                <div className="group-session">
                  <h2 className="titleGroup">{t('session_title')}</h2>
                  <p>{element.titulo + element.titulosubgrupo}</p>
                  <h2 className="dateGroup">{t('session_date')}</h2>
                  <p>{element.fecha}</p>
                  <div className="voteInfo">
                    {/* eslint-disable-next-line max-len */}
                    {t(getVoteResult([element.aFavor, element.enContra, element.abstencion, element.nsnc]))}
                    .
                    {' '}
                    <Link to={`/sessions/${element.vid}`}>{t('more_info')}</Link>
                  </div>
                </div>
              ))}
            </>
          )}
      </div>
    </>
  );
};

export default withRouter(Group);
