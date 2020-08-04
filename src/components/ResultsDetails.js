import React from 'react';
import { View, Image,Text, StyleSheet, FlatList } from 'react-native';

const ResultsDetails=({result})=>{
    return (
    <View style={styles.container}>
        <Image style={styles.imgStyles} source={{uri:result.image_url}}/>
        <Text style={styles.textStyles}>{result.name}</Text>
       <Text style={styles.textStyles}>{result.rating} stars, {result.review_count} reviews</Text>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginLeft:10
    },
    imgStyles:{
        height:150,
        width:200,
        borderRadius:5

    },
    textStyles:{
        fontSize:16,
        fontWeight:'bold'
    }
});

export default ResultsDetails;