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
  const getVoteResult = (arrayVotes: any) => {
    const index = arrayVotes.indexOf(Math.max.apply(null, arrayVotes));
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
                  <p>{element.title}</p>
                  <h2 className="dateGroup">{t('session_date')}</h2>
                  <p>{element.date}</p>
                  <div className="voteInfo">
                    {t(getVoteResult(element.values[`${group}`]))}
                    .
                    {' '}
                    <Link to={`/sessions/${element.id}`}>{t('more_info')}</Link>
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
