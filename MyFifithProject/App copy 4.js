import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View style= {{flex: 1, flexDirection: 'row'}}>
       <View Style={{width: 50, height:50, backroundColor: 'red'}}  />
      <View Style={{width: 50, height:50, backroundColor: 'yellow'}}> </View>
      <View style={{width: 50, height:50, backroundColor: 'green'}}/> 


</View>
  );
}


