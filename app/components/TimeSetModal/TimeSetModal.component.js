import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import styles from './TimeSetModal.component.style';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class TimeSetModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
        };
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    showTimeSetModal = () => {
        this.setState({

        });
        this.refs.myModal.open();
    }

    render() {
        const { wrapper, title } = styles;
        return (
            <Modal
                ref={'myModal'}
                style={wrapper}
                position='center'
                coverScreen={true}
                backdrop={true}
                onClosed={() => {
                }}
            >
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text>Show DatePicker</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={true}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode='time'
                    datePickerModeAndroid='spinner'
                    is24Hour={false}
                />
            </Modal>
        );
    }
}
