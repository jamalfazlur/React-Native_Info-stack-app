import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    
    renderNama = () => {
        var listNama = this.props.kataKu.map((item) => {
            return <Text>{item}</Text>
        })
        return listNama;
    }

    render() {
        return(
            <View>
                <Text>Ini Kata Percobaan: </Text>
                {this.renderNama()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { kataKu: state.nama }
}

export default connect(mapStateToProps)(LibraryList);