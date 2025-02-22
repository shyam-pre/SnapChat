import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '../redux/store/store';
import Routes from './Routes';

const AppNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
