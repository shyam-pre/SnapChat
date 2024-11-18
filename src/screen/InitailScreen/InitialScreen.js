import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import imagePath from '../Constants/imagePath';
import Styles from './Styles';

const InitialScreen = () => {
  return (
    <View style={{flex: 1,backgroundColor:'yellow'}}>
      <Image source={imagePath.logo} style={Styles.style.logoStyle} />
      {/* <Image source={require('../../assets/Image/logokalyan.jpeg')}/> */}             
      <Text>asdfasf</Text>
    </View>
  );
};

export default InitialScreen;

