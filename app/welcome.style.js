import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 16,
        justifyContent: 'center',
    },
    card: {
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    newsCard: {
        backgroundColor: '#ffebee', // Light red for News card
        borderLeftWidth: 5,
        borderLeftColor: '#e53935', // Deep red accent
    },
    stocksCard: {
        backgroundColor: '#e8f5e9', // Light green for Stocks card
        borderLeftWidth: 5,
        borderLeftColor: '#43a047', // Deep green accent
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    cardContent: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
});

export default styles;