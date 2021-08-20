import { useParams, withRouter } from 'react-router-dom';
import React from 'react';
import httpClient from './service/httpClient';

const Session = () => {
  const { id } : any = useParams();
  const {
    data,
    loading,
  } = httpClient.useFetch(`${httpClient.urlBase!}/votes/byId?id=${id}`);
  return (
    <div>
      {loading ? <div>...loading</div>
        : (
          <div>

            <p>{data.title}</p>
            <p>{data.date}</p>
            {Object.entries(data.values).map((value:any[]) => (
              <p key={value[0]}>
                {value[0]}
                :
                {value[1].join('-')}
              </p>
            ))}
          </div>
        )}
    </div>
  );
};

export default withRouter(Session);
