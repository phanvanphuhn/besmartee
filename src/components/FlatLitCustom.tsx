import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

const FlatLitCustom = ({page, size, data, onEndReached, ...props}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    formatData(data);
  }, [data]);
  const formatData = (data2) => {
    if (data2.length == 0) {
      if (page == 0) {
        setList([]);
      }
    } else {
      if (page == 0) {
        setList(data2);
      } else {
        setList((list) => [...list, ...data2]);
      }
    }
  };
  const onLoadMore = () => {
    console.log('list: ', list);
    if (list.length >= (page + 1) * size) onEndReached(page + 1);
  };
  return (
    <FlatList
      data={list}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.7}
      {...props}
    />
  );
};

export default FlatLitCustom;
