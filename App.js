import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar style="light"></StatusBar>
            <MealsOverviewScreen />
        </SafeAreaView>
    );
}
