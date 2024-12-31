import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Maps = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Text>Maps</Text>
    </SafeAreaProvider>
  );
};

export default Maps;
