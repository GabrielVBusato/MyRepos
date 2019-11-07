import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 10,
        marginBottom: 8,
    },
    name: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        borderBottomWidth: 1
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        marginVertical: 10,
        fontSize: 14,
        color: 'rgba(118, 133, 140, 0.9)'
    }
})