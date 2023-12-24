import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
} from 'react-native';
import Container from 'elements/Layout/Container';
import {OrderProps, useRootContext} from 'RootView';
import keyExtractor from 'utils/keyExtractor';
import Text from 'elements/Text';
import ButtonText from 'elements/Buttons/ButtonText';
import colors from 'res/colors';
import {navigate} from 'navigation/service/RootNavigation';
import Routes from 'configs/Routes';
import Theme from 'res/Theme';
import {BaseNavigationProps} from 'navigation/BaseNavigationProps';
import {MainParamList} from 'navigation/service/NavigationParams';
import useStateCustom from 'hooks/useStateCustom';
import {formatData, paginate} from 'utils/array-utils';

interface OrderScreenProps {
  data?: OrderProps[];
  page?: number;
}

const OrderScreen = (props: BaseNavigationProps<MainParamList>) => {
  const [orders, setOrders] = useStateCustom<OrderScreenProps>({
    data: [],
    page: 1,
  });
  const {state, setState} = useRootContext();

  const onDetail = (item: OrderProps) => () => {
    props.navigation.navigate(Routes.OrderDetailScreen, {
      order: item,
    });
  };
  const onLoadMore = () => {
    if ((orders.data || [])?.length >= (orders?.page || 1) * 10) {
      setOrders({page: (orders?.page || 1) + 1});
    }
  };
  const renderItem: ListRenderItem<OrderProps> = ({item, index}) => {
    return (
      <TouchableOpacity onPress={onDetail(item)} style={styles.containerItem}>
        <Text
          fontWeight={'600'}
          size={16}
          marginBottom={5}>{`Order-${item.id}`}</Text>
        <View>
          {item.products.map((e, i) => {
            return (
              <View style={Theme.flexRow}>
                <View style={styles.dots} />
                <Text marginLeft={7}>
                  {e.name} - {e.amount} items
                </Text>
              </View>
            );
          })}
        </View>

        {!!item?.notes && (
          <View>
            <Text color={colors.gray} marginTop={10}>
              Note goes here
            </Text>
            <View style={styles.containerNote}>
              <Text>{item.notes}</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const onAddNew = () => {
    navigate(Routes.CreateOrderScreen);
  };
  return (
    <Container hideHeader={true} translucent={false} style={styles.container}>
      <FlatList
        data={state.data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{padding: 20}}
        keyExtractor={keyExtractor}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.7}
      />

      <View style={styles.containerButton}>
        <ButtonText
          style={styles.buttonOrder}
          backgroundColor={colors.primary}
          onPress={onAddNew}
          titleColor={colors.white}
          title={'Add new'}
        />
      </View>
    </Container>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {},
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonOrder: {
    flex: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
  },
  buttonAddNew: {
    flex: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
  },
  containerItem: {
    marginTop: 20,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  dots: {
    backgroundColor: colors.gray,
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  containerNote: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
});
