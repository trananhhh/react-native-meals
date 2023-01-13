import { View, StyleSheet, Pressable, Image, Text } from 'react-native';

const MealItem = ({ mealData }) => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Image
                    style={styles.image}
                    source={{ uri: mealData.imageUrl }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{mealData.title}</Text>
                    <View style={styles.textDetailContainer}>
                        <Text style={styles.detailText}>
                            {mealData.duration}
                        </Text>
                        <Text style={styles.detailText}>
                            {mealData.complexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detailText}>
                            {mealData.affordability.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 12,
        backgroundColor: '#ffffff',

        borderRadius: 12,

        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    image: {
        height: 180,
        width: '100%',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    textContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    textDetailContainer: {
        flex: 1,
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    detailText: {
        fontSize: 16,
    },
});

export default MealItem;
