import React from "react";
import { StyleSheet, Text, Image, TouchableHighlight, View } from "react-native";
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
		images: [],
		rounds: 3,
		shots: 8,
		total: 0,
		average: 0
	};

	/** pushes a new score to the scores array in state */
	handleChange = (event) => {
		this.setState({ scores: event.target.value });
	}

	/** renders View elements for rounds with corresponding amount of Image elements for shots */
	createRounds = () => {
		let roundEl = [],
			imageEl = [],
			shots = this.state.shots,
			rounds = this.state.rounds,
			images = this.state.images;

		for (let j = 1; j <= shots * rounds; j++) {
			imageEl.push(
				<Image
					key={j}
					style={styles.scoreImage}
					source={images[(j - 1)]}
				/>
			)
		}
		for (let i = 1; i <= rounds; i++) {
			roundEl.push(
				<View style={styles.input} key={i}>
					<Text style={styles.keytext}> {i}: </Text>
					{imageEl.slice(shots * (i - 1), (shots * (i - 1)) + shots)}
				</View>)
		}

		return roundEl;
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
						onPress={() => { this.setState({ scores: [...this.state.scores, 10], images: [...this.state.images, require("../../assets/X.png")] }) }}>
						<Text style={styles.keytext}>X</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.key}
						onPress={() => { this.setState({ scores: [...this.state.scores, 10], images: [...this.state.images, require("../../assets/10.png")] }) }}>
						<Text style={styles.keytext}>10</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.key}
						onPress={() => { this.setState({ scores: [...this.state.scores, 9], images: [...this.state.images, require("../../assets/9.png")] }) }}>
						<Text style={styles.keytext}>9</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#CC0E60" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, 8], images: [...this.state.images, require("../../assets/8.png")] }) }}>
						<Text style={[styles.keytext, { color: "white" }]}>8</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#B3366B" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores.slice(0, -1)], images: [...this.state.images.slice(0, -1)] }) }}>
						<Text style={[styles.keytext, { color: "white" }]}>Del</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#CC0E60" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, 7], images: [...this.state.images, require("../../assets/7.png")] }) }}>
						<Text style={[styles.keytext, { color: "white" }]}>7</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#57E4FF" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, 6], images: [...this.state.images, require("../../assets/6.png")] }) }}>
						<Text style={styles.keytext}>6</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "#57E4FF" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, 5], images: [...this.state.images, require("../../assets/5.png")] }) }}>
						<Text style={styles.keytext}>5</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "black" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, 4], images: [...this.state.images, require("../../assets/4.png")] }) }}>
						<Text style={[styles.keytext, { color: "white" }]}>4</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.key}
						onPress={() => { console.log(this.state) }}>
						<Text style={styles.keytext}>Enter</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "black" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, 3], images: [...this.state.images, require("../../assets/3.png")] }) }}>
						<Text style={[styles.keytext, { color: "white" }]}>3</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "white" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, 2], images: [...this.state.images, require("../../assets/2.png")] }) }}>
						<Text style={styles.keytext}>2</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "white" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, 1], images: [...this.state.images, require("../../assets/1.png")] }) }}>
						<Text style={styles.keytext}>1</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[styles.key, { backgroundColor: "white" }]}
						onPress={() => { this.setState({ scores: [...this.state.scores, 0], images: [...this.state.images, require("../../assets/0.png")] }) }}>
						<Text style={styles.keytext}>0</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.key}>
						<Text style={styles.keytext}>Home</Text>
					</TouchableHighlight>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	input: {
		width: wp("100%"),
		height: "auto",
		fontSize: hp("3%"),
		borderColor: 'grey',
		borderBottomWidth: 1,
		padding: wp("2%"),
		flexDirection: "row",
		flexWrap: "wrap"
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
		color: "black"
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
	scoreImage: {
		height: hp("4.5%"),
		width: hp("4.5%"),
		marginLeft: hp("0.5%"),
		alignSelf: "center"
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