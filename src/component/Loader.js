import React from 'react';
import {View, Text, Modal, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Loader = ({loading}) => {
  return (
    <Modal transparent={true} visible={loading} animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000090',
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <View
          style={{
            height: hp(10),
            width: wp(20),
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: wp(1),
          }}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
