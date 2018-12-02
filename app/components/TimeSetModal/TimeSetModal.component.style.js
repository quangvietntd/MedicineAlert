import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme.style';

var screen = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        borderRadius: 10,
        shadowRadius: 10,
        width: screen.width - 80,
        height: 280
    },
    title: {
        fontSize: theme.FONT_SIZE_LARGE,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
});

export default styles;