import React from 'react';
import { View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LoginScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:'green'}}>

    
      <Text style={{fontSize:hp(2), color:'#000'}}>LoginScreen</Text>
    </View>
  );
}

export default LoginScreen;
