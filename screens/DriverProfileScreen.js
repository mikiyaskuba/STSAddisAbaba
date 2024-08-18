import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function DriverProfileScreen({ route }) {
	const { driverId } = route.params;
	const [driver, setDriver] = useState(null);

	useEffect(() => {
		const fetchDriver = async () => {
			const docRef = doc(db, "drivers", driverId);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				setDriver(docSnap.data());
			} else {
				console.log("No such document!");
			}
		};

		fetchDriver();
	}, [driverId]);

	if (!driver) {
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				{driver.profilePhoto && (
					<Image source={{ uri: driver.profilePhoto }} style={styles.image} />
				)}
				{driver.drivingLicensePhoto && (
					<Image
						source={{ uri: driver.drivingLicensePhoto }}
						style={styles.image}
					/>
				)}
				<Text style={styles.text}>Name: {driver.fullName}</Text>
				<Text style={styles.text}>Phone: {driver.phoneNumber}</Text>
				<Text style={styles.text}>Address: {driver.address}</Text>
				<Text style={styles.text}>Car Plate: {driver.carPlateNumber}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#f8f8f8",
	},
	card: {
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 20,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 5,
		alignItems: "center",
		width: "90%",
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 60,
		marginBottom: 20,
	},
	text: {
		fontSize: 18,
		marginBottom: 10,
		textAlign: "center",
		color: "#333",
	},
});
