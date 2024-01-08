import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


import Beyone from '../assets/image/beyone.png'

const portofilio = () => {
  return (
	<View>
		<Text style={styles.latest}>Lates Project</Text>
	  <View style={styles.porto}>
		<Image source={Beyone} style={styles.porto2}/>
		<Text style={styles.beyone}>Beyone chip</Text>
		<Text style={styles.des}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
	  </View>
	</View>
  )
}

export default portofilio

const styles = StyleSheet.create({

	porto:{
		width: 300,
        height: 300,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: 30,
		marginTop:50, 
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 3
	},


	latest: {
		marginLeft: 35, 
		marginTop: 80,
		fontWeight: 'bold'
	}, 

	porto2:{
		resizeMode: 'stretch',
		width: 300, 
		height: 150,
		borderRadius: 10
		
	}, 

	beyone: {
		marginTop:10, 
		fontSize: 18,
		fontWeight: 'bold'

	}, 

	des: {
		textAlign: 'center',
	}


})