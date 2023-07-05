import { Product } from '../../types/product';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

interface Props {
  product: Product;
  onPress: (product: Product) => void;
}

export const ProductCard: React.FC<Props> = ({ product, onPress }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => onPress(product)}
      style={styles.container}
    >
      <View>
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
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 30,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginBottom: 20,
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
});
