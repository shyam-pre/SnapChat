import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import navigationStrings from '../../component/Constants/navigationStrings';

import ic_home from '../../assets/Icon/home.png';
import ic_map from '../../assets/Icon/map.png';

import ic_rightArrow from '../../assets/Icon/rightArrow.png';

const CustomDrawerContent = props => {
  console.log('YYmm');

  const CustomDrawerItem = ({iconName, label, onPress, arrowIcon}) => {
    return (
      <TouchableOpacity style={[styles.drawerItem]} onPress={onPress}>
        <Image source={iconName} style={{height: hp(3), width: wp(6.5)}} />
        <Text style={styles.label}>{label}</Text>
        <Image source={arrowIcon} style={{height: hp(3), width: wp(6.5)}} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.drawerContainer}>
      <Image
        source={require('../../assets/Image/logokalyan.jpeg')}
        style={{
          height: hp(10),
          aspectRatio: 1,
          borderRadius: wp(20),
          marginBottom: hp(2),
        }}
      />
      <CustomDrawerItem
        iconName={ic_home}
        arrowIcon={ic_rightArrow}
        label="Home"
        onPress={() => props.navigation.navigate(navigationStrings.HomeScreen)}
      />
      <CustomDrawerItem
        iconName={ic_map}
        arrowIcon={ic_rightArrow}
        label="Profile"
        onPress={() => props.navigation.navigate(navigationStrings.Profile)}
      />
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: hp(2),
    paddingHorizontal: wp(4),
    // backgroundColor: '#000',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e1f0e1',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: wp(10),
    marginBottom: hp(2),
  },
  icon: {
    marginRight: 15,
    color: '#000',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 30,
  },
  arrowIcon: {
    color: '#000',
  },
});
