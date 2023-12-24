import React, {createContext, Dispatch, ReactNode, useContext} from 'react';
import useStateCustom from 'hooks/useStateCustom';

interface Props {
  children?: ReactNode;
}
export interface ProductProps {
  name: string;
  amount: string;
}
export interface OrderProps {
  products: ProductProps[];
  notes?: string;
  id: string;
}
interface IState {
  data: OrderProps[];
}
export interface RootState {
  state: IState;
  setState: Dispatch<IState>;
}
export const Context = createContext<RootState>({
  state: {data: []},
  setState: () => {},
});

export const useRootContext = () => useContext(Context);
const RootView = ({children}: Props) => {
  const [state, setState] = useStateCustom<IState>({
    data: [],
  });
  return (
    <Context.Provider value={{state, setState}}>{children}</Context.Provider>
  );
};

export default RootView;
