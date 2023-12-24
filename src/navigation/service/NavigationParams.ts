import Routes from 'configs/Routes';
import {OrderProps} from 'RootView';

export interface MainParamList extends Record<string, object | undefined> {
  [Routes.OrderScreen]: OrderParams;
  [Routes.OrderDetailScreen]: OrderDetailParams;
  [Routes.CreateOrderScreen]: CreateOrderParams;
}

interface OrderParams {}
interface OrderDetailParams {
  order: OrderProps;
}
interface CreateOrderParams {}
