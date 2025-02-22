import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FirstScreen1 from './FirstScreen1';

const HomeScreentsx = () => {
  return (
    <View>
      <Text>HomeScreentsx</Text>
      <FirstScreen1 name={'ram'} email={'ram@gmail.com'} age={30} />
    </View>
  );
};

export default HomeScreentsx;

const styles = StyleSheet.create({});
