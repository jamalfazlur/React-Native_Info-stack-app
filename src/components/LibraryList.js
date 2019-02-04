import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    
    // componentWillMount() {
    //     const ds = new ListView.DataSource({
    //         rowHasChanged : (r1, r2) => r1 !== r2
    //     });
    //     this.dataSource = ds.cloneWithRows(this.props.libraries);
    // }

    renderRow = ({item}) => {
        //return <Text>{item.title}</Text>
        return <ListItem library={item} />

    }

    render() {
        return(
             // <ListView dataSource={this.dataSource} renderRow={this.renderRow}/>
             <FlatList 
                data = {this.props.libraries}
                renderItem = {this.renderRow}
             />
        );
    }
}

const mapStateToProps = (state) => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList);