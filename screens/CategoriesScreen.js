import { View, StyleSheet, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const renderCategoryItem = (itemData) => {
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            categoryId={itemData.item.id}
        />
    );
};

const CategoriesScreen = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
