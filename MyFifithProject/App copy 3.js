import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View style= {{flex: 1}}>
       <View Style={{flex: 1, height:40, backroundColor: 'red'}}  />
      <View Style={{flex: 1, height:100, backroundColor: 'yellow'}}> </View>
      <View style={{ flex: 1, height:100, backroundColor: 'blue'}}/>


</View>
  );
}


