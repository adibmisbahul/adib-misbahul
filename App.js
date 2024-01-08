import {StyleSheet, Text, View, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  HomePage from "./page/home"
import RegisterPage from "./page/register"
import LoginPage from "./page/login"

const Stack = createStackNavigator();

const App = () => {
    return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
	
    );
}

export default App


