import {useNavigation} from '@react-navigation/native';
import Routes from 'configs/Routes';
import {BaseUseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import React, {useEffect, useState} from 'react';
import {
  ColorValue,
  Image,
  ImageProps,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {ImageSource} from 'react-native-image-viewing/dist/@types';

export interface IImageProps extends ImageProps {
  tintColor?: ColorValue | string;
  isPreview?: boolean;
  data?: ImageSource[];
  index?: number;
  defaultImage?: ImageSourcePropType;
}

export default ({
  tintColor,
  style,
  isPreview,
  data,
  index,
  defaultImage,
  ...props
}: IImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const {navigate} = useNavigation<BaseUseNavigationProps<MainParamList>>();
  const onPreviewImage = () => {
    if (data?.length) {
      navigate(Routes.ImageViewerScreen, {data, index: index || 0});
    }
  };
  useEffect(() => {
    if (!props?.source?.uri) {
      setError(true);
    }
  }, [props?.source?.uri]);
  return (
    <TouchableOpacity onPress={onPreviewImage} disabled={!isPreview}>
      {!!error && defaultImage ? (
        <Image source={defaultImage} style={[{tintColor}, style]} />
      ) : (
        <Image
          onError={e => {
            setError(true);
          }}
          onLoad={e => {
            setIsLoading(true);
          }}
          style={[{tintColor}, style]}
          {...props}
        />
      )}
    </TouchableOpacity>
  );
};
