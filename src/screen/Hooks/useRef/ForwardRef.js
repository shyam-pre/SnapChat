// import React, {forwardRef, useImperativeHandle, useRef} from 'react';
// import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

// // child component
// const CustomInput = forwardRef((props, ref) => {
//   const inputRef = useRef();

//   // Expose methods to payment via ref
//   useImperativeHandle(ref, () => ({
//     focus: () => {
//       inputRef.current.focus();
//     },

//     clear: () => {
//       inputRef.current.clear();
//     },
//   }));
//   return (
//     <View>
//       <TextInput
//         placeholder="Type here..."
//         ref={inputRef}
//         style={styles.inputSty}
//       />
//     </View>
//   );
// });

// const ForwardRef = () => {
//   const CustomInputRef = useRef();
//   return (
//     <View>
//       <Text>ForwardRef</Text>
//       <CustomInput ref={CustomInputRef} />

//       <Button
//         title="Focus Input"
//         onPress={() => CustomInputRef.current.focus()}
//       />

//       <View style={{marginTop: 10}}>
//         <Button
//           title="Clear Input"
//           onPress={() => CustomInputRef.current.clear()}
//         />
//       </View>
//     </View>
//   );
// };

// export default ForwardRef;

// const styles = StyleSheet.create({
//   inputSty: {
//     borderWidth: 1,
//     borderColor: '#000',
//   },
// });

import {View, Text, Button, TextInput} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';

// child component
const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },

    clear: () => {
      inputRef.current.clear();
    },
  }));
  return (
    <View>
      <TextInput placeholder="Type here..." ref={inputRef} />
    </View>
  );
});

// parent component
const ForwardRef = () => {
  const customInputRef = useRef();
  return (
    <View>
      <Text>ForwardRef</Text>
      <ChildComponent ref={customInputRef} />
      <Button
        title="Focus Input"
        onPress={() => customInputRef.current.focus()}
      />

      <View style={{marginTop: 20}}>
        <Button
          title="Focus Input"
          onPress={() => customInputRef.current.clear()}
        />
      </View>
    </View>
  );
};

export default ForwardRef;
