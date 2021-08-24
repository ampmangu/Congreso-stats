import { useParams, withRouter } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import httpClient from './service/httpClient';
import '../styles/session.scss';
import Votes from './Votes';

const Session = () => {
  const { id } : any = useParams();
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/votes/byId?id=${id}`);
  const { t } = useTranslation();

  return (
    <div className="session">
      {loading ? <div>...loading</div>
        : (
          <div>
            <h2 className="titleSession">{t('session_title')}</h2>
            <p>{data.title}</p>
            <h2 className="dateSession">{t('session_date')}</h2>
            <p>{data.date}</p>
            <section className="section-grid">
              <div className="votes-col-em" />
              <div className="votes-col-fav">{t('in_favour')}</div>
              <div className="votes-col-agn">{t('against')}</div>
              <div className="votes-col-abs">{t('abstentions')}</div>
              <div className="votes-col-mss">{t('missing')}</div>
              {Object.entries(data.values).map((values:any[], index: number) => (
                <Votes values={values} index={index} />
              ))}
            </section>
          </div>
        )}
    </div>
  );
};

export default withRouter(Session);
