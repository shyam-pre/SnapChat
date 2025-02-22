/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// CustomImagePicker.js
import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import {COLOR} from './Color';
// import elevation from 'react-native-elevation';
// import {font} from './Font';

const CustomImagePicker = ({modalVisible, onClose, onImageSelect}) => {
  const handleChooseImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('responseresponse launchImageLibrary', response);
        onImageSelect(response.assets[0]);
        onClose();
      }
    });
  };

  const handleOpenCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        console.log('responseresponse', response);
        onImageSelect(response.assets[0]);
        onClose();
      }
    });
  };

  return (
    <Modal
      isVisible={modalVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      // animationInTiming={1000}
      style={styles.modal}>
      <LinearGradient
        colors={['#0052A0', '#3CB043']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.modalContent}>
        <TouchableOpacity
          style={{
            marginVertical: hp(0.5),
            height: hp(6),
            // backgroundColor: COLOR.blue,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            // ...elevation[5],
          }}
          onPress={handleChooseImage}>
          <Text
            style={{
              fontSize: wp(3.9),
              //   fontFamily: font.bold,
              fontFamily: 'bold',
              //   color: COLOR.white,
              color: 'white',
            }}>
            CHOOSE FROM LIBRARY
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginVertical: hp(0.5),
            height: hp(6),
            // backgroundColor: COLOR.blue,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            // ...elevation[5],
          }}
          onPress={handleOpenCamera}>
          <Text
            style={{
              fontSize: wp(3.9),
              //   fontFamily: font.bold,
              fontFamily: 'bold',
              //   color: COLOR.white,
              color: 'white',
            }}>
            OPEN CAMERA
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginVertical: hp(0.5),
            height: hp(6),
            // backgroundColor: COLOR.blue,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            // ...elevation[5],
          }}
          onPress={onClose}>
          <Text
            style={{
              fontSize: wp(3.9),
              //   fontFamily: font.bold,
              fontFamily: 'bold',
              //   color: COLOR.white,
              color: 'white',
            }}>
            CANCEL
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    // alignItems: 'center',
    marginTop: 'auto',
  },
});

export default CustomImagePicker;
