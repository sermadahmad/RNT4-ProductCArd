import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = () => {
  const product = {
  image:'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
  name:'Nicon Camera',
  price:'49.99',
  rating:'4.9'
};

  const {image, name, price, rating} = product;

  return (
    <View style = {styles.card} >
      <View style = {styles.imageWraper} > 
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.stars}>★★★★☆</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin:20,
    padding:10,
    borderRadius:10,
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.3,
    shadowRadius:4,
    elevation:10,
    shadowColor:'#000',
    alignItems:'center'
  },
  imageWraper:{
    borderRadius:10,
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.3,
    shadowRadius:4,
    elevation:10,
    shadowColor:'#000',   
    margin:10
  },
  image:{
    width:250,
    height:150,
    borderRadius:10,
  },
  name:{
    fontSize:18,
    fontWeight:'bold',
    padding:5,
  },
  price:{
    fontSize:16,
    color:'green',
    padding:5
  },
  stars:{
    color:'orange',
    fontSize:16,
    padding:5,
  },
  button:{
    backgroundColor:'blue',
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:15,
    margin:5,
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.5,
    shadowRadius:4,
    elevation:10,
    shadowColor:'#000',
  },
  buttonText:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  }
  
});



export default ProductCard;
