import React from 'react';
import { Text, Image, ScrollView} from 'react-native';
import { isConfigurationAvailable } from 'expo/build/AR';

const dog = { 
  uri: 'https:/raw.githubsercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
  width: 64,
  height: 64
  };
 
export default myScrollViewApp = () => (

  <ScrollView style={{Pading: 40}}>
   <Text style ={{fontSize: 80}}>Try to scroll down</Text>
    <Image source={require('./assets/icon.png')} style={{width: 64, height: 64}}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style ={{fontSize: 80}}>Try to scroll down</Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style ={{fontSize: 80}}>Try to scroll down</Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style ={{fontSize: 80}}>Try to scroll down</Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Text style ={{fontSize: 80}}>React Native Components</Text>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
    <Image source={dog}/>
  </ScrollView>
  );


