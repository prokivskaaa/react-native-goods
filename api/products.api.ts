import { Product } from '../types/product';

export const fetchProducts = (): Promise<Product[]> =>
  fetch('https://fakestoreapi.com/products/').then((res) => res.json());
