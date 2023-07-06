import { StyleSheet, View, Text, Image } from 'react-native';
import { type RouteProp, useRoute } from '@react-navigation/native';

import DefaultPicture from '../../Icons/DefaultPicture/DefaultPicture';
import { type RootStackParamList } from '../../types/navigation';
import { ACCENT_COLOR } from '../../constants/colors';

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

const ProductDetails: React.FC = () => {
  const route = useRoute<ProductScreenRouteProp>();

  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {product.image ? (
          <Image
            style={styles.image}
            source={{
              uri: product.image,
            }}
          />
        ) : (
          <DefaultPicture style={styles.image} />
        )}
      </View>

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.price}>${product.price}</Text>

      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 4,
    flex: 1,
    padding: 15,
    paddingBottom: 30,
  },

  description: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '400',
    marginTop: 15,
  },

  image: {
    height: 300,
    resizeMode: 'contain',
    width: '100%',
  },

  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 30,
    padding: 20,
  },

  price: {
    color: ACCENT_COLOR,
    fontSize: 17,
    fontWeight: '400',
  },

  title: {
    fontSize: 23,
    fontWeight: '700',
    marginBottom: 20,
  },
});
