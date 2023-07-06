import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../api/products.api';
import ProductCard from '../../components/ProductCard';
import { selectProducts } from '../../redux/selectors/products.selectors';
import { addProducts } from '../../redux/slices/productsSlice';
import { type RootStackParamList } from '../../types/navigation';
import { type Product } from '../../types/product';
import {
  getProductsFromAsyncStorage,
  storeProductsInAsyncStorage,
} from '../../utils/products.utils';

type Props = NativeStackScreenProps<RootStackParamList, 'Products'>;

const ProductsList: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  const handleProductSelect = useCallback(
    (product: Product) => {
      navigation.navigate('Product', { product });
    },
    [navigation]
  );

  const loadProducts = async (): Promise<void> => {
    let newProducts = await getProductsFromAsyncStorage();

    if (newProducts.length === 0) {
      newProducts = await fetchProducts();

      await storeProductsInAsyncStorage(newProducts);
    }

    dispatch(addProducts(newProducts));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={handleProductSelect} />
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    backgroundColor: '#fff',
    padding: 20,
  },
  listContent: {
    paddingBottom: 40,
  },
});

export default ProductsList;
