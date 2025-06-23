import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles';
import FilterModal from './FilterScreen';

interface PropertyItem {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  rating: number;
  isWishlisted: boolean;
  image: any;
}

const categories: string[] = ['All', 'Apartments', 'House', 'Villa', 'Hotel'];

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [propertyData, setPropertyData] = useState<PropertyItem[]>([
    {
      id: '1',
      title: 'Modern 2 Bedroom Apartment In New York.',
      price: '$1,200',
      location: 'Downtown, New York',
      bedrooms: 2,
      bathrooms: 2,
      size: '1200 sqft',
      rating: 4.5,
      isWishlisted: false,
      image: require('../assets/abc.png'),
    },
    {
      id: '2',
      title: 'Luxury Villa In LA',
      price: '$2,500',
      location: 'Los Angeles',
      bedrooms: 4,
      bathrooms: 3,
      size: '2000 sqft',
      rating: 4.8,
      isWishlisted: false,
      image: require('../assets/abc.png'),
    },
    {
      id: '3',
      title: 'Cozy Studio in Chicago',
      price: '$900',
      location: 'Chicago',
      bedrooms: 1,
      bathrooms: 1,
      size: '600 sqft',
      rating: 4.2,
      isWishlisted: false,
      image: require('../assets/abc.png'),
    },
  ]);

  const toggleWishlist = (id: string) => {
    const updated = propertyData.map((item) =>
      item.id === id ? { ...item, isWishlisted: !item.isWishlisted } : item
    );
    setPropertyData(updated);
  };

 return (
  <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>EstateEase</Text>
        <View style={styles.rightIcons}>
          <Ionicons
            name="filter"
            size={24}
            color="black"
            style={styles.bell}
            onPress={() => setIsFilterVisible(true)} // 👈 this opens the filter modal
          />
          <Ionicons
            name="notifications-outline"
            size={28}
            color="black"
            style={styles.bell}
          />
          <Image source={require('../assets/profile.png')} style={styles.avatar} />
        </View>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search address, city, zip"
          style={styles.searchInput}
          placeholderTextColor="#888"
        />
      </View>

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.filterRow}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text style={item === selectedCategory ? styles.filterActive : styles.filter}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={propertyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('PropertyDetailsScreen')}
          >
            <View style={styles.imageWrapper}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.imageLabel}>
                <Text style={styles.imageLabelText}>Apartment</Text>
              </View>
              <TouchableOpacity
                style={styles.wishlistIcon}
                onPress={() => toggleWishlist(item.id)}
              >
                <Ionicons
                  name={item.isWishlisted ? 'heart' : 'heart-outline'}
                  size={22}
                  color={item.isWishlisted ? 'red' : '#fff'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.subInfo}>{`${item.bathrooms} Baths,  ${item.bedrooms} Beds • ${item.size}`}</Text>
              <View style={styles.cardRowBetween}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View>
                  <Text style={styles.cardPrice}>{item.price}</Text>
                  <Text style={styles.cardPriceUnit}>month</Text>
                </View>
              </View>
              <View style={styles.cardRowBetween}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name="location-outline" size={14} color="#666" />
                  <Text style={styles.cardLocation}>  {item.location}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.rating}>{item.rating}</Text>
                  <Ionicons name="star" size={14} color="gold" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>

    {/* 🟦 Filter Modal at bottom */}
    <FilterModal
      visible={isFilterVisible}
      onClose={() => setIsFilterVisible(false)}
    />
  </>
);

};

export default HomeScreen;


