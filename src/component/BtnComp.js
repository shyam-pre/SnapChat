import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../screen/InitailScreen/Styles';

const BtnComp = ({
  title,
  onPress,
  btnCustomStyle,
  testStyle,
  isDisabled = false,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{...styles.btnStyle, ...btnCustomStyle}}
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.8}>
        <Text style={{...styles.logotest, ...testStyle}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnComp;
