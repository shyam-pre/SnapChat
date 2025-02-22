import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomImagePicker from '../../component/CameraComponent';
import {CameraContext} from '../Hooks/useRef/AppContext';

const Camera = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleImageSelect = image => {
    console.log('Selected image:', image);
  };

  // const {cameraData, setCameraData} = useContext(AppContext);
  const {cameraData, setCameraData} = useContext(CameraContext);

  const data = [
    {id: 1, name: 'camera1'},
    {id: 2, name: 'camera2'},
  ];

  const handleSend = () => {
    setCameraData(data);
  };
  // // chaoose image
  // const handleOpenCameraG = async () => {
  //   const options = {
  //     mediaType: 'photo',
  //     quality: 1,
  //   };

  //   // You can also use as a promise without 'callback':
  //   const result = await launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //       console.log('true if the user cancelled the process');
  //     } else if (response.errorMessage) {
  //       console.log('	Description of the error, use it for debug purpose only');
  //     } else {
  //       console.log('response launchImage Library');
  //       console.log('LPPPPPPP', response?.assets[0]);
  //     }
  //   });
  // };

  // // chaoose image
  // const handleOpenCamera = async () => {
  //   const options = {
  //     mediaType: 'photo',
  //     quality: 1,
  //     cameraType: 'front',
  //   };

  //   // You can also use as a promise without 'callback':
  //   const result = await launchCamera(options, response => {
  //     if (response.didCancel) {
  //       console.log('camera if the user cancelled the process');
  //     } else if (response.errorMessage) {
  //       console.log(
  //         'camera	Description of the error, use it for debug purpose only',
  //       );
  //     } else {
  //       console.log('camera response launchImage Library');
  //       console.log('LPPPPPPP', response?.assets[0]);
  //     }
  //   });
  // };

  return (
    <View>
      <Text style={{padding: 10, borderWidth: 1}}>Camera</Text>
      <Button title="Open Image Picker" onPress={() => setModalVisible(true)} />
      <CustomImagePicker
        modalVisible={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        onIm
        ageSelect={handleImageSelect}
      />

      <Text>{JSON.stringify(cameraData || '')} </Text>

      <Button title="Open context" onPress={handleSend} />
      {/* <TouchableOpacity
        onPress={handleOpenCameraG}
        style={{marginTop: 30, borderWidth: 1}}>
        <Text>dsafaaaaaaaaaaaaaaaa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleOpenCamera}
        style={{marginTop: 30, borderWidth: 1}}>
        <Text>camera dsafaaaaaaaaaaaaaaaa</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Camera;
