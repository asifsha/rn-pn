import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebaseconfig from "./firebase.config";

export default function App() {
  console.log(firebaseconfig)
  return (
    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
