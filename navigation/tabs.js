import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../src/screens/HomePage';
import ProductsScreen from '../src/screens/ProductsScreen';
import ReferScreen from '../src/screens/ReferScreen';
import MenuScreen from '../src/screens/MenuScreen';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

const CustomTabBarButton  = ({children, onPress}) => (
    <TouchableOpacity
      style={{
          top: -30,
          justifyContent: 'center',
          alignItems: 'center',
            ...styles.shadow
        }}
      onPress={onPress}
    >
        <View>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return(
        <Tab.Navigator 
         screenOptions={({route}) => ({
             tabBarIcon: ({ focused, color, size}) => {
                 let iconName;
                 let rn =  route.name;
                 if(rn === 'Home') {
                   iconName = focused ? 'home' : 'home-outline';
                 }else if (rn === 'Products') {
                    iconName = focused ? 'sc-telegram' : 'home-outline';
                 }else if (rn === 'Refers') {
                    iconName = focused ? 'sc-telegram' : 'home-outline';
                 }else if (rn === 'Menu') {
                    iconName = focused ? 'home' : 'home-outline';
                 }

                 return <Ionicons name={iconName} size={size} color={color} />
             },
            tabBarStyle:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
            }
         })}
         
        >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Products" component={ProductsScreen} />
            <Tab.Screen name="Refer & Earns" component={ReferScreen} />
            <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create ({
  shadowColor: '#7F5DF0',
  shadowOffset: {
      width: 0,
      height: 10
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  elevation: 5 
});

export default Tabs;