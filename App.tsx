import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { RoomScreen } from './src/screens/RoomScreen';
import { MovieHubContextProvider } from './src/contexts/MovieHubContext';

export type RootStackParamList = {
  Home: undefined
  Room: { roomId: string }
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <MovieHubContextProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name='Home' component={HomeScreen} />
          <RootStack.Screen name='Room' component={RoomScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </MovieHubContextProvider>
  );
}
