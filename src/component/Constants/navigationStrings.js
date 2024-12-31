import {
  Camera,
  Chat,
  HomeScreen,
  InitialScreen,
  LoginScreen,
  Maps,
  SignUpScreen,
  Splash,
} from '../../screen';
import Onbording1 from '../../screen/onbording/Onbording1';
import Profile from '../../screen/profile/Profile';

export default {
  InitialScreen: 'InitialScreen',
  SignUpScreen: 'SignUpScreen',
  LoginScreen: 'LoginScreen',
  Chat: 'Chat',
  Maps: 'Map',
  Storages: 'Storages',
  Camera: 'Camera',
  HomeScreen: 'HomeScreen',
  Profile: 'Profile',
  Onbording1: 'Onbording1',

  routes: {
    splash: 'splash',
    login: 'login',
    logout: 'logout',
    onboard: 'onboard',
    // registerLogOut:'registerLogOut'
  },
};
