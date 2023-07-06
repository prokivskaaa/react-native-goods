import { Product } from './product';

export type RootStackParamList = {
  Products: undefined;
  AddProduct: undefined;
  Product: { product: Product };
};
