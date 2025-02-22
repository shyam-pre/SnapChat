// import {View, Text} from 'react-native';
// import React from 'react';
// import {useHomeDataQuery} from '../../src/redux/AllApi/AllApi';

// const HomeScreen = () => {
//   const {data} = useHomeDataQuery();
//   console.log('eeeeeeeee', data);

//   return (
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//   );
// };

// export default HomeScreen;

import {View, Text} from 'react-native';
import React from 'react';
import {useHomeDataQuery} from '../redux/ApiSlice/AllApiSlice';

const HomeScreen = () => {
  const {data, error, isLoading} = useHomeDataQuery();
  console.log('dataaaaaaaaa', data);
  console.log('errrrrrrrrrrrr', error);
  console.log('sssssssssislofing', isLoading);

  // this login data
  let logindata = {
    email: 'shyampremad@gmail.com',
    password: '123456',
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      {/* <Text>{JSON.stringify(data, null, 2)}</Text> */}
    </View>
  );
};

export default HomeScreen;
