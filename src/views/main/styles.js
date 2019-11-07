import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 5,
    },
    inputContainer:{
        paddingTop: 10,
        flexDirection: 'row',
        paddingBottom: 10
    },
    input: {
        backgroundColor: '#fff',
        paddingVertical:10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
        borderRadius: 4,
        flex: 1
    },
    button: {
        justifyContent: 'center',
        marginLeft: 10,
        backgroundColor: 'rgba(34, 147, 199, 0.8)',
        paddingVertical:10,
        paddingHorizontal: 12,
        alignItems: 'center',
        borderRadius: 4
    },
    text: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 20,
    },
    list: {
        marginTop: 20,
    }
})