import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/pages/Home.js';
import RegisterScreen from './src/pages/Register.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          title: 'Página Inicial',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#122C34'
          },
          headerTintColor: '#fff',
        }}  />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{
          title: 'Página de Registro',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#122C34'
          },
          headerTintColor: '#fff',
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;