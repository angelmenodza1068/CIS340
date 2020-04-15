import React,{useState} from 'react';
import { Text,Image, Button} from 'react-native';

 function TV(props) {
         const[isOff,setIsOff] = UseState(true);
    return (
         <View> 
             {"\n\n\n\n"}
             <Text>
                This is {props.name} TV, and its {isOff ? "Off": "Trun Me on"}

            
             </Text>
             <Button 
             onPress={() => {
               setIsOff(flase);
             }}
                disabled={!isoff}
                title= {isoff ? "Turn Me On Please!" : "Thank You!"}
                />
         </View>
    );
}
export default function MultiTVs(){
  return(
 <View>
    
    <TV name ="Angel Mendoza" />
    <TV name = "Bob Smith " />
    
  
  </View>
  );
  }