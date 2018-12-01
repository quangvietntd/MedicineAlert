import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Medicine.component.style';

export default class Medicine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            note: null,
            note2: null,
            visible: false,
            visible2: false,
        };
    }

    onPressButton() {
        if(this.state.visible){
            this.setState({
                visible2: true
            });
        }
        this.setState({
            visible: true,
        });
       
    }

    render() {
        const { input, button, buttonLabel, label, buttonGray } = styles;
        const NoteView = (
            <View>
                <Text style={label}>Ghi chú</Text>
                <TextInput
                    style={input}
                    onChangeText={(text) => this.setState({ note: text })}
                    value={this.state.note}
                />
            </View>
        );
        const NoteView2 = (
            <View>
                <Text style={label}>Ghi chú 2</Text>
                <TextInput
                    style={input}
                    onChangeText={(text) => this.setState({ note2: text })}
                    value={this.state.note2}
                />
            </View>
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
                <TouchableOpacity disabled={true} onPress={() => this.onPressButton() }>
                    <View style={buttonGray}>
                        <Text style={buttonLabel}>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
        return (
            <View>
                <Text style={label}>Tên thuốc:</Text>
                <TextInput
                    style={input}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />
                {this.state.visible ? NoteView : null}
                {this.state.visible2 ? NoteView2 : null}
                {this.state.name ? buttonEnable : buttonDisable }
                

            </View>
        );
    }
}
