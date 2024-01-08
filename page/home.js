import {StyleSheet, Text, View, Image} from 'react-native'
import Avatar from '../assets/image/jiro.jpeg'
import Portopage from '../page/portofilio'
import Skillspage from '../page/skill'
import { ScrollView } from 'react-native'
import Footer from '../page/footer'


export default function Home() {
  return(
   <ScrollView>
	      <View>
		       <View style={styles.me}> 
			        <Image source={Avatar} style={styles.avatar}/>
			        <Text style={styles.adib}>Adib Misbahul Ulum</Text>
			        <Text style={styles.front}>frontend Developer | UI/UX Design</Text>
	         </View>
		   <Skillspage/>
		   <Portopage/>
		   <Footer/>
	      </View>
	    </ScrollView>
  )
}


const styles = StyleSheet.create({

	me:{
		width:300, 
		height: 150, 
		backgroundColor :'#f9f9f9',
		borderRadius: 15, 
		marginLeft: 30, 
		marginTop: 90, 
		alignItems : 'center',
		shadowColor: "#000",
		shadowOpacity: 0.58,
		shadowRadius: 16.00,
		elevation: 24,
	},

	avatar:{
		resizeMode: 'stretch', 
		width: 80, 
		height: 80, 
		marginTop: -30, 
		borderRadius: 50 
	}, 

	adib: {
		marginTop: 15, 
		fontWeight: 'bold', 
		fontSize: 18
	},


	front:{
		fontSize: 10, 
		marginTop: 10
	}
})

