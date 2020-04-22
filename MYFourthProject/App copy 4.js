import React from 'react';
import { Text, View, FlatList} from 'react-native';



 
export default statesApp  = () => {
   return (
<View Style={{flex: 1, paddingTop:22}}>
<FlatList 
data={[
{key: 'Alabama'},
{key: 'Alaska'},
{key: 'Arizona'},
{key: 'Arkansas'},
{key: "califonia"},
{key:'Colorado'},
{key: 'Delaware'},
{key: 'Folrida'}

]}
returnIteam={({item}) => <Text style={{padding: 10, fontSize:20, height: 44 }}> {item.key} </Text> }
/>
</View>
   ); // end of return
  }


