import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput as RNTextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ic_show from '../assets/Icon/show.png';
import ic_hide from '../assets/Icon/hide.png';

const CustomTextInput = ({
  label,
  value,
  placeholder,
  onChangeText,
  textInputStyle,
  isSecure,
  onPressSecure,
  ...props
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: wp(4),
          color: '#000',
          marginLeft: wp(4),
          // marginVertical: hp(1),
        }}>
        {label}
      </Text>
      <View
        style={{
          // borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: wp(4),
          alignItems: 'center',
          marginVertical: hp(1),
        }}>
        <RNTextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={{...styles.inputString, ...textInputStyle}}
          secureTextEntry={isSecure}
          // {...props}
        />

        {!!onPressSecure && (
          <TouchableOpacity onPress={onPressSecure}>
            <Image
              source={isSecure ? ic_hide : ic_show}
              style={{height: hp(3), width: wp(6), marginLeft: wp(4)}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;
const styles = StyleSheet.create({
  inputString: {
    fontSize: 10,
    color: '#000',
    // borderWidth: 1,
    borderBottomWidth: 1,
    // backgroundColor: '#000',
    flex: 1,
  },
});
