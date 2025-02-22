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
import CartComponent from '../../screen/cart/CartComponent';
import ChatExample from '../../screen/Hooks/useRef/ChatExample';
import FadeInExample from '../../screen/Hooks/useRef/FadeInExample';
import ForwardRef from '../../screen/Hooks/useRef/ForwardRef';
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
  CartComponent: 'CartComponent',
  AllHooks: 'AllHooks',
  ChatExample: 'ChatExample',
  FadeInExample: 'FadeInExample',
  ForwardRef: 'ForwardRef',
  HomeScreentsx: 'HomeScreentsx',

  routes: {
    splash: 'splash',
    login: 'login',
    logout: 'logout',
    onboard: 'onboard',
    // registerLogOut:'registerLogOut'
  },
};
