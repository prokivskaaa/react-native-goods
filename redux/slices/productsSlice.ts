import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../types/product';
import { storeProductsInAsyncStorage } from '../../utils/products.utils';

export interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
      const product = { ...action.payload, id: state.products.length + 1 };
      state.products.push(product);

      storeProductsInAsyncStorage(state.products);
    },

    addProducts: (state, action: PayloadAction<Product[]>) => {
      state.products.push(...action.payload);
    },
  },
});

export const { addProduct, addProducts } = productsSlice.actions;

export default productsSlice.reducer;
