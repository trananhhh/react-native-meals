import { View, StyleSheet, Text, Pressable, Platform } from 'react-native';

const CategoryGridTile = ({ title, color }) => {
    return (
        <View style={[styles.gridItem]}>
            <Pressable
                android_ripple={{ color: '#333333' }}
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: color },
                    pressed ? styles.buttonPressed : null,
                ]}
            >
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 12,
        height: 150,
        elevation: 4,
        borderRadius: 8,
        backgroundColor: 'white',
        // justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.75,
    },
    button: {
        flex: 1,
        // },
        // innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
});

export default CategoryGridTile;
