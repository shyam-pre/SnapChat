import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../InitailScreen/styles';

const BtnComp = ({title,onPress, btnStyle}) => {
  return (
    <View>
      <TouchableOpacity style={{...styles.btnStyle, ...btnStyle}} onPress={onPress}>
        <Text style={styles.logotest}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnComp;
