import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Home from './screens/HomeScreen';
import Themes from './screens/ThemesScreen';
import Levels from './screens/LevelsScreen';
import Question from './screens/QuestionScreen';
import Rules from './screens/RulesScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Syne': require('./assets/fonts/Syne-Bold.ttf'),
    'Jost': require('./assets/fonts/Jost-Light.ttf'),
    'Jost-Bold': require('./assets/fonts/Jost-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "black"}, headerTitleStyle: { color: "black" }, headerBackVisible: false }}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="ThemesScreen" component={Themes} />
        <Stack.Screen name="LevelsScreen" component={Levels} />
        <Stack.Screen name="QuestionScreen" component={Question} />
        <Stack.Screen name="RulesScreen" component={Rules} />
      </Stack.Navigator>
       <StatusBar style="auto" />
    </NavigationContainer>
  );
}
