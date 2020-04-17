'use strict';

import React from 'react';
import { StyleSheet, View, Text, FlatList, Alert,
		ActivityIndicator, TouchableOpacity } from 'react-native';

import CustomRow from '../HomeScreen/CustomRow';

export default class FavoritesScreen extends React.Component {
	constructor(props) {
	 super(props);
	 this.state = {		 
	   loading: false,
	   dataSource:[],	   
	  };
	}
	
	componentDidMount(){
		
	}
	
	
	
	componentWillUnmount() {

	}
	
  render() {

	const { dataSource} = this.state;
	if(this.state.loading){
		return( 
		<View style={styles.loader}> 
	
		<ActivityIndicator size="large" color="#0c9"/>
		</View>
	)} else	if(this.state.dataSource == null || this.state.dataSource.length <=0){
		return( 
			<View style={styles.loader}> 
				
				<Text style={styles.message}> No Contacts Available, Please create contact from below + button</Text>
			
			</View>)
	} else {		
		return (
		  <View style={styles.MainContainer}>
		   
			 <FlatList
				data={this.state.dataSource}
				
				 renderItem={({ item }) => <CustomRow
						name={item.name}
						mobNumber={item.mobNumber}
						photo={item.photo}
						isFavorite={item.isFavorite}
						item = {item}
						navigation={this.props.navigation}
					 />}
				
				keyExtractor={item => item.id}
			  />					
		
			
		  </View>
		);
	}
  }
 
	
  FlatListItemSeparator = () => {
		return (
		  <View style={{
			 height: 1,
			 width:"100%",
			 backgroundColor:"rgba(0,0,0,0.5)",
			}}
			/>
		);
	}
	
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
	marginTop:5,
	marginBottom:5,
	
   },
  titleC:{	  
	  color:'#444',
	  fontSize:23,
  },
  message:{
	  textAlign:'center',
	  paddingTop:50,
	  //backgroundColor:'#123',
		
	  flex:1,
	  color:'#444',
	  fontSize:18,
  },
  loader:{
	paddingLeft:16,
	paddingRight:16,
	flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#fff"
  },
});
