import React from 'react';
import {  Text} from 'react-native';



export default function App() {

  function getFullName(fname,mname,lname){
    return fname +" " + mname + " "+  lname;
  }

  const per ="dog";
  return (
    
      <Text>
       {"\n\n\n\n\n\n"}
        hello, iam a studen in cis#40! {"\n"}
        My full name is {getFullName("angel","toress", "mendoza")}{"\n"}
        i have a {Pet}! 
        </Text>
            
  );
}


