import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import {Ionicons} from  '@expo/vector-icons'
import {connect} from 'react-redux';



class AddTodo extends Component {
    state= {
        text: '',

    }
    addTodo = (text)=> {
        this.props.dispatch({ type: 'ADD_TODO', text});
        this.setState({text: ''});
    }

    render() {
        return (
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                <TextInput 
                onChangeText={(text)=> this.setState({ text})}
                value={this.state.text}
                placeholder="hello"
                style={{borderWidth: 1, borderColor: '#000', height: 50, flex: 1, padding: 10}}>
                </TextInput>
                <TouchableOpacity onPress={()=> this.addTodo(this.state.text)}>
                    <View style={{height: 50, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center'}}>
                        <Ionicons name="md-add" size={30} style={{color:'red', padding: 10}}>
                        </Ionicons>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
});