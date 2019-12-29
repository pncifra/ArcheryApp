import * as React from "react";
import {Button, Text, View} from "react-native";

interface Props {
	navigation: any
}

/**
 * Component to handle scoreboard view
 */
export class ScoreboardScreen extends React.Component<Props> {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Scoreboard Screen</Text>
				<Button
					title="Go Home"
					onPress={() => this.props.navigation.push('Home')}
				/>
			</View>
		);
	}
}