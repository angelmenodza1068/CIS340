import React from 'react';
import { Text, View, SectionList} from 'react-native';



 
export default statesApp  = () => {
   return (
<View Style={{flex: 1, paddingTop:22}}>
<SectionList
sections={[ 
{title: 'A', data: ['Alabama','Alaska','Arizona']},
{title: 'C', data: ['California', 'Colorado', 'Connecticut']},
{title: 'D' , data: ['Delaware']}



]} // uou can contiune with more sections 
returnIteam={({item}) => <Text style={{padding: 10, fontSize:20, height: 44 }}> {item} </Text> }
renderSectionHeader={({section}) => <Text style={{paddingTop: 4, PaddingLeft: 10, 
PaddingRight: 10, PaddingBottom: 2, fonstSize: 14, fontWeight: 'bold',backgroundColor: '9FA8DA'}}>
  {section.title}
</Text>}
keyExtractor={(item,index) => index}
/>
</View>
   ); // end of return
  }


