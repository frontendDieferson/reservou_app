import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogo: {
        marginTop: 22
    },

    containerLabel: {
    
     fontSize: 16,
     right: 120,
     fontWeight: 400,
     color: '#666666',
     marginBottom: 10,
    },
    containerTextInput: {
        width: 328,
        height: 48,
        borderWidth:  1,
        borderColor: '#666666',
        borderRadius: 8,
        padding: 16,
        marginBottom: 22,
    },
    buttonLogin: {
        width: 328,
        height: 48,
        backgroundColor: '#E1B12C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,

        marginTop: 40,

    },
    buttonText: {
        color: '#FFF'
    },
    buttonCreate: {
        width: 328,
        height: 48,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#666666',
        borderWidth:  1,
        borderRadius: 8,

        marginTop: 16,

    },
    buttonTextCreate: {
        color: '#666666'
    }, 
    content: {

    }
    
})


export default styles