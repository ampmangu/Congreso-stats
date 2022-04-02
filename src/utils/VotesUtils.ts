function returnInt(element: string) {
  return parseInt(element, 10);
}

const getVoteResult = (arrayVotes: any) => {
  const arrayNumber = arrayVotes.map(returnInt);
  const index = arrayNumber.indexOf(Math.max.apply(null, arrayNumber));
  if (index === 0) {
    return 'vote_positive';
  }
  if (index === 1) {
    return 'vote_negative';
  }
  if (index === 2) {
    return 'vote_abstention';
  }
  return 'vote_not_present';
};

export default {
  getVoteResult,
};
