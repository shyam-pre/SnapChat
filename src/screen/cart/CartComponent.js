import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, clearCart, removeFromCart} from '../../redux/cartSlice';
// import {addToCart, removeFromCart, clearCart} from './slices/cartSlice';

const CartComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems);
  console.log('Lppppppppppppssssss', cartItems?.cartItems);

  const handleAddToCart = () => {
    const item = {
      id: 2,
      name: 'Sample Item2',
      price: 10,
      quantity: 1,
    };
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = id => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <View>
      <Button title="Add to Cart" onPress={handleAddToCart} />
      <Button title="Clear Cart" onPress={handleClearCart} />

      <Text>Cart Items:</Text>
      <FlatList
        data={cartItems?.cartItems}
        // keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: ${item.price * item.quantity}</Text>
            <Button
              title="Remove"
              onPress={() => handleRemoveFromCart(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CartComponent;
