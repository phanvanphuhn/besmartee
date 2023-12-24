import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ListRenderItem,
  TextInput,
} from 'react-native';
import Container from 'elements/Layout/Container';
import useStateCustom from 'hooks/useStateCustom';
import images from 'res/images';
import colors from 'res/colors';
import Text from 'elements/Text';
import ButtonText from 'elements/Buttons/ButtonText';
import {ProductProps, useRootContext} from 'RootView';
import {BaseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import Routes from 'configs/Routes';
import keyExtractor from 'utils/keyExtractor';
import snackbarUtils from 'utils/snackbar-utils';
import {goBack, navigate, reset} from 'navigation/service/RootNavigation';

interface CreateOrderScreenProps {}
interface CreateOrderState {
  note?: string;
  data?: ProductProps[];
}

const CreateOrderScreen = (
  props: BaseNavigationProps<MainParamList, Routes.CreateOrderScreen>,
) => {
  const [_state, _setState] = useStateCustom<CreateOrderState>({
    note: '',
    data: [],
  });

  const {state, setState} = useRootContext();
  const onChangeNote = (note: string) => {
    _setState({note});
  };

  const onAddProduct = () => {
    let data = _state.data || [];
    data.unshift({
      name: '',
      amount: '1',
    });
    _setState({data});
  };
  const onChangeProduct =
    (item: ProductProps, key: keyof ProductProps, index: number) =>
    (value: string) => {
      let data = [...(_state.data || [])];
      item[key] = value;
      data.splice(index, 1, data[index]);
      _setState({data});
    };

  const onSubmit = () => {
    let orderData = [...(state.data || [])];

    if (_state.data?.some(e => !e.name)) {
      snackbarUtils.show('Please enter name', 'danger');
      return;
    }
    if (_state.data?.some(e => !e.amount)) {
      snackbarUtils.show('Please enter amount', 'danger');
      return;
    }
    orderData.push({
      id: Math.random().toString(16).slice(2),
      notes: _state.note,
      products: _state?.data || [],
    });
    setState({data: orderData});
    goBack();
  };

  const ondelete = (index: number) => () => {
    let data = [...(_state.data || [])];
    data.splice(index, 1);
    _setState({data});
  };
  const _renderItem = (item: ProductProps, index: number) => {
    return (
      <View key={index?.toString()} style={styles.containerItem}>
        <TouchableOpacity onPress={ondelete(index)} style={{padding: 10}}>
          <Image source={images.ic_close} />
        </TouchableOpacity>
        <TextInput
          placeholder={`New product nane ${index}`}
          value={item.name}
          onChangeText={onChangeProduct(item, 'name', index)}
          style={styles.inputName}
        />
        <TextInput
          placeholder={'Amount'}
          value={item.amount}
          onChangeText={onChangeProduct(item, 'amount', index)}
          style={styles.inputAmount}
          keyboardType={'numeric'}
        />
      </View>
    );
  };
  return (
    <Container title={'Add new order'} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Notes</Text>
        <TextInput
          placeholder={'Add note here'}
          value={_state?.note || ''}
          onChangeText={onChangeNote}
          multiline={true}
          editable={true}
          style={styles.inputNote}
        />

        <TouchableOpacity
          onPress={onAddProduct}
          style={styles.buttonAddProduct}>
          <View style={styles.containerImageAdd}>
            <Image source={images.ic_add} style={styles.imageAdd} />
          </View>
          <Text marginLeft={10}>Add product</Text>
        </TouchableOpacity>

        {_state?.data?.map((item, index) => _renderItem(item, index))}
      </ScrollView>

      <ButtonText
        title={'Submit'}
        backgroundColor={colors.primary}
        titleColor={colors.white}
        boderRadius={5}
        onPress={onSubmit}
      />
    </Container>
  );
};

export default CreateOrderScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonAddProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  containerImageAdd: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
  },
  imageAdd: {
    height: 15,
    width: 15,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  inputName: {
    flex: 1,
    height: 42,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  inputAmount: {
    height: 42,
    width: '15%',
    marginLeft: 20,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  inputNote: {
    height: 100,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
});
