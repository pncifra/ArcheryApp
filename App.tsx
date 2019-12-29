import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ScoreboardScreen } from './src/components/Scoreboard';
import { ProfileScreen } from './src/components/Profile';

interface Props {
	navigation: any
}

class HomeScreen extends React.Component<Props> {

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Button
					title="Scoreboard"
					onPress={() => this.props.navigation.navigate('Scoreboard')}
				/>
				<Button
					title="Profile"
					onPress={() => this.props.navigation.navigate('Profile')}
				/>
			</View>
		);
	}
}

const RootStack = createStackNavigator({
	Home: HomeScreen,
	Scoreboard: ScoreboardScreen,
    Profile: ProfileScreen
});

export default createAppContainer(RootStack);
