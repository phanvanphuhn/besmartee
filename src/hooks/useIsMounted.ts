import {DependencyList, useEffect, useRef} from 'react';

/**
 * This hook avoid calling useEffect on the initial value of his dependency array
 */
const useIsMounted = () => {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  return isMounted.current;
};

export default useIsMounted;
