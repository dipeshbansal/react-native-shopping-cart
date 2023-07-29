// App.js
import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ProductList from './src/ProductList';
import Cart from './src/Cart';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
  // Add more products here if needed
];

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 10 }}>Product List</Text>
        <ProductList products={products} />
        <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 10 }}>Cart</Text>
        <Cart />
      </View>
    </Provider>
  );
};

export default App;
