export interface IPaginationModel<T> {
  count: number;
  currentPage: number;
  itemsPerPage: number;
  data: T[];
}
