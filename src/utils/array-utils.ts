export const formatData = (list: any[], page: number) => (data: any[]) => {
  if (list.length == 0) {
    if (page == 1) {
      return [];
    } else {
      return data;
    }
  } else {
    if (page == 1) {
      return list;
    } else {
      return [...data, ...list];
    }
  }
};

export function paginate<T>(
  array: T[],
  page_size: number,
  page_number: number,
) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
