import React from 'react';
import { Text,TextInput, View } from 'react-native';

 function Student(props) {
  return (
   <View>
      <Text>Hey, My Name is {props.nmae}, I am student in Cis 340 </Text>
    </View>
  );
}

export default function Multicomp(){
return(
<View style ={{
  flex: 1, 
  juustifyContent:'center',
  alignItems: 'center'
}}>
  <text>Welcome to CIS340</text>
  <Student name ="Angel Mendoza" />
  <Student name = "Bob Smith " />
  <Student name = "james Gon" />
  <Student name = "jon Clark" />

</View>
);
}