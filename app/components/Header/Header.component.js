import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Header.component.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { wrapper, title } = styles;
        return (
            <View style={wrapper}>
                <View style={{ width: 1 }}></View>
                <Text style={title}> Danh sách thuốc </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Medicine')}>
                    <Icon name="add" color='#ffffff' size={40} />
                </TouchableOpacity>

            </View>
        );
    }
}
