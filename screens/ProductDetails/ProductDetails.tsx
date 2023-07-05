import { Product } from '../../types/product';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

export const ProductDetails: React.FC = () => {
  const route = useRoute() as { params: { product: Product } };

  const product = route.params?.product;

  return (
    <View
      style={styles.container}
    >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: product.image,
            }}
          />
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.text}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 30,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginBottom: 20,
    flex: 1,
  },

  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 30,
    padding: 20,
  },

  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },

  title: {
    fontWeight: '700',
    fontSize: 23,
    marginBottom: 20,
  },

  text: {
    fontWeight: '400',
    fontSize: 17,
  },

  description: {
    fontWeight: '400',
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 15,
  },
});
