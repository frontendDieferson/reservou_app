import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        margin: 0,
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: 10,
        width: '100%',
        height: 140,
        backgroundColor: '#E1B12C',

        
    },
    location: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222D5B',
        right: 130,
        margin: 20,

    },
    locationBtn: {
        backgroundColor: '#E1B12C',
        width: 134,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        borderRadius: 10
    }, 
    locationBtnText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500',

    },
    contentsubTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222D5B',
        right: 60,
        
    },

    services: {
        width: '100%',
        padding: 20,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        },
        explore: {
            fontSize: 18,
            fontWeight: '600',
            color: '#222D5B',
            right: 150,
            margin: 20,
        },
})

export default styles