import React, {createContext, useContext, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import useStateCustom from 'hooks/useStateCustom';

interface BoostProviderProps<S> {
  children: React.ReactNode;
  state: S;
  setState: (value: S) => void;
}
export type TabBoostType = 'all' | 'daily' | 'reco';

interface IContextContainer<S> {
  state: S;
  setState: (value: S) => void;
}
const ContainerContext = createContext<IContextContainer<any>>({
  state: {},
  setState: () => {},
});
export function useContainerContext<S>() {
  return useContext<IContextContainer<S>>(ContainerContext);
}
function ContainerProvider<S>(props: BoostProviderProps<S>) {
  return (
    <ContainerContext.Provider value={{...props}}>
      {props.children}
    </ContainerContext.Provider>
  );
}

export default ContainerProvider;

const styles = StyleSheet.create({
  container: {},
});
