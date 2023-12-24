import {
  Dispatch,
  Reducer,
  ReducerAction,
  ReducerState,
  useReducer,
} from 'react';

interface Props {
  state: any;
}

const useStateCustom = <T>(initialState: T): [T, Dispatch<T>] => {
  const [state, setState] = useReducer(
    (preState: T, newState: T) => ({
      ...preState,
      ...newState,
    }),
    {...initialState},
    (preState: T) => ({
      ...preState,
    }),
  );
  return [state, setState];
};

export default useStateCustom;
