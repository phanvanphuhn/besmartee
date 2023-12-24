import React, {memo} from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import colors from 'res/colors';
import {height} from 'res/sizes';

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
  onSelected?: (e: OptionArray, i: number) => void;
  placement?: 'bottom' | 'top' | 'left' | 'right';
  popover?: boolean;
  disabled?: boolean;
  optionsContainerStyle?: StyleProp<ViewStyle>;
}
const CustomMenu = ({
  MenuSelectOption,
  options,
  customOption,
  onSelected,
  placement = 'bottom',
  popover,
  optionsContainerStyle,
  disabled,
  ...props
}: Props) => {
  const onSelect = (e: OptionArray, i: number) => () => {
    onSelected && onSelected(e, i);
  };
  if (disabled) {
    return MenuSelectOption;
  }
  return (
    <Menu
      {...props}
      renderer={popover ? Popover : ContextMenu}
      rendererProps={{
        placement: placement,
        anchorStyle: {backgroundColor: colors.gray},
      }}>
      <MenuTrigger>{MenuSelectOption}</MenuTrigger>
      <MenuOptions
        optionsContainerStyle={[
          {display: !!customOption || !!options?.length ? 'flex' : 'none'},
          optionsContainerStyle,
        ]}>
        {customOption ? (
          customOption
        ) : options?.length ? (
          <ScrollView style={{maxHeight: height / 4}}>
            {options.map((e, i) => {
              return (
                <MenuOption
                  key={i}
                  style={styles.containerOption}
                  onSelect={onSelect(e, i)}>
                  <View style={[styles.buttonAnwser]}>
                    <Text>{e.value}</Text>
                  </View>
                </MenuOption>
              );
            })}
          </ScrollView>
        ) : null}
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  containerOption: {
    borderBottomColor: '#00000020',
    borderBottomWidth: 1,
  },
  buttonAnwser: {
    // alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
export default memo(CustomMenu);
