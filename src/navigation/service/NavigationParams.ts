import Routes from 'configs/Routes';

export interface MainParamList extends Record<string, object | undefined> {
  [Routes.OrderScreen]: OrderParams;
  [Routes.OrderDetailScreen]: OrderDetailParams;
  [Routes.CreateOrderScreen]: CreateOrderParams;
}

interface OrderParams {}
interface OrderDetailParams {}
interface CreateOrderParams {}
