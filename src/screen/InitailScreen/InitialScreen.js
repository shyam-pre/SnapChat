import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import imagePath from '../Constants/imagePath';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../InitailScreen/styles.js';
import BtnComp from '../component/BtnComp';
import navigationStrings from '../Constants/navigationStrings';
import color from '../styles/color';
const InitialScreen = ({navigation}) => {
  const handlePress = () => {
  };
  const handleSignUp = (screen) => {
    navigation.navigate(screen)
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'yellow'}}>
      <View style={{}}>
        <Image
          source={imagePath.logo}
          style={{...styles.logoStyle, marginTop: hp(4)}}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <BtnComp
          title="Login"
          btnStyle={{
            backgroundColor: color.green,
            marginHorizontal: wp(10),
            borderRadius: wp(2),
            marginBottom: hp(2),
          }}
          onPress={handlePress}
        />
        <BtnComp
          title="SignUp"
          btnStyle={{
            backgroundColor: 'red',
            marginHorizontal: wp(10),
            borderRadius: wp(2),
            marginBottom: hp(2),
          }}
          onPress={() => handleSignUp(navigationStrings.SignUpScreen)}
          logotest={{color:'#fff'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;
