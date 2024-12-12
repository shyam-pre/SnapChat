import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import color from '../screen/styles/color';

const WrapperContainer = ({
  barStyle = 'dark-content',
  statusbarBgColor = color.white,
  children,
  backgroundColor,
}) => {
  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: backgroundColor}}>
      <StatusBar backgroundColor={statusbarBgColor} barStyle={barStyle} />
      {children}
    </SafeAreaView>
  );
};

export default WrapperContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
});
