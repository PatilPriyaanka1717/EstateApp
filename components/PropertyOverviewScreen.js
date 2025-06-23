// ContactInquiryScreen.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ContactInquiryScreen: React.FC = () => {
   const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      // <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        {/* Header Image */}
        <Image
          source={require('../assets/abc.png')} // Replace with your image or use local
          style={styles.headerImage}
        />

        {/* Form Section */}
        <View style={styles.formContainer}>
          <Text style={styles.contactAgent}>Contact Agent</Text>
          <Text style={styles.locationText}>📍 Downtown, New York</Text>
          <Text style={styles.priceText}>
            $1,200 <Text style={styles.monthText}>/month</Text>
          </Text>
          <Text style={styles.titleText}>
            Modern 2 Bedroom Apartment In New York.
          </Text>
          <Text style={styles.detailsText}>2 Baths • 2 Beds • 1200 sq ft</Text>

          <View style={styles.row}>
            <TextInput placeholder="First Name" style={styles.inputHalf} />
            <TextInput placeholder="Sec Name" style={styles.inputHalf} />
          </View>
          <TextInput
            placeholder="You Phone Number"
            style={styles.input}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="You Email"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Message"
            style={[styles.input, styles.messageInput]}
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Send Inquiry</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactInquiryScreen;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
 formContainer: {
  backgroundColor: '#fff',
  marginTop: -40,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 20,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  width: '100%',
},
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 10,
  },
  contactAgent: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  locationText: {
    color: '#888',
    fontSize: 14,
    marginBottom: 4,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  monthText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#555',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 6,
  },
  detailsText: {
    color: '#888',
    fontSize: 14,
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    width: '48%',
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#C8F902',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
});
