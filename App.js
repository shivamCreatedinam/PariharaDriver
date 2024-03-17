/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import NavigationApp from './apps/navigation/'


const App = () => {

  return (
    <View style={styles?.backgroundStyle}>
      <StatusBar
        backgroundColor={"#fff"}
        barStyle={"dark-content"}
      />
      <NavigationApp />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundStyle: {
    flex: 1,
    backgroundColor:'red'
  }
});

export default App;
