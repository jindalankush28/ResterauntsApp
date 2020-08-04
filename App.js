import { createStackNavigator } from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen.js'
import ResultsShowScreen from './src/screens/ResultsShowScreen.js';
const navigator =createStackNavigator({
  SearchScreen: SearchScreen,
  ResultsShowScreen: ResultsShowScreen
},{
    initialRouteName:"SearchScreen",
    defaultNavigationOptions:{
    title:"Search"}
  
});

export default createAppContainer(navigator);