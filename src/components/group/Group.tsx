import React from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import httpClient from '../../service/httpClient';
import '../../styles/group.scss';
import LoadingAnimation from '../commons/LoadingAnimation';
import VotesUtils from '../../utils/VotesUtils';

const Group = () => {
  const { group }: any = useParams();
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/groups/byGroup?group=${group}`);
  const { t } = useTranslation();

  return (
    <>

      <div className="group">
        <h2 className="group-name">
          {group}
        </h2>
        {loading ? (
          <LoadingAnimation />
        )
          : (
            <>
              {data.map((element: any) => (
                <div className="group-session">
                  <h2 className="titleGroup">{t('session_title')}</h2>
                  <p>{`${element.titulo} ${element.titulosubgrupo.trim() === '' ? '' : element.titulosubgrupo}`}</p>
                  <h2 className="dateGroup">{t('session_date')}</h2>
                  <p>
                    {moment(element.fecha.toString(), 'YYYY-MM-DD')
                      .format('DD-MM-YYYY')}
                  </p>
                  <div className="voteInfo">
                    {/* eslint-disable-next-line max-len */}
                    {t(VotesUtils.getVoteResult([element.aFavor, element.enContra, element.abstencion, element.nsnc]))}
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
