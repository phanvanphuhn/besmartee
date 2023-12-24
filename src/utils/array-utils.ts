import _ from 'lodash';

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
