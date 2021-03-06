import React, { useMemo, useState } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import Select from 'react-select';
import Pagination from './Pagination';
import OrderResults from './OrderResults';
import '../../styles/results.scss';
import VotacionResult from './VotacionResult';
import SearchResult from '../../service/SearchResult';

const Results = () => {
  const PageSize = 10;
  const { state }: any = useLocation();
  const [updatedState, setUpdatedState] = useState(state.results);
  const orderOptions = [
    {
      value: 'desc-date',
      label: 'Fecha Descendente',
    },
    {
      value: 'asc-date',
      label: 'Fecha Ascendente',
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [orderValue, setOrderValue] = useState(orderOptions[0]);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return updatedState.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, orderValue]);
  const handleSelectChange = (event: any) => {
    if (event.value !== orderValue.value) {
      const orderBy = event.value;
      const orderedArray = OrderResults(updatedState, orderBy);
      setOrderValue(event);
      setUpdatedState(orderedArray);
      setCurrentPage(1);
    }
  };
  return (
    <div className="results">
      {updatedState !== undefined && updatedState.length > 0 && (
        <>
          <div className="found">
            <h1>
              Resultados encontrados:
              {updatedState.length}
            </h1>
            <Select
              id="order-select"
              name="form-field-name"
              value={orderValue}
              onChange={handleSelectChange}
              options={orderOptions}
            />
          </div>
          <div className="listResults">
            {currentTableData.map((votacion: SearchResult) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <VotacionResult {...votacion} />
            ))}
          </div>
        </>
      )}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={updatedState.length}
        pageSize={PageSize}
        onPageChange={(page: any) => setCurrentPage(page)}
      />
    </div>

  );
};

export default withRouter(Results);
