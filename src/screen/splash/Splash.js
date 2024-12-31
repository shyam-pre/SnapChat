import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {async_key, getData} from '../../provider/UserPreference';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../component/Constants/navigationStrings';
import {setMainRoute} from '../../redux/action/authAction';

const Splash = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const status = useSelector(state => state.route);
  console.log('PPPPPPPPPPP', status);
  useEffect(() => {
    let fetchStatus = async () => {
      try {
        console.log('KKKKKKKKKKKKKKK');
      } catch (err) {
        console.log('LLLLLLLLLLLLLLL', err);
      }
    };
    fetchStatus();
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (await getData(async_key.token)) {
        dispatch(setMainRoute({mainRoute: navigationStrings.routes.login}));
      } else if (await getData(async_key.status)) {
        dispatch(setMainRoute({mainRoute: navigationStrings.routes.logout}));
      } else {
        dispatch(setMainRoute({mainRoute: navigationStrings.routes.onboard}));
      }
    }, 2000);

    // Cleanup to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {async_key, getData} from '../../provider/UserPreference';
// import {useNavigation} from '@react-navigation/native';
// import navigationStrings from '../../component/Constants/navigationStrings';
// import {setMainRoute} from '../../redux/action/authAction';

// const Splash = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const status = useSelector(state => state.route);

//   console.log('Redux Status:', status);

//   // Proper async handling inside useEffect
//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const userStatus = await getData(async_key.status);
//         console.log('User Status from AsyncStorage:', userStatus);
//       } catch (error) {
//         console.error('Error fetching user status:', error);
//       }
//     };

//     fetchStatus();
//   }, []);

//   // Timeout with cleanup
// useEffect(() => {
//   const timer = setTimeout(() => {
//     dispatch(setMainRoute({mainRoute: navigationStrings.routes.logout}));
//   }, 2000);

//   // Cleanup to avoid memory leaks
//   return () => clearTimeout(timer);
// }, [dispatch]);

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 20}}>Splash</Text>
//     </View>
//   );
// };

// export default Splash;
