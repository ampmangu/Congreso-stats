import { useParams, withRouter } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';
import httpClient from '../../service/httpClient';
import '../../styles/session.scss';
import GroupVotes from './GroupVotes';
import SessionInfo from './SessionInfo';
import DetailedVotes from './DetailedVotes';
import LoadingAnimation from '../commons/LoadingAnimation';

const Session = () => {
  const { id }: any = useParams();
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/votes/byId?id=${id}`);
  const { t } = useTranslation();
  const [visible, setVisible] = React.useState(false);
  const [secondVisible, setSecondVisible] = React.useState(false);
  return (
    <div className="session">
      {loading ? <LoadingAnimation />
        : (
          <div>
            <SessionInfo data={data} s={t('session_title')} s1={t('session_date')} />
            <div className="breakdownParent">
              <h2 className="breakdownSession">{t('breakdown_session')}</h2>
              <button
                onClick={() => setVisible(!visible)}
              >
                {visible ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
            {visible
                      && (
                      <section className="section-grid">
                        <div className="votes-col-em" />
                        <div className="votes-col-fav">{t('in_favour')}</div>
                        <div className="votes-col-agn">{t('against')}</div>
                        <div className="votes-col-abs">{t('abstentions')}</div>
                        <div className="votes-col-mss">{t('missing')}</div>
                        {Object.entries(data.votacionVotosResumidos)
                          .map((values: any[], index: number) => (
                            <GroupVotes values={values} index={index} />
                          ))}
                      </section>
                      )}
            <div className="breakdownParent">
              <h2 className="breakdownSession">{t('detailed_sesssion')}</h2>
              <button
                onClick={() => setSecondVisible(!secondVisible)}
              >
                {secondVisible ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
            {secondVisible && (
              <div className="memberParent">
                {Object.entries(data.votacionVotosDetallados)
                  .map((values: any[]) => (
                    // eslint-disable-next-line max-len
                    <DetailedVotes
                      memberName={values[1].diputado}
                      voted={values[1].voto}
                      group={values[1].grupo}
                    />
                  ))}
              </div>
            )}
          </div>
        )}
    </div>
  );
};

export default withRouter(Session);
