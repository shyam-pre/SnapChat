import {formToJSON} from 'axios';
import React, {useRef} from 'react';
import {View, ScrollView, Button, Text, StyleSheet} from 'react-native';
import navigationStrings from '../../../component/Constants/navigationStrings';

const ChatExample = ({navigation}) => {
  const scrollViewRef = useRef(null);

  const messages = Array.from({length: 20}, (_, i) => `Message ${i + 1}`);

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <Text key={index} style={styles.message}>
            {msg}
          </Text>
        ))}
      </ScrollView>
      <Button title="Scroll to Bottom" onPress={scrollToBottom} />

      <Text
        onPress={() => navigation.navigate(navigationStrings.FadeInExample)}>
        Nexr FadeInExample
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    marginVertical: 20,
  },
  message: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default ChatExample;
