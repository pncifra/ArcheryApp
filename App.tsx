import * as React from 'react';

//create redux store and import reducers
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import archeryApp from "./src/reducers/reducers";

import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import components
import { ScoreboardScreen } from './src/components/Scoreboard';
import { ProfileScreen } from './src/components/Profile';

interface Props {
	navigation: any
}

const store = createStore(archeryApp);

class HomeScreen extends React.Component<Props> {

	render() {
		return (
			<Provider store={store}>
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
			</Provider>
		);
	}
}

const RootStack = createStackNavigator({
	Home: HomeScreen,
	Scoreboard: ScoreboardScreen,
	Profile: ProfileScreen
});

export default createAppContainer(RootStack);
