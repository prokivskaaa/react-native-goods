import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { fetchProducts } from '../api/products.api';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { Product } from '../types/product';

export const ProductsList = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleProductSelect = (product: Product) => {
    navigation.navigate('Product', { product });
  };

  const loadProducts = async () => {
    const fetcheProducts = await fetchProducts();

    setProducts(fetcheProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} onPress={handleProductSelect} />}
        style={styles.list}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingRight: 20,
  },
});
