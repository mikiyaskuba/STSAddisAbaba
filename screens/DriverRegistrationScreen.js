import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebaseConfig";
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function DriverRegistrationScreen({ navigation }) {
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [drivingLicensePhoto, setDrivingLicensePhoto] = useState(null);
	const [profilePhoto, setProfilePhoto] = useState(null);
	const [carPlateNumber, setCarPlateNumber] = useState("");

	const uploadImageAsync = async (uri, folder) => {
		// Convert image to blob format
		const response = await fetch(uri);
		const blob = await response.blob();

		// Create a unique file name in storage
		const storageRef = ref(storage, `${folder}/${phoneNumber}_${Date.now()}`);
		await uploadBytes(storageRef, blob);

		// Get the download URL
		const downloadURL = await getDownloadURL(storageRef);
		return downloadURL;
	};

	const submitDriverInfo = async () => {
		try {
			const profilePhotoURL = profilePhoto
				? await uploadImageAsync(profilePhoto, "profilePhotos")
				: "";
			const drivingLicensePhotoURL = drivingLicensePhoto
				? await uploadImageAsync(drivingLicensePhoto, "drivingLicensePhotos")
				: "";

			const newDriver = {
				fullName: fullName || "",
				phoneNumber: phoneNumber || "",
				address: address || "",
				drivingLicensePhoto: drivingLicensePhotoURL || "",
				profilePhoto: profilePhotoURL || "",
				carPlateNumber: carPlateNumber || "",
			};

			await setDoc(doc(db, "drivers", phoneNumber), newDriver);
			navigation.navigate("DriverProfile", { driverId: phoneNumber });
		} catch (error) {
			console.error("Error adding document: ", error);
		}
	};

	const pickImage = async (setImage) => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Driver Registration</Text>
			<TextInput
				style={styles.input}
				placeholder="Full Name"
				value={fullName}
				onChangeText={setFullName}
			/>
			<TextInput
				style={styles.input}
				placeholder="Phone Number"
				keyboardType="phone-pad"
				value={phoneNumber}
				onChangeText={setPhoneNumber}
			/>
			<TextInput
				style={styles.input}
				placeholder="Address"
				value={address}
				onChangeText={setAddress}
			/>
			<TouchableOpacity onPress={() => pickImage(setDrivingLicensePhoto)}>
				<View style={styles.imagePicker}>
					{drivingLicensePhoto ? (
						<Image source={{ uri: drivingLicensePhoto }} style={styles.image} />
					) : (
						<Text>Upload Driving License Photo</Text>
					)}
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => pickImage(setProfilePhoto)}>
				<View style={styles.imagePicker}>
					{profilePhoto ? (
						<Image source={{ uri: profilePhoto }} style={styles.image} />
					) : (
						<Text>Upload Your Photo</Text>
					)}
				</View>
			</TouchableOpacity>
			<TextInput
				style={styles.input}
				placeholder="Car Plate Number"
				value={carPlateNumber}
				onChangeText={setCarPlateNumber}
			/>
			<Button title="Submit" onPress={submitDriverInfo} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#ffffff",
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		textAlign: "center",
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		borderRadius: 5,
		marginBottom: 20,
	},
	imagePicker: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		borderRadius: 5,
		marginBottom: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 100,
		height: 100,
	},
});
