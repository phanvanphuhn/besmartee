import BottomModal from 'components/ModalBase/ModalBottom';
import ButtonLinear from 'elements/Buttons/ButtonLinear';
import Text from 'elements/Text';
import moment from 'moment';
import React, {forwardRef, Ref, useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import colors from 'res/colors';
import sizes from 'res/sizes';
// import { formatDateDDMMYYYY, formatDateDD_MM_YY } from 'utils/DateTimeUtils';

type TimeType = 'date' | 'time' | 'datetime';
interface Props {
  title?: string;
  value?: string;
  type?: TimeType;
  onPressClose?: (date: Date, dateString: string) => void;
  visible: boolean;
  onCloseModal?: () => void;
  format?: string;
  maximumDate?: Date;
  minimumDate?: Date;
}
export interface RefDatePickerProps {
  showModal: () => void;
}
const DateTimePicker = React.memo(
  forwardRef((props: Props, ref: Ref<RefDatePickerProps>) => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
      console.log('=>(DateTimePicker.tsx:32) props.value', props.value);
      if (props.value) {
        setDate(moment(props.value, props.format).toDate());
      }
    }, [props.value]);

    const onPressClose = () => {
      if (props.onPressClose) {
        props.onPressClose(
          date,
          moment(date).format(props.format || 'DD/MM/YYYY'),
        );
      }
      props.onCloseModal && props.onCloseModal();
    };

    var renderDatePicker = useCallback(() => {
      return (
        <View style={modalDatePicker.containerDate}>
          <Text fontWeight={'700'} center hilight size={17}>
            {props.title ?? 'Choose Date'}
          </Text>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode={props.type || 'date'}
            style={modalDatePicker.datePicker}
            locale="vi"
            minimumDate={props.minimumDate}
            maximumDate={props.maximumDate}
          />
          <ButtonLinear
            onPress={onPressClose}
            title={'Update'}
            white
            colors={[colors.primary, colors.primary]}
            style={modalDatePicker.styleButton}
          />
        </View>
      );
    }, [date]);

    return (
      <BottomModal
        isVisibleModal={props.visible}
        onCloseModal={props.onCloseModal}>
        {renderDatePicker()}
      </BottomModal>
    );
  }),
);

export default DateTimePicker;

const modalDatePicker = StyleSheet.create({
  containerDate: {
    paddingVertical: sizes._20sdp,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  styleButton: {
    backgroundColor: colors.primary,
    margin: sizes._10sdp,
    paddingVertical: sizes._10sdp,
    paddingHorizontal: sizes._40sdp,
    alignSelf: 'center',
    height: 'auto',
  },
  textButton: {
    color: colors.white,
    fontWeight: '600',
    fontSize: sizes._font_size_17,
  },
  textTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: sizes._19sdp,
    lineHeight: sizes._23sdp,
  },
  datePicker: {
    alignSelf: 'center',
    height: sizes._210sdp,
    paddingVertical: sizes._30sdp,
  },
});
