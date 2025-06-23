import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const SCREEN_WIDTH = Dimensions.get('window').width;

const PropertyDetailsScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Overview');
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const parent = navigation.getParent();
    parent?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      parent?.setOptions({ tabBarStyle: undefined });
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>

      <Image
        source={require('../assets/abc.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.curvedContainer}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.location}>Downtown, New York</Text>
          <Text style={styles.title}>
            Modern 2 Bedroom Apartment In New York.
          </Text>

          <View style={styles.detailsRow}>
            <Text style={styles.detailText}>2 Baths</Text>
            <Text style={styles.separator}>•</Text>
            <Text style={styles.detailText}>2 Beds</Text>
            <Text style={styles.separator}>•</Text>
            <Text style={styles.detailText}>1200 sqft</Text>
          </View>

          <FlatList
            data={['Overview', 'Features', 'Reviews', 'Directions']}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.tabList}
            renderItem={({ item }) => {
              const isSelected = item === selectedTab;
              return (
                <TouchableOpacity
                  style={[
                    styles.tab,
                    isSelected && { backgroundColor: '#D4FF00' },
                  ]}
                  onPress={() => setSelectedTab(item)}>
                  <Text
                    style={[
                      styles.tabText,
                      isSelected && { color: '#000', fontWeight: '600' },
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
          <Text style={styles.descriptions}>Property Details</Text>

          <Text style={styles.description}>
            A beautiful and spacious apartment located in the heart of downtown
            New York. This modern apartment offers an open floor plan, updated
            kitchen, and stunning city views. Perfect for professionals and
            families alike, it features hardwood floors, high ceilings, and
            abundant natural light.
          </Text>
        </ScrollView>
      </View>

      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.priceText}>Rent</Text>
          <Text style={styles.priceValue}>$1,200 /Month</Text>
        </View>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => navigation.navigate('PropertyOverviewScreen')}>
          <Text style={styles.contactLabel}>Contact Agent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PropertyDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 350 },
  content: { padding: 16, borderTopStartRadius: 50, borderTopLeftRadius: 20 },
  location: { color: '#888', fontSize: 15, marginBottom: 4 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailText: { fontSize: 14, color: '#555' },
  separator: { marginHorizontal: 6, fontSize: 14, color: '#999' },

  description: { fontSize: 15, lineHeight: 22, color: '#444' },
  descriptions: {
    fontSize: 18,
    lineHeight: 22,
    color: '#000',
    fontWeight: 'bold',
    bottom: 10,
    marginTop: 10,
  },
  bottomBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#000',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  priceText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  priceValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginTop: 4,
  },
  curvedContainer: {
    flex: 1,
    marginTop: -30, // pulls up over image
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },

  contactButton: {
    backgroundColor: '#D4FF00',
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 10,
  },
  contactLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },

  tabList: {
    marginBottom: 16,
    paddingRight: 8,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },
  tabText: {
    fontSize: 14,
    color: '#333',
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
  backArrow: {
    fontSize: 18,
    color: '#000',
  },
});
