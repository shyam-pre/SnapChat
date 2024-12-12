import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import BtnComp from '../../component/BtnComp';
import navigationStrings from '../../component/Constants/navigationStrings';
import CustomTextInput from '../../component/CustomTextInput ';
import Header from '../../component/Header';
import WrapperContainer from '../../component/WrapperContainer';
import string from '../../component/lang';
import en from '../../component/lang/en';
import styles from './Styles';
import {useDispatch} from 'react-redux';
import {setMainRoute} from '../../redux/action/authAction';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    password: '',
    email: '',
    isSecure: true,
    isEnabled: false,
  });
  const {email, password, isSecure, isEnabled} = state;

  const updateState = data => {
    setState(state => ({...state, ...data}));
  };

  const onLogin = () => {
    Alert.alert('', 'please login');
    // const dispatch =
    return;
  };
  useEffect(() => {
    if (email !== '' && password !== '') {
      updateState({isEnabled: true});
      return;
    }
    updateState({isEnabled: false});
  }, [email, password]);

  return (
    <WrapperContainer backgroundColor={'#0000'}>
      <Header
        onPress={() => navigation.navigate(navigationStrings.HomeScreen)}
        style={{}}
      />
      <View style={{flex: 1}}>
        <CustomTextInput
          label={en.ENTER_PASSWORD}
          placeholder={string.ENTER_NAME}
          value={password}
          onChangeText={password => updateState({password})}
          isSecure={isSecure}
          onPressSecure={() => updateState({isSecure: !isSecure})}
        />
        <CustomTextInput
          label={en.ENTER_PASSWORD}
          placeholder={string.ENTER_NAME}
          value={email}
          onChangeText={email => updateState({email})}
        />
      </View>
      <BtnComp
        btnCustomStyle={{
          ...styles.btnCustomStyle,
          backgroundColor: isEnabled ? 'green' : '#00000090',
        }}
        testStyle={{color: '#fff'}}
        title={'Next'}
        isDisabled={!isEnabled}
        onPress={onLogin}
      />
    </WrapperContainer>
  );
};
export default LoginScreen;
