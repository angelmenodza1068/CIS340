import React from 'react';
import { Text, TextInput, View } from 'react-native';
 
 function MyApp() {

 

  
  return (
    <View>
      <Text>
       {"\n\n\n\n\n\n"}
        hello, iam a studen in cis340!
        </Text>
         </View>
  );
}

export default function MultiComp(){
  retrun(
<View> style = {{flex:1,
justifyContent: 'Center',
alignItems: 'center'
}}>

 <Text>  Welcome to My Class  </Text>
 <MyApp /> 
 <MyApp /> 
 <MyApp /> 
 <MyApp /> 


</View>
  )
  

}

