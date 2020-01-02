import React from "react";
import { Button, StyleSheet, Text, TouchableHighlight, View, Modal } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface Props {
	navigation: any
}

/**
 * Component to handle scoreboard view
 */
export class ScoreboardScreen extends React.Component<Props> {
	state = {
		modalVisible: true,
		scores: []
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Scoreboard Screen</Text>
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}>
					<TouchableHighlight
						onPress={() => {
							this.setModalVisible(!this.state.modalVisible);
						}}>
						<View style={styles.modalBackground}></View>
					</TouchableHighlight>
					<View style={[styles.modal, {
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "space-between"
					}]}>
						<TouchableHighlight
							style={styles.button}
							onPress={() => { this.state.scores.push('X') }}>
							<Text style={{ alignSelf: "center", fontSize: wp("6%") }}>X</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.button}
							onPress={() => { this.state.scores.push('10') }}>
							<Text style={{ alignSelf: "center", fontSize: wp("6%") }}>10</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.button}
							onPress={() => { this.state.scores.push('9') }}>
							<Text style={{ alignSelf: "center", fontSize: wp("6%") }}>9</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "#CC2752" }]}
							onPress={() => { this.state.scores.push('8') }}>
							<Text style={styles.keytext}>8</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "#34559d" }]}
							onPress={() => { this.state.scores.pop(), console.log(this.state.scores) }}>
							<Text style={styles.keytext}>Del</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "#CC2752" }]}
							onPress={() => { this.state.scores.push('7') }}>
							<Text style={styles.keytext}>7</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "#30CCFF" }]}
							onPress={() => { this.state.scores.push('6') }}>
							<Text style={styles.keytext}>6</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "#30CCFF" }]}
							onPress={() => { this.state.scores.push('5') }}>
							<Text style={styles.keytext}>5</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "black" }]}
							onPress={() => { this.state.scores.push('4') }}>
							<Text style={styles.keytext}>4</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.button}
							onPress={() => { console.log(this.state.scores) }}>
							<Text style={{ alignSelf: "center", fontSize: wp("6%") }}>Enter</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "black" }]}
							onPress={() => { this.state.scores.push('3') }}>
							<Text style={styles.keytext}>3</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "white" }]}
							onPress={() => { this.state.scores.push('2') }}>
							<Text style={{ alignSelf: "center", fontSize: wp("6%") }}>2</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "white" }]}
							onPress={() => { this.state.scores.push('1') }}>
							<Text style={{ alignSelf: "center", fontSize: wp("6%") }}>1</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={[styles.button, { backgroundColor: "#2BD10E" }]}
							onPress={() => { this.state.scores.push('M') }}>
							<Text style={styles.keytext}>M</Text>
						</TouchableHighlight>
						<TouchableHighlight
							style={styles.button}
							onPress={() => this.props.navigation.push('Home')}>
							<Text style={{ alignSelf: "center", fontSize: wp("6%") }}>Home</Text>
						</TouchableHighlight>
					</View>
				</Modal>
				<TouchableHighlight
					onPress={() => {
						this.setModalVisible(true);
					}}>
					<Text>Show Modal</Text>
				</TouchableHighlight>

			</View >
		);
	}
}

const styles = StyleSheet.create({
	button: {
		width: wp("19.2%"),
		height: hp("9%"),
		backgroundColor: "#FFF017",
		justifyContent: "center",
		borderBottomWidth: 2
	},
	keytext: {
		alignSelf: "center",
		fontSize: wp("6%"),
		color: "white"
	},
	modal: {
		width: wp("100%"),
		height: hp("27%"),
		backgroundColor: "#34558b",
		borderWidth: 2,
	},
	modalBackground: {
		width: wp("100%"),
		height: hp("73%"),
	}
});