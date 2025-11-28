/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */





import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
};

export default App;



import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Avatar, Icon } from 'react-native-elements';


export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          <Header
            rightComponent={{ icon: 'settings-applications', color: '#fff' }}
          >
            <Icon name="book" />
            <Text style={styles.title}>Quotee</Text>
          </Header>
          <View style={{flex: 1, flexDirection: 'row'}}>
              <Avatar
                rounded
                size="large"
                source={require('./images/Naomi2.png')}
                containerStyle={{margin: 20}}
              />
              <Avatar
                rounded
                size="large"
                source={require('./images/Sophie.png')}
                containerStyle={{margin: 20}}
                onPress={() => console.log("Works!")}
              />
              <Avatar
                rounded
                size="large"
                source={require('./images/Gaby.png')}
                containerStyle={{margin: 20}}
              />
          </View>
        </View>
       </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
//    justifyContent: 'flex-start',
  },

  ///TODO whats that?
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
  // TODO how do I add style to Avatar?
});
