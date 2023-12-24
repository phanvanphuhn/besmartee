import React, {memo, useState} from 'react';
import {renderers} from 'react-native-popup-menu';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import colors from 'res/colors';
import {height} from 'configs/Const';

const {Popover, ContextMenu, NotAnimatedContextMenu, SlideInMenu} = renderers;
interface OptionArray {
  value: string;
  id: string | number;
}
interface Props {
  [key: string]: any;
  MenuSelectOption: React.ReactNode;
  options?: OptionArray[];
  customOption?: React.ReactNode;
  onSelected: (e: OptionArray, i: number) => void;
  placement?: 'bottom' | 'top' | 'left' | 'right';
  popover?: boolean;
  disabled?: boolean;
  optionsContainerStyle?: StyleProp<ViewStyle>;
}
const CustomDropdown = ({
  MenuSelectOption,
  options,
  customOption,
  onSelected,
  optionsContainerStyle,
  disabled,
  ...props
}: Props) => {
  const [isShow, setIsShow] = useState(false);
  const onSelect = (e: OptionArray, i: number) => () => {
    setIsShow(false);
    onSelected && onSelected(e, i);
  };
  if (disabled) {
    return MenuSelectOption;
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsShow(false);
      }}
      {...props}>
      <View>
        <TouchableOpacity onPress={() => setIsShow(true)}>
          {MenuSelectOption}
        </TouchableOpacity>
        {!!isShow && (
          <View
            style={[
              {
                marginTop: 5,
                backgroundColor: colors.lightGray,
                borderRadius: 5,
              },
              {
                display: !!customOption || !!options?.length ? 'flex' : 'none',
              },
              optionsContainerStyle,
            ]}>
            {customOption ? (
              customOption
            ) : options?.length ? (
              <ScrollView style={{maxHeight: height / 4}}>
                {options.map((e, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      style={styles.containerOption}
                      onPress={onSelect(e, i)}>
                      <View style={[styles.buttonAnwser]}>
                        <Text>{e.value}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            ) : null}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  containerOption: {
    borderBottomColor: '#00000020',
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  buttonAnwser: {
    // alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
export default memo(CustomDropdown);
