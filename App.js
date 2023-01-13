import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import CategoryGridTile from './components/CategoryGridTile';
import MealItem from './components/MealItem';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"></StatusBar>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Categories"
                        component={CategoriesScreen}
                    />
                    <Stack.Screen
                        name="MealsOverviewScreen"
                        component={MealsOverviewScreen}
                    />
                    <Stack.Screen name="MealItem" component={MealItem} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
