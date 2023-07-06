import AsyncStorage from '@react-native-async-storage/async-storage';

import { Product } from '../types/product';

export const storeProductsInAsyncStorage = async (products: Product[]) => {
  const jsonValue = JSON.stringify(products);

  await AsyncStorage.setItem('products', jsonValue);
};

export const getProductsFromAsyncStorage = async (): Promise<Product[]> => {
  const jsonValue = await AsyncStorage.getItem('products');

  return jsonValue ? JSON.parse(jsonValue) : [];
};
