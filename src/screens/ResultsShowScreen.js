import React, { useState,useEffect } from 'react';

import { View, Text, StyleSheet, FlatList ,Image} from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen=({navigation})=>{
    const [results,setResults]=useState(null);
    const [errorMessage,setErrorMessage]=useState('');
    const id = navigation.getParam('id');
    const getResult=async(id)=>{
        try{
            const response = await yelp.get(`/${id}`);
            setResults(response.data);
    } catch(err){
        setErrorMessage('something went wrong');
    }
    };


    useEffect(()=>{
        getResult(id);
    },[])
    if (!results){
        return null;
    }
    return (
        <View>
            <Text>{results.name}</Text>
            <FlatList
            data={results.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image style={styles.imgsyle} source={{uri:item}}/>
            }}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    imgsyle: {
        height:100,
        width:100
    }
});

export default ResultsShowScreen;