import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import code1 from './code/code1';
import code2 from './code/code2';
import code3 from './code/code3';
import code4 from './code/code4';

export default function App() {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="code1" component={code1} />
        <Stack.Screen name="code2" component={code2} />
        <Stack.Screen name="code3" component={code3} />
        <Stack.Screen name="code4" component={code4} />
      </Stack.Navigator>
      <View>
        
      </View>
    </NavigationContainer>
  );
}


