import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

const styles = StyleSheet.create({
    input: {
        borderColor: theme.PRIMARY_COLOR,
        borderBottomWidth: 1,
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
       alignItems: 'center',
        width: 100,
        marginRight: 20,
        marginTop: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor: theme.PRIMARY_COLOR
    },
    buttonGray: {
        alignItems: 'center',
         width: 100,
         marginRight: 20,
         marginTop: 10,
         padding: 10,
         borderRadius: 4,
         backgroundColor: 'lightgray'
     },
    buttonLabel: {
        color: theme.TEXT_ON_PRIMARY_COLOR,
        fontSize: 20,
    },
   
    label: {
        fontSize: 20,
        marginHorizontal: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#f4f7f9',
        paddingTop: 30,
    },
});

export default styles;