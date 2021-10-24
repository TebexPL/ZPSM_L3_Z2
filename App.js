import React from 'react';
import {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';




class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			buttonHint: "Pokaż",
			hiddenState: true,
			nameString: "Tomasz Bęben"
		}
	}
	
	render() {

		const styles = StyleSheet.create({
		 	container: {
		 		flex: 1,
		 		paddingTop: "20%",
		 		paddingBottom: "20%",
		 		flexDirection: 'column',
		 		alignItems: 'center',
		 		justifyContent: 'center',
		 	},
		 	titleView: {
		 		flex: 2,
		 		flexDirection: 'row',	  	    
		 		justifyContent: 'center',
		 		alignItems: 'flex-end',
		 	},
		 	buttonView: {
		 		flex: 1,
		 		flexDirection: 'row',	  	    
		 		justifyContent: 'center',
		 		alignItems: 'center',
		 	},
		 	nameViewContainer: {
		 		flex: 3,
		 		flexDirection: 'row',
		 		alignItems: "flex-start",
		 	},
		 	nameView: {
		 		flexDirection: 'column',
		 		alignItems: 'center'
		 	},
		 	button: {
		 		alignItems: "center",
		 		backgroundColor: "#DDDDDD",
		 		margin: 5,
		 		padding: 10,
		 		width: 100,
		 	},
		 	
		 });

	
		const toggleHidden = () => {
			if(this.state.hiddenState == false)
				this.setState({buttonHint: 'Pokaż'});
			else
				this.setState({buttonHint: 'Ukryj'});
			this.setState({hiddenState: !this.state.hiddenState});
		}
		
		 return (
			 <View style = {styles.container}>
		 	 		<View style = {styles.titleView}> 
						<Text style={{fontSize: 20}}>
							Zadanie 2
						</Text>
			  	</View>
		  	<View style = {styles.buttonView}>
				<TouchableOpacity 
					style={styles.button}
					onPress={toggleHidden}>
					<Text>
					 {this.state.buttonHint}
					</Text>
				</TouchableOpacity>
			  </View>
			  <View style = {styles.nameViewContainer}>
			  	<View style={[styles.nameView, {display: (this.state.hiddenState ? "none" : "flex")}]}>
			  		<Text>
						Nazywam się
					</Text>
					<Text style = {{fontWeight: 'bold'}}>
					 	{this.state.nameString}
					</Text>
				</View>
			  </View>
			 </View>
		 );

	}

};



export default App;
