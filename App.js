import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RoleSelectionScreen from "./screens/RoleSelectionScreen";
import HomeScreen from "./screens/HomeScreen";
import DriverRegistrationScreen from "./screens/DriverRegistrationScreen";
import DriverProfileScreen from "./screens/DriverProfileScreen";
import { AppRegistry } from "react-native";
import { name as myTaxi } from "./app.json"; // Correctly import the app name from app.json

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="RoleSelection">
				<Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen
					name="DriverRegistration"
					component={DriverRegistrationScreen}
				/>
				<Stack.Screen name="DriverProfile" component={DriverProfileScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// Register the main component
AppRegistry.registerComponent(myTaxi, () => App);
