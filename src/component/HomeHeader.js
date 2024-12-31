import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import imagePath from '../../src/component/Constants/imagePath';

const HomeHeader = ({left = imagePath.back, onPress, contentText}) => {
  const navigation = useNavigation();
  return (
    <View style={{paddingHorizontal: wp(3)}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={imagePath.ic_profile}
            style={{
              height: hp(3),
              width: wp(6),
              resizeMode: 'contain',
            }}
          />
          <Image
            source={imagePath.ic_search}
            style={{
              height: hp(3),
              width: wp(6),
              resizeMode: 'contain',
              marginLeft: wp(5),
            }}
          />
        </View>
        <Text style={{fontSize: wp(4), color: '#000', fontWeight: 'bold'}}>
          {contentText}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={left} style={{height: hp(3), width: wp(6)}} />

          <Image
            source={imagePath.ic_profile}
            style={{height: hp(3), width: wp(6), resizeMode: 'contain'}}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

{
  /* <TouchableOpacity
        onPress={!!onPress ? onPress : () => navigation.goBack()}
        style={{padding: 10}}> */
}
{
  /* </TouchableOpacity> */
}
