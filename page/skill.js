import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

import Angularicon from '../assets/image/angular.png';
import Tailwindicon from '../assets/image/tailwind.png'; 
import Typeicon from '../assets/image/typescript.png'; 
import Solid from '../assets/image/solid.png';
import Figma from '../assets/image/figma.png'; 
import Rust from '../assets/image/rust.jpeg'

const skill = () => {

	const skils = [
		{nama: "Angular", image:(Angularicon), deskrip:" adebbefb"},
		{nama: "Tailwind", image:(Tailwindicon), deskrip:" adebbefb"},
		{nama: "Typescript", image:(Typeicon), deskrip:" adebbefb"},
		{nama: "Solid.js", image:(Solid), deskrip:" adebbefb"},
		{nama: "Figma", image:(Figma), deskrip:" adebbefb"},
		{nama: "Rust", image:(Rust), deskrip:" adebbefb"},
	]

  return (
	<View>
	  <Text style={styles.skilss}>skill</Text>
	  <View style={styles.wrapskils}>
	  {skils.map((post) => {
        return (
			<>
			<View style={styles.skils}>
		       <Image  source={post.image} style={styles.imageskils}/>
			   <Text>{post.nama} </Text>
			</View>
		</>
		)
      })}
	  </View>
	</View>
  )
}

export default skill

const styles = StyleSheet.create({


	skilss: {
		marginLeft: 35, 
		marginTop: 20,
		fontWeight: 'bold'
	}, 
	 
	wrapskils:{
		width:320, 
		height: 150, 
		flexDirection: 'row',
		marginLeft: 30, 
		marginTop:15, 
		gap:8, 
		flexWrap: 'wrap',
	}, 

	skils :{
		width: 95,
		height: 95,
		borderRadius:15, 
		backgroundColor: 'white',
		shadowColor: "#000",
		shadowOpacity: 0.58,
		shadowRadius: 16.00,
		elevation: 24,     
		alignItems: 'center'
	}, 

	imageskils:{
		width: 60, 
		height: 60,
		marginTop: 5
	},
})