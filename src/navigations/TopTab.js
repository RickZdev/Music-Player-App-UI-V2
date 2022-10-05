import React from 'react'
import { Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { H5 } from '../components/CustomHeading';
import COLORS from '../global/COLORS'
import FONTS from '../global/FONTS'
import HomeTab from '../screens/HomeTab';
import ProfileTab from '../screens/ProfileTab';
import RadioTab from '../screens/RadioTab';
import SearchTab from '../screens/SearchTab';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        initialLayout={Dimensions.get('window').width}
        screenOptions={{
          tabBarStyle: { backgroundColor: COLORS.background, display: 'flex', marginHorizontal: 19, borderRadius: 18, position: 'relative', top: 19 },
          tabBarLabelStyle: { fontFamily: FONTS.OpenSansBold, fontSize: 14, lineHeight: 21, color: COLORS.white, textTransform: 'none' },
          tabBarIndicatorStyle: { backgroundColor: COLORS.foreground, height: '100%', borderRadius: 18 },
          swipeEnabled: false,
          lazy: true,
          tabBarPressOpacity: 1,
          tabBarPressColor: COLORS.foreground,
        }}
        
      >
        <Tab.Screen name='HomeTab' component={HomeTab}
          options={{
            tabBarLabel: ({ focused }) => <H5 customStyle={`${focused ? 'text-primary' : 'text-white'}`}> Home </H5>,
          }} />
        <Tab.Screen name='SearchTab' component={SearchTab}
          options={{
            tabBarLabel: ({ focused }) => <H5 customStyle={`${focused ? 'text-primary' : 'text-white'}`}> Search </H5>,
          }} />
        <Tab.Screen name='RadioTab' component={RadioTab}
          options={{
            tabBarLabel: ({ focused }) => <H5 customStyle={`${focused ? 'text-primary' : 'text-white'}`}> Radio </H5>,
          }} />
        <Tab.Screen name='ProfileTab' component={ProfileTab}
          options={{
            tabBarLabel: ({ focused }) => <H5 customStyle={`${focused ? 'text-primary' : 'text-white'}`}> Profile </H5>,
          }} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default TopTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})