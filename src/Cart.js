// src/Cart.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from './redux/actions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateCartItemQuantity(productId, quantity));
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.name}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
          <Text style={styles.quantityBtn}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
          <Text style={styles.quantityBtn}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
        <Text style={styles.removeBtn}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => <Text>Your cart is empty.</Text>}
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
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
  },
  quantityBtn: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
  removeBtn: {
    color: 'red',
    textDecorationLine: 'underline',
  },
});

export default Cart;
