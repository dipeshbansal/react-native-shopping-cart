// src/ProductList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/actions';

const ProductList = ({route, navigation } ) => {
const { products } = route.params; // Retrieve the products from route.params

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <TouchableOpacity onPress={() => handleAddToCart(item)}>
        <Text style={styles.addToCartBtn}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  addToCartBtn: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 8,
    borderRadius: 5,
  },
});

export default ProductList;
