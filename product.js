import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? '★' : '';
  return (
    '★'.repeat(fullStars) +
    halfStars +
    '☆'.repeat(5 - fullStars - (halfStars ? 1 : 0))
  );
};

const ProductCard = ({product}) => {
  const { image, name, price, rating } = product;
  return (
    <View style={styles.card}>
      <View style={styles.imageWraper}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.stars}>{renderStars(rating)}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor:'red',
    marginTop: 40,
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    shadowColor: 'red',
    alignItems: 'center',
  },
  imageWraper: {
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    shadowColor: 'red',
    margin: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  price: {
    fontSize: 16,
    color: 'green',
    padding: 5,
  },
  stars: {
    color: 'orange',
    fontSize: 16,
    padding: 5,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
    shadowColor: 'red',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProductCard;
