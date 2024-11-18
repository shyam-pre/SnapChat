import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Routes from './src/Navigation/Routes';

const App = () => {
  return (
    <View style={{flex:1}}>
      <Routes/>
      {/* <Text>dsa</Text> */}
    </View>
  );
}

export default App;
