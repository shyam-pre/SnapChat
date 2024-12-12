import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const SignUpScreen = () => {
  const dispatch = useDispatch();
  console.log('ddddddddddddddddd');

  const data = useSelector(state => state.route);
  console.log('(((((((((((((((88', data);
  // console.warn('(((((((((((((((88', data);

  return (
    <View>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUpScreen;
