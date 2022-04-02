import moment from 'moment';
import SearchResult from '../service/SearchResult';

export default function OrderResults(arrayToSort: any, order: string) {
  const results = arrayToSort.sort((a: SearchResult, b: SearchResult) => {
    const aDate = moment(a.fecha, 'YYYY-MM-DD')
      .toDate();
    const bDate = moment(b.fecha, 'YYYY-MM-DD')
      .toDate();
    if (order === 'asc-date') {
      return aDate.getTime() - bDate.getTime();
    }
    return bDate.getTime() - aDate.getTime();
  });
  return results;
}
