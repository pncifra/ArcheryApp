import React from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

/**
 * Component to handle scoreboard view
 */
export class ScoreboardScreen extends React.Component {
	constructor(props) {
		super(props);

		/** binds state change to update input field onChange*/
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ scores: event.target.value });
	}

	/** initializes state */
	state = {
		scores: []
	};


	render() {
		let scores = this.state.scores;
		return (
			<View style={{ flex: 1 }}>
				<TextInput
					style={styles.input}
					editable={false}
					maxLength={27}
					onChange={this.handleChange}
					value={"Round 1:  " + scores.toString().split(",").join("  ")}
				/>
				<TextInput
					style={styles.input}
					editable={false}
					maxLength={27}
					value={"Round 2:  " + scores.slice(6).toString().split(",").join("  ")}
				/>
				<TextInput
					style={styles.input}
					editable={false}
					maxLength={27}
					value={"Round 3:  " + scores.slice(12).toString().split(",").join("  ")}
				/>

				{/* Create a keyboard element */}
				<View
					style={styles.keyboard}>
					<TouchableHighlight
						style={styles.key}
						onPress={() => { this.setState({ scores: [...this.state.scores, "X"] }) }}>
						<Text style={[styles.keytext, { color: "black" }]}>X</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.key}
						onPress={() => { this.setState({ scores: [...this.state.scores, "10"] }) }}>
						<Text style={[styles.keytext, { color: "black" }]}>10</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.key}
						onPress={() => { this.setState({ scores: [...this.state.scores, "9"] }) }}>
						<Text style={[styles.keytext, { color: "black" }]}>9</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#CC2752" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "8"] }) }}>
						<Text style={styles.keytext}>8</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#34559d" }]}
						onPress={() => { this.state.scores.pop(), console.log(this.state.scores) }}>
						<Text style={styles.keytext}>Del</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#CC2752" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "7"] }) }}>
						<Text style={styles.keytext}>7</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#30CCFF" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "6"] }) }}>
						<Text style={styles.keytext}>6</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#30CCFF" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "5"] }) }}>
						<Text style={styles.keytext}>5</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "black" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "4"] }) }}>
						<Text style={styles.keytext}>4</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.key}
						onPress={() => { console.log(this.state) }}>
						<Text style={[styles.keytext, { color: "black" }]}>Enter</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "black" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "3"] }) }}>
						<Text style={styles.keytext}>3</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "white" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "2"] }) }}>
						<Text style={[styles.keytext, { color: "black" }]}>2</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "white" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "1"] }) }}>
						<Text style={[styles.keytext, { color: "black" }]}>1</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#2BD10E" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "M"] }) }}>
						<Text style={styles.keytext}>M</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.key}>
						<Text style={[styles.keytext, { color: "black" }]}>Home</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		width: wp("100%"),
		height: hp("8%"),
		fontSize: hp("3%"),
		borderColor: 'grey',
		borderBottomWidth: 1,
		alignContent: "space-between",
		paddingLeft: wp("2%"),
	},
	key: {
		width: wp("19.2%"),
		height: hp("9%"),
		backgroundColor: "#FFF017",
		justifyContent: "center",
		borderBottomWidth: 2,
		borderRadius: 3,
	},
	keytext: {
		alignSelf: "center",
		fontSize: hp("3.5%"),
		color: "white"
	},
	keyboard: {
		position: "absolute",
		bottom: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		width: wp("100%"),
		height: hp("27.5%"),
		backgroundColor: "#34558b",
		borderWidth: 2,
	},
});