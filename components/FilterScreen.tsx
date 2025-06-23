import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const roomOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5+', value: '5+' },
];
interface Props {
  visible: boolean;
  onClose: () => void;
}

const categories = [
  'Apartments',
  'House',
  'Hotel',
  'Penthouse',
  'Land',
  'Villa',
];
const facilities = ['Parking', 'Kitchen', 'Free Wifi', 'Garden', 'Pool'];
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const FilterModal: React.FC<Props> = ({ visible, onClose }) => {
  const [rentType, setRentType] = useState<'rent' | 'buy' | 'sale'>('rent');
  const [city, setCity] = useState('New York');
  const [country, setCountry] = useState('United States');
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Apartments');
  const [minPrice, setMinPrice] = useState(250);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [bedrooms, setBedrooms] = useState('3 Rooms');
  const [bathrooms, setBathrooms] = useState('2 Bathrooms');
   const [price, setPrice] = useState(1000);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  const toggleFacility = (facility: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((f) => f !== facility)
        : [...prev, facility]
    );
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Filters</Text>

            <View style={styles.row}>
              {['sale', 'rent', 'buy'].map((type) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => setRentType(type as 'rent' | 'buy' | 'sale')}
                  style={[styles.pill, rentType === type && styles.pillActive]}>
                  <Text
                    style={
                      rentType === type
                        ? styles.pillTextActive
                        : styles.pillText
                    }>
                    For {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Location</Text>

            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>City</Text>
                <TextInput
                  value={city}
                  onChangeText={setCity}
                  placeholder="City"
                  style={styles.input}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Country</Text>
                <TextInput
                  value={country}
                  onChangeText={setCountry}
                  placeholder="Country"
                  style={styles.input}
                />
              </View>
            </View>

            <Text style={styles.label}>Select Category</Text>
            <View style={styles.rowWrap}>
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  onPress={() => setSelectedCategory(cat)}
                  style={[
                    styles.pill,
                    selectedCategory === cat && styles.pillActive,
                  ]}>
                  <Text
                    style={
                      selectedCategory === cat
                        ? styles.pillTextActive
                        : styles.pillText
                    }>
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

     


            <Text style={styles.label}>Rooms</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View style={{ flex: 1 }}>
                <RNPickerSelect
                  onValueChange={(value) => setBedrooms(value)}
                  items={roomOptions}
                  placeholder={{ label: 'Bedrooms', value: null }}
                  value={bedrooms}
                  style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <RNPickerSelect
                  onValueChange={(value) => setBathrooms(value)}
                  items={roomOptions}
                  placeholder={{ label: 'Bathrooms', value: null }}
                  value={bathrooms}
                  style={{
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                  }}
                />
              </View>
            </View>

            <Text style={styles.label}>Facility Place</Text>
            <View style={styles.rowWrap}>
              {facilities.map((facility) => (
                <TouchableOpacity
                  key={facility}
                  onPress={() => toggleFacility(facility)}
                  style={[
                    styles.pill,
                    selectedFacilities.includes(facility) && styles.pillActive,
                  ]}>
                  <Text
                    style={
                      selectedFacilities.includes(facility)
                        ? styles.pillTextActive
                        : styles.pillText
                    }>
                    {facility}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.applyBtn} onPress={onClose}>
              <Text style={styles.applyText}>Apply Filters</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',

    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#fff',
    marginTop: 40,
    padding: 20,
    maxHeight: SCREEN_HEIGHT * 0.9,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
 
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  label: { marginVertical: 8, fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  row: { flexDirection: 'row', marginBottom: 10 },
  rowWrap: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  pill: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    margin: 4,
  },
  pillActive: {
    backgroundColor: '#000', // selected pill
  },
  pillText: {
    color: '#333',
  },
  pillTextActive: {
    color: '#fff', // selected pill text
    fontWeight: 'bold',
  },
  applyBtn: {
    marginTop: 20,
    backgroundColor: '#DDF40A',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
  },

  applyText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
