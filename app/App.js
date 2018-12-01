import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './components/Home/Home.component';
import Medicine from './components/Medicine/Medicine.component';

const routeConfig = {
    Home: {
        screen: Home,
    },
    Medicine: {
        screen: Medicine,
    }
};
const stackConfig = {
    headerMode: 'none',
    initialRouteName: 'Home'
}
const AppNavigator = createStackNavigator( routeConfig, stackConfig );
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
    render() {
        return ( 
            <AppContainer />
        );
    }
}


