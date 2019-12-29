import * as React from "react";
import {Button, Text, View} from "react-native";

interface Props {
	navigation: any
}

/**
 * Component the handle profile view
 */
export class ProfileScreen extends React.Component<Props> {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Profile Screen</Text>
				<Button
					title="Go Home"
					onPress={() => this.props.navigation.push('Home')}
				/>
			</View>
		);
	}
}