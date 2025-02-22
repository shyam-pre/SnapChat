import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// React.memo
// const ChildComponent = React.memo(({name}) => {
//   console.log('LLLLLLLLLLmmmmm', name);
//   return (
//     <View>
//       <Text>{name}</Text>
//     </View>
//   );
// });

const ChildComponent = React.memo(({onIncrement}) => {
  console.log('LLLLLL use callback child componet ');
  return (
    <View style={{marginTop: 10}}>
      <Button title="increment count" onPress={onIncrement} />;
    </View>
  );
});

const AllHooks = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  // const focusInput = () => {
  //   inputRef.current?.focus();
  // };
  const handleInputFocus = () => {
    return inputRef.current.focus();
  };
  // useMemo
  // const expensionValue = useMemo(() => {
  //   console.log('Calculating...');
  //   let total = 0;
  //   for (let i = 0; i <= 10; i++) {
  //     total += i;
  //   }
  //   return total;
  // }, [count]);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [count]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>AllHooks</Text>
      {/* <Text>{expensionValue}</Text> */}
      <Text>{`count :  ${count}`}</Text>
      <Text>{`input : ${input}`}</Text>
      <Button title="Increase Count" onPress={() => setCount(pre => pre + 1)} />
      <Button
        title="Increase Count"
        onPress={() => setInput(pre => pre + '!')}
      />

      {/* <ChildComponent name="childComponent" /> */}
      <ChildComponent onIncrement={handleIncrement} />

      <TextInput placeholder="enter number" ref={inputRef} />
      <Button title="InputFocus" onPress={handleInputFocus} />
    </SafeAreaView>
  );
};

export default AllHooks;
const styles = StyleSheet.create({
  inputCountBox: {
    marginTop: 1000,
  },
});
