import React from 'react';
import {View} from 'react-native';

interface Props {
  children: React.ReactNode;
}
const LanguageProvider = ({children}: Props) => {
  return <View>{children}</View>;
};

export default LanguageProvider;
