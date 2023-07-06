import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'
import React from 'react'

import { type Product } from '../../types/product'
import DefaultPicture from '../../Icons/DefaultPicture/DefaultPicture'
import { ACCENT_COLOR } from '../../constants/colors'

interface Props {
  product: Product
  onPress: (product: Product) => void
}

const ProductCard: React.FC<Props> = ({ product, onPress }) => (
  <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    onPress={() => { onPress(product) }}
    style={styles.container}
  >
    <View>
      <View style={styles.imageContainer}>
        {product.image
          ? (
          <Image
            style={styles.image}
            source={{
              uri: product.image
            }}
          />
            )
          : (
          <DefaultPicture style={styles.image} />
            )}
      </View>

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.price}>${product.price}</Text>
    </View>
  </TouchableHighlight>
)

export default React.memo(ProductCard)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: ACCENT_COLOR,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 20,
    padding: 15,
    paddingBottom: 30
  },

  image: {
    height: 300,
    resizeMode: 'contain',
    width: '100%'
  },

  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 30,
    padding: 20
  },

  price: {
    color: ACCENT_COLOR,
    fontSize: 17,
    fontWeight: '400'
  },

  title: {
    fontSize: 23,
    fontWeight: '700',
    marginBottom: 20
  }
})
