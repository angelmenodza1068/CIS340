import React, {Component, useState} from 'react';
import { Text,TestInput, View } from 'react-native';

export default function WordConvertor() {
 
  const[text, setText]=useState('');
  return (
    <View style={{Padding: 40}}>
      <TextInput
        style={{hight: 40}}
        placeholder="Input your text here!"
        onChangeText= {text=> setText(text)}
        defaultvalue = {text}
/>
<Text style ={{ Padding: 10,fontSize: 42}}>
  {text.split(' ').map((word) => word && '*').join(' ')}
  </Text>
    </View>
  );
}

