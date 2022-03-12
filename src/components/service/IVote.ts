export interface IVote {
  id: string;
  date: string;
  title: string;
  values: { [key: string]: number[] };
}
