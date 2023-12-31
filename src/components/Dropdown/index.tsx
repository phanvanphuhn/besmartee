import Text from 'elements/Text';
import {useDeviceOrientation} from 'hooks/useDeviceOrientation';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {isTablet} from 'react-native-device-info';
import images from 'res/images';
import scale from 'utils/scale';
// import CInput from '../TextInput';
import {styles} from './styles';
import {Dropdown} from './type';

const deepEqual = (x?: any, y?: any): boolean => {
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y;
  return x && y && tx === 'object' && tx === ty
    ? ok(x).length === ok(y).length &&
        ok(x).every(key => deepEqual(x[key], y[key]))
    : x === y;
};

const defaultProps = {
  placeholder: 'Select item',
  activeColor: '#F6F7F8',
  data: [],
  style: {},
  selectedTextProps: {},
};

const DropdownComponent: Dropdown = props => {
  const orientation = useDeviceOrientation();
  const {
    onChange,
    style,
    containerStyle,
    placeholderStyle,
    selectedTextStyle,
    inputSearchStyle,
    selectedTextProps,
    data,
    labelField,
    valueField,
    value,
    activeColor,
    fontFamily,
    iconColor = 'gray',
    searchPlaceholder,
    placeholder,
    search = false,
    maxHeight = 340,
    disable = false,
    renderLeftIcon,
    renderRightIcon,
    renderItem,
    renderDropdown,
  } = props;

  const ref = useRef<any>(null);
  const refList = useRef<any>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<any>(null);
  const [textSearch, setTextSearch] = useState<string>('');
  const [listData, setListData] = useState<any[]>(data);
  const [position, setPosition] = useState<any>();
  const {width: W, height: H} = Dimensions.get('window');

  const font = () => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily,
      };
    } else {
      return {};
    }
  };

  useEffect(() => {
    getValue();
  }, [value, data]);

  const getValue = () => {
    const getItem = data.filter(e => deepEqual(value, e[valueField]));
    if (getItem.length > 0) {
      setCurrentValue((e: any) => (e = getItem[0]));
    } else {
      setCurrentValue(null);
    }
  };

  const scrollToIndex = useMemo(() => {
    if (textSearch.length === 0) {
      const index = data.findIndex(e => value === e[valueField]);
      if (index !== -1) {
        return index;
      }
      return 0;
    }
  }, [value, data]);

  const showOrClose = () => {
    console.log('disable: ', disable);
    if (!disable) {
      _measure();
      setVisible(!visible);
      setListData(data);
    }
  };

  const onSelect = (item: any) => {
    onSearch('');
    setCurrentValue((e: any) => (e = item));
    onChange(item);
    setVisible(false);
  };

  const _renderDropdown = () => {
    const isSelected = currentValue && currentValue[valueField];
    if (renderDropdown) {
      return (
        <TouchableOpacity onPress={showOrClose}>
          {renderDropdown()}
        </TouchableOpacity>
      );
    }
    return (
      <TouchableWithoutFeedback onPress={showOrClose}>
        <View style={styles.dropdown}>
          {renderLeftIcon?.()}
          <Text
            style={[
              styles.textItem,
              isSelected ? selectedTextStyle : placeholderStyle,
              font(),
            ]}
            {...selectedTextProps}>
            {isSelected ? currentValue[labelField] : placeholder}
          </Text>
          {renderRightIcon ? (
            renderRightIcon()
          ) : (
            <Image
              source={images.ic_dropdown}
              style={[styles.icon, {tintColor: iconColor}]}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    const isSelected = currentValue && currentValue[valueField];
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onSelect(item)}
        style={[
          deepEqual(item[valueField], isSelected) && {
            backgroundColor: activeColor,
          },
        ]}>
        {renderItem ? (
          renderItem(item)
        ) : (
          <View style={styles.item}>
            <Text style={[styles.textItem, selectedTextStyle, font()]}>
              {item[labelField]}
            </Text>
            {!!deepEqual(item[valueField], isSelected) && (
              <Image source={images.ic_checked} />
            )}
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const onSearch = (text: string) => {
    setTextSearch(text);
    if (text.length > 0) {
      const dataSearch = data.filter(e => {
        const item = e[labelField]
          ?.toLowerCase()
          .replace(' ', '')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        const key = text
          .toLowerCase()
          .replace(' ', '')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

        return item.indexOf(key) >= 0;
      });
      setListData(dataSearch);
    } else {
      setListData(data);
    }
  };

  const scrollIndex = () => {
    setTimeout(() => {
      refList.current.scrollToIndex({index: scrollToIndex, animated: false});
    }, 200);
  };

  const _renderListTop = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          ref={refList}
          initialScrollIndex={scrollToIndex}
          onScrollToIndexFailed={scrollIndex}
          data={listData}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={true}
        />
        {/* {search && (
          <CInput
            style={[styles.input, inputSearchStyle]}
            inputStyle={font()}
            autoCorrect={false}
            placeholder={searchPlaceholder}
            onChangeText={onSearch}
            placeholderTextColor="gray"
            iconStyle={{tintColor: iconColor}}
          />
        )} */}
      </View>
    );
  };

  const _renderListBottom = () => {
    return (
      <View style={{flex: 1}}>
        {/* {search && (
          <CInput
            style={[styles.input, inputSearchStyle]}
            inputStyle={font()}
            autoCorrect={false}
            placeholder={searchPlaceholder}
            onChangeText={onSearch}
            placeholderTextColor="gray"
            iconStyle={{tintColor: iconColor}}
          />
        )} */}
        <FlatList
          ref={refList}
          initialScrollIndex={scrollToIndex}
          onScrollToIndexFailed={scrollIndex}
          data={listData}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={true}
        />
      </View>
    );
  };

  const _renderModal = () => {
    if (visible && position) {
      const {isFull, w, top, bottom} = position;
      if (w && top && bottom) {
        return (
          <Modal
            transparent
            visible={visible}
            supportedOrientations={['landscape', 'portrait']}>
            <TouchableWithoutFeedback onPress={showOrClose}>
              <View
                style={[
                  {width: W, height: H, alignItems: 'center'},
                  isFull && {backgroundColor: 'rgba(0,0,0,0.2)'},
                ]}>
                <View
                  style={{height: top, width: w, justifyContent: 'flex-end'}}>
                  {bottom < maxHeight && (
                    <View
                      style={[
                        {width: w},
                        styles.container,
                        containerStyle,
                        isFull
                          ? {
                              marginBottom: scale(20),
                              width: W / 2,
                              alignSelf: 'center',
                            }
                          : {maxHeight: maxHeight},
                      ]}>
                      {_renderListTop()}
                    </View>
                  )}
                </View>
                <View style={{height: bottom, width: w}}>
                  {bottom > maxHeight && (
                    <View
                      style={[
                        {width: w},
                        styles.container,
                        containerStyle,
                        isFull
                          ? {
                              marginBottom: scale(20),
                              width: W / 2,
                              alignSelf: 'center',
                            }
                          : {maxHeight: maxHeight},
                      ]}>
                      {_renderListBottom()}
                    </View>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        );
      }
      return null;
    }
    return null;
  };

  const _measure = () => {
    if (ref) {
      ref.current.measure(
        (
          width: number,
          height: number,
          px: number,
          py: number,
          fx: number,
          fy: number,
        ) => {
          const isFull = orientation === 'LANDSCAPE' && !isTablet();
          const w = px;
          const top = isFull ? scale(20) : py + fy + scale(2);
          const bottom = H - top;

          setPosition({
            isFull,
            w,
            top,
            bottom,
          });
        },
      );
    }
  };

  return (
    <View>
      <View style={[style]} ref={ref} onLayout={_measure}>
        {_renderDropdown()}
        {_renderModal()}
      </View>
    </View>
  );
};

DropdownComponent.defaultProps = defaultProps;

export default DropdownComponent;
