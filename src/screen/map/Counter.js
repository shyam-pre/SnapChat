import {View, Text, Button} from 'react-native';
import React from 'react';

const Counter = ({onIncrement}) => {
  console.log('hellooeeeeeeeee');

  return <Button title="Increment" onPress={onIncrement} />;
};
export default React.memo(Counter);
