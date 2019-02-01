import React, { Component } from 'react';
import { Text, View } from 'react-native';

const styles = {
    viewStyle: {
        backgroundColor: 'salmon',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
};

class Header extends Component {

    render() {
        const { textStyle, viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}> {this.props.headerText} </Text>
            </View>
        ); 
    }
}

export { Header };
