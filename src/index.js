'use strict';

import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ContactList from './HomeScreen/HomeScreen.js';
import Favorites from './FavoritesScreen/FavoritesScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

class NavigationDrawerStructure extends React.Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./Image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// const ContactList_StackNavigator = createStackNavigator({
  // //All the screen from the Screen will be indexed here
  // First: {
    // screen: ContactList,
    // navigationOptions: ({ navigation }) => ({
      // title: 'Contact List',
	  // headerTitleAlign: 'center',
      // headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
	// }),
  // },
// });

// const Favorites_StackNavigator = createStackNavigator({
  // //All the screen from the Favorites will be indexed here
  // Second: {
    // screen: Favorites,
    // navigationOptions: ({ navigation }) => ({
      // title: 'Favorite Contact List',
      // headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      // headerStyle: {
        // //backgroundColor: '#ababab',
      // },
      // //headerTintColor: '#fff',
    // }),
  // },
// });
function ContactList_StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactList"
        component={ContactList}
		options={({ navigation, route }) => ({
			headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

function Favorites_StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
		options={({ navigation, route }) => ({
			headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}
// const DrawerNavigator = createDrawerNavigator({
  // //Drawer Optons and indexing
  // ContactList: {
    // //Title
    // screen: ContactList_StackNavigator,
    // navigationOptions: {
      // drawerLabel: 'Contact List',
    // },
  // },
  // Favorites: {
    // //Title
    // screen: Favorites_StackNavigator,
    // navigationOptions: {
      // drawerLabel: 'Favorite Contact List',
    // },
  // },

// });

//export default createAppContainer(DrawerNavigator);
export default class App extends React.Component {
	render(){
		return(			
			  <Drawer.Navigator initialRouteName="ContactList" >
				<Drawer.Screen name="ContactList" component={ContactList_StackNavigator} />
				<Drawer.Screen name="Favorites" component={Favorites_StackNavigator} />
			  </Drawer.Navigator>
			)
		
	}
}