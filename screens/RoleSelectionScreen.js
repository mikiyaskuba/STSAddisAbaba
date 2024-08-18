import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function RoleSelectionScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Join as:</Text>
			<View style={styles.buttonContainer}>
				<Button
					title="Driver"
					onPress={() => navigation.navigate("DriverRegistration")}
				/>
				<Button
					title="Passenger"
					onPress={() => navigation.navigate("PassengerScreen")}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	buttonContainer: {
		width: "80%",
		flexDirection: "row",
		justifyContent: "space-around",
	},
});
