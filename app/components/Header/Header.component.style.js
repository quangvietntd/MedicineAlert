import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

const styles = StyleSheet.create({
    wrapper: {
       
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor: theme.PRIMARY_COLOR,
       justifyContent: 'space-between',
    },
    title: {
        fontSize: theme.FONT_SIZE_LARGE,
        color: theme.TEXT_ON_PRIMARY_COLOR,
    }
});

export default styles;
