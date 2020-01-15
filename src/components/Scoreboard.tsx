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

	/** initializes state */
	state = {
		scores: [],
		rounds: 3,
		shots: 6,
		total: 0,
		average: 0
	};

	handleChange = (event) => {
		this.setState({ scores: event.target.value });
	}

	createRounds = () => {
		let rounds = [];
		for (let i = 1; i <= this.state.rounds; i++) {
			rounds.push(
				<TextInput
					style={styles.input}
					key={i}
					editable={false}
					maxLength={10 + this.state.shots * 3}
					onChange={this.handleChange}
					value={"Round " + i + ":  " + this.state.scores.slice(this.state.shots * (i - 1)).toString().split(",").join("  ")}
				/>)
		}
		return rounds;
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.createRounds()}

				{/* Create a keyboard element */}
				<View
					style={styles.keyboard}>
					<View style={styles.summary}>
						<Text style={{ fontSize: hp("2.5%"), color: "#fff" }} >
							Total: {this.state.total} / {this.state.shots * this.state.rounds * 10}
						</Text>
						<Text style={{ fontSize: hp("2.5%"), color: "#fff" }}>Average: {this.state.average}</Text>
					</View>
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
						style={[styles.key, { backgroundColor: "#CC0E60" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "8"] }) }}>
						<Text style={styles.keytext}>8</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#B3366B" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores.slice(0, -1)] }) }}>
						<Text style={styles.keytext}>Del</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#CC0E60" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "7"] }) }}>
						<Text style={styles.keytext}>7</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#57E4FF" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, "6"] }) }}>
						<Text style={styles.keytext}>6</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#57E4FF" }]}
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
			</View >
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
		paddingLeft: wp("2%"),
	},
	key: {
		width: wp("18.7%"),
		height: hp("8.2%"),
		margin: wp(".5%"),
		backgroundColor: "#FFEC3E",
		justifyContent: "center",
	},
	keytext: {
		alignSelf: "center",
		fontSize: hp("3%"),
		color: "white"
	},
	keyboard: {
		position: "absolute",
		bottom: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		width: wp("100%"),
		height: hp("33%"),
		backgroundColor: "#B3A210",
	},
	summary: {
		backgroundColor: "#998B0E",
		width: wp("100%"),
		height: hp("6%"),
		marginBottom: wp(".75%"),
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		padding: wp("2%"),
	}
});