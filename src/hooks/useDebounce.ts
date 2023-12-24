import React, {DependencyList, useEffect, useRef, useState} from 'react';

interface Props {}

const useDebounce = (
  callback: () => void,
  dep: DependencyList,
  duration: number = 500,
) => {
  const timeout = useRef<any>();

  useEffect(() => {
    timeout.current = setTimeout(callback, duration);
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, dep);
};

export default useDebounce;
