import React from 'react';
import { View, Text, StyleSheet, FlatList ,TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails'
import {withNavigation} from 'react-navigation'
const ResultsList = ({ title, results,navigation }) => {
    if (!results.length){
        return null;
    }    
    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                    <TouchableOpacity onPress={() =>navigation.navigate('ResultsShowScreen',{id: item.id})}>
                        <ResultsDetails result={item}/>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    container:{
        marginBottom:10
    }
});

export default withNavigation(ResultsList);