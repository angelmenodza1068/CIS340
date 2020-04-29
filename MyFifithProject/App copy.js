import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>Just Yellow Text!</Text>
  <Text Style={styles.largGreen}> This is Big Green </Text>
  <Text Style={[styles.yellow, styles.largGreen]}> Yellow Text, then Big Green Text </Text>
  <Text Style={[styles.yellow, styles.largGreen]}> Big Green Text, then Yellow Text </Text>
    </View>
  );
}

const styles = StyleSheet.create(0)({

container: {
  marginTop: 60,
},

largGreen: {
  color: 'green',
  fontWeight: 'bold', 
  fontSize: 20, 
},

yellow: {
color: 'yellow',
fontSize: 10,
}
});
