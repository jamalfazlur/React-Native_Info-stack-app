import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'salmon',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        // width: '70%',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'salmon',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }        
};

class Button extends Component {
    
    render() {
        const { buttonStyle, textStyle } = styles;
        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.onPress} >
                <Text style={textStyle}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

export { Button };
