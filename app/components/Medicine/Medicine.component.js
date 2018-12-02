import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Picker } from 'react-native';
import styles from './Medicine.component.style';
import Panel from '../Panel/Panel.component';
import TimeSetModal from '../TimeSetModal/TimeSetModal.component';

export default class Medicine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            time: '1',
            schedule: null,
            visible: false,
            visible2: false,
        };
    }

    onPressButton() {
        if (this.state.visible) {
            this.setState({
                visible2: true
            });
        }
        this.setState({
            visible: true,
        });

    }

    onPressTimeSet() {
        //show edit modal here!
        this.refs.myTimeSetModal.showTimeSetModal();
    }

    render() {
        const { input, button, buttonLabel, buttonGray, container } = styles;
        const picker = (
            <Picker
                selectedValue={this.state.time}
                style={{ flex: 1 }}
                mode='dropdown'
                onValueChange={(itemValue, itemIndex) => this.setState({ time: itemValue })}>
                <Picker.Item label='1 lần/ngày' value='1' />
                <Picker.Item label='2 lần/ngày' value='2' />
                <Picker.Item label='3 lần/ngày' value='3' />
                <Picker.Item label='4 lần/ngày' value='4' />
                <Picker.Item label='5 lần/ngày' value='5' />
                <Picker.Item label='----------' value='one' />
                <Picker.Item label='mỗi 1 giờ' value='one' />
                <Picker.Item label='mỗi 2 giờ' value='two' />
                <Picker.Item label='mỗi 3 giờ' value='three' />
                <Picker.Item label='mỗi 4 giờ' value='four' />
                <Picker.Item label='mỗi 5 giờ' value='five' />
                <Picker.Item label='mỗi 6 giờ' value='six' />
                <Picker.Item label='mỗi 7 giờ' value='seven' />
                <Picker.Item label='mỗi 8 giờ' value='eight' />
                <Picker.Item label='mỗi 9 giờ' value='nine' />
                <Picker.Item label='mỗi 10 giờ' value='ten' />
                <Picker.Item label='mỗi 11 giờ' value='eleven' />
                <Picker.Item label='mỗi 12 giờ' value='twelve' />
                <Picker.Item label='----------' value='6' />
                <Picker.Item label='6 lần/ngày' value='6' />
                <Picker.Item label='7 lần/ngày' value='7' />
                <Picker.Item label='8 lần/ngày' value='8' />
                <Picker.Item label='9 lần/ngày' value='9' />
                <Picker.Item label='10 lần/ngày' value='10' />
                <Picker.Item label='11 lần/ngày' value='11' />
                <Picker.Item label='12 lần/ngày' value='12' />
            </Picker>
        );
        const NoteView = (
            <Panel title='Thời gian'>
                {picker}
                <TouchableOpacity onPress={() => this.onPressTimeSet()}>
                    <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, alignItems: "center" }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ fontSize: 20 }}>9:00 SA</Text>
                            <Text style={{ fontSize: 10 }}>Start hour</Text>
                        </View>

                        <Text>1 viên</Text>
                    </View>
                </TouchableOpacity>
            </Panel>
        );
        const NoteView2 = (
            <Panel title='Lịch trình'>
                <TextInput
                    style={input}
                    onChangeText={(text) => this.setState({ schedule: text })}
                    value={this.state.schedule}
                />
            </Panel>
        );
        const buttonEnable = (
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => this.onPressButton()}>
                    <View style={button}>
                        <Text style={buttonLabel}>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
        const buttonDisable = (
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity disabled={true} onPress={() => this.onPressButton()}>
                    <View style={buttonGray}>
                        <Text style={buttonLabel}>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
        return (
            <ScrollView style={container}>
                <Panel title='Tên thuốc'>
                    <TextInput
                        style={input}
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name}
                    />
                </Panel>
                {this.state.visible ? NoteView : null}
                {this.state.visible2 ? NoteView2 : null}
                {this.state.name ? buttonEnable : buttonDisable}
                <TimeSetModal ref={'myTimeSetModal'}/>
            </ScrollView>



        );
    }
}
