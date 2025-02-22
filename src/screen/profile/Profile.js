// import {View, Text} from 'react-native';
// import React from 'react';

// const Profile = () => {
//   return (
//     <View>
//       <Text>Profile</Text>
//     </View>
//   );
// };

// export default Profile;

import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import React, {useMemo, useState} from 'react';
import UseContext from '../Hooks/useRef/AppContext';
// import UseLayoutEffect from './UseLayoutEffect';
// import UseCallback from './UseCallBack';
// import ForwardRef from './ForwardRef';
// import UseContext from './UseContext';

const Profile = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // const expensionValue = useMemo(() => {
  //   console.log('Calculating...');
  //   let total = 0;
  //   for (let i = 0; i < 1e7; i++) {
  //     total += i;
  //   }
  //   return total;
  // }, [count]);

  const expensionValue = useMemo(() => {
    console.log('sadfas');
    let total = 0;
    for (let i = 0; i < 400; i++) {
      total += 1;
    }
    return total;
  }, [count]);

  // const calculateExpensiveValue = () => {
  //   console.log('Calculating...');
  //   let total = 0;
  //   for (let i = 0; i < 1e7; i++) {
  //     total += i;
  //   }
  //   return total;
  // };

  // const calculateExpensiveValue = () => {
  //   console.log('jjjjjjjjjj');
  //   let total = 0;
  //   for (let i = 0; i < 200; i++) {
  //     total += i;
  //   }
  //   return total;
  // };

  // const expensiveValue = calculateExpensiveValue();

  return (
    <SafeAreaView style={styles.container}>
      {/* <UseLayoutEffect /> */}

      {/* <Text>
        Expensive Calculation:
        {
          expensionValue
          // expensiveValue
        }
      </Text>
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
      <Button title="Update Input" onPress={() => setInput(input + '!')} /> */}
      {/* <Button title="sdla;kfj" onPress={() => setCount(input + 1)} /> */}
      {/* <Text>count: {count}</Text>
      <Text>Input: {input}</Text> */}
      <UseContext />
      {/* <UseCallback /> */}

      {/* <ForwardRef /> */}

      {/* <UseContext /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
