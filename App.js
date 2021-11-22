/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginPage from './src/screens/pages/Login';
import VerifyOTP from './src/screens/pages/Verifiactionpage';
// import ProductsList from './src/screens/pages/ProductsList'; 
// import CalendarItem from './src/screens/pages/Calendar';
// import { NavigationContainer } from '@react-navigation/native';
// import Tabs from './navigation/tabs';

 

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <SafeAreaView style={
        {
          flex: 1,
          backgroundColor: 'white'
        }
      }>
       <View>
          <LoginPage title="Get" />
          {/* <VerifyOTP /> */}
       </View>
      </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'limeblue',
    flex: 1,
    flexDirection: 'column',
  }
});

export default App;
