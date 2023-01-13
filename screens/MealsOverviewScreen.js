import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
    const { categoryId } = route.params;

    const mealsRenderList = MEALS.filter((meal) =>
        meal.categoryIds.includes(categoryId)
    );

    const renderMealItem = (itemData) => {
        return <MealItem mealData={itemData.item} />;
    };

    return (
        <FlatList
            data={mealsRenderList}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
    );
};

const styles = StyleSheet.create({});

export default MealsOverviewScreen;
