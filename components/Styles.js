import { StyleSheet,Dimensions } from 'react-native';
export default StyleSheet.create({
  
  container: { flex: 1, marginTop: 50, padding: 16, backgroundColor: '#FFFF' },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 22, fontWeight: 'bold' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  search: { borderWidth: 1, borderRadius: 10, padding: 10, marginVertical: 10 },
  filterRow: { flexDirection: 'row', marginBottom: 10 },
  filter: {
    marginRight: 10,
    padding: 6,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  filterActive: {
    marginRight: 10,
    padding: 6,
    borderRadius: 10,
    backgroundColor: '#D4FF00',
  },
  card: { marginVertical: 10 },
  image: { width: '100%', height: 180, borderRadius: 10 },
  propertyTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, marginVertical: 8 },
  button: {
    backgroundColor: '#D4FF00',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { fontWeight: 'bold' },
  buttonTextBlack: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 12,
    borderRadius: 10,
  },
  priceTag: { fontSize: 18, fontWeight: 'bold', marginRight: 20 },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bell: {
    marginRight: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 16,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
 imageWrapper: {
  position: 'relative',
  borderRadius: 20,
  overflow: 'hidden',
  height: 200,
  width: '100%',
  marginBottom: 10,
},

cardImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},

imageLabel: {
  position: 'absolute',
  top: 12,
  left: 12,
  backgroundColor: '#fff',
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 12,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
},

imageLabelText: {
  fontSize: 12,
  color: '#333',
  fontWeight: '600',


  },
  wishlistIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 20,
    zIndex: 1,
  },
  cardContent: {
    padding: 12,
  },
  subInfo: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },
  cardRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 10,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  cardPriceUnit: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  cardLocation: {
    fontSize: 12,
    color: '#666',
  },
  rating: {
    fontSize: 12,
    marginRight: 4,
    color: '#333',
  },
 

  tabBar: {
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    elevation: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
    marginTop: 4,
  },
  modalContainer: {
    flex: 1,
     height: Dimensions.get('screen').height * 0.95 ,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  // modalContent: {
  //   backgroundColor: '#fff',
  //   borderTopLeftRadius: 25,
  //   borderTopRightRadius: 25,
  //   padding: 20,
  //   maxHeight: '95%',
  // },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  clearText: {
    color: '#888',
    fontWeight: '600',
  },
  // toggleRow: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: 20,
  // },
  toggleBtn: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  toggleBtnActive: {
    backgroundColor: 'black',
  },
  toggleText: {
    color: '#888',
  },
  toggleTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  // chipRow: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   gap: 10,
  //   marginBottom: 20,
  // },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
  },
  sliderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  // applyButton: {
  //   marginTop: 0,
  //   backgroundColor: '#DDF50E',
  //   paddingVertical: 15,
  //   borderRadius: 15,
  //   alignItems: 'center',
  // },
  // applyButtonText: {
  //   fontWeight: 'bold',
  //   fontSize: 16,
  // },
  customSliderTrack: {
  height: 6,
  backgroundColor: '#ccc',
  borderRadius: 10,
  marginTop: 10,
  width: '100%',
  position: 'relative',
},

customSliderFill: {
  height: 6,
  backgroundColor: '#4f46e5',
  borderRadius: 10,
  position: 'absolute',
  left: 0,
  top: 0,
},

customSliderKnob: {
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: '#4f46e5',
  position: 'absolute',
  top: -7,
  left: `${(250 / 5000) * 100}%`, // you can dynamically calculate this based on minPrice
},

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  chipRow: {
    flexDirection: 'row',
    padding: 10,
  },
  applyButton: {
    backgroundColor: '#59C1BD',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },

  
});
