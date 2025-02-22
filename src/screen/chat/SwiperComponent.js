import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SwiperComponent = React.memo(({imagesData}) => {
  console.log('klllllllllllllllchild');
  return (
    <View style={{height: hp(25), borderWidth: 1, backgroundColor: 'yellow'}}>
      <Swiper autoplay={true} paginationStyle={{bottom: hp(-3)}}>
        {imagesData.map(item => {
          return (
            <Image
              source={item?.img}
              key={item?.id}
              style={{height: hp(30), width: wp(100)}}
            />
          );
        })}
      </Swiper>
    </View>
  );
});

export default SwiperComponent;

const styles = StyleSheet.create({});
