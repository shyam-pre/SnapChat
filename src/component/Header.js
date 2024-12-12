import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import imagePath from '../../src/component/Constants/imagePath';

const Header = ({left = imagePath.back, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={!!onPress ? onPress : () => navigation.goBack()}
        style={{padding: 10}}>
        <Image source={left} style={{height: hp(3), width: wp(6)}} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
