import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopTab from './TopTab';
import ArtistScreen from '../screens/ArtistScreen';
import MusicPlayerScreen from '../screens/MusicPlayerScreen';
import PlaylistScreen from '../screens/PlaylistScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TopTab" component={TopTab} options={{ presentation: 'modal'}}/>
      <Stack.Screen name="ArtistScreen" component={ArtistScreen} options={{ presentation: 'modal'}}/>
      <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen} options={{ presentation: 'modal'}}/>
      <Stack.Screen name="PlaylistScreen" component={PlaylistScreen} options={{ presentation: 'transparentModal'}}/>
    </Stack.Navigator>
  )
}

export { HomeStack }