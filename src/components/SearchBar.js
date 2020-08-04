import React from 'react';
import { Text, View,TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = (props) => {
    return (
    <View style={styles.Barstyle}>
        <Feather style={styles.Featherstyle} size={30} name="search"/>
        <TextInput 
        style={styles.Inputstyle}
        placeholder="Search"
        value={props.term}
        onChangeText={props.onTermChange}
        onEndEditing={props.onTermSubmit}
        autoCapitalize="none"
        autoCorrect={false}
        />
    </View>)
};

const styles = StyleSheet.create({
    Barstyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 15,
        top:10,
        marginHorizontal:15,
        flexDirection: 'row',
        bottom:10
    },
    Inputstyle:{
        alignSelf: 'center',
        fontSize:20,
        
        flex:1,
        marginHorizontal:8

    },
    Featherstyle:{
        alignSelf: 'center',
        marginHorizontal:15
    }
});
export default SearchBar;