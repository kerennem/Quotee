import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Avatar } from 'react-native-elements';



export default function App() {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'Quotee', style: { color: '#fff' } }}
        rightComponent={{ icon: 'settings-applications', color: '#fff' }}
      />
      <Avatar
        rounded
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
