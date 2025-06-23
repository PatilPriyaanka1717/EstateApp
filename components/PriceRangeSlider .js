import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width - 40;
const SLIDER_HEIGHT = 4;

const CustomPriceSlider = () => {
  const [range, setRange] = useState({ min: 500, max: 1500 });

  const minX = useRef(new Animated.Value(0)).current;
  const maxX = useRef(new Animated.Value(SLIDER_WIDTH)).current;

  const panMin = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        const newX = Math.max(0, Math.min(gesture.dx, maxX._value - 20));
        minX.setValue(newX);
        const percent = newX / SLIDER_WIDTH;
        setRange((r) => ({ ...r, min: Math.floor(percent * 5000) }));
      },
    })
  ).current;

  const panMax = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        const newX = Math.min(SLIDER_WIDTH, Math.max(gesture.dx + SLIDER_WIDTH - maxX._value, minX._value + 20));
        maxX.setValue(newX);
        const percent = newX / SLIDER_WIDTH;
        setRange((r) => ({ ...r, max: Math.floor(percent * 5000) }));
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Price Range</Text>
      <Text style={styles.rangeText}>${range.min} – ${range.max}</Text>
      <View style={styles.sliderWrapper}>
        <View style={styles.track} />
        <Animated.View
          style={[
            styles.trackActive,
            {
              left: minX,
              width: Animated.subtract(maxX, minX),
            },
          ]}
        />
        <Animated.View {...panMin.panHandlers} style={[styles.thumb, { transform: [{ translateX: minX }] }]} />
        <Animated.View {...panMax.panHandlers} style={[styles.thumb, { transform: [{ translateX: maxX }] }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 20, paddingHorizontal: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  rangeText: { color: '#00C853', marginBottom: 12, fontWeight: '500' },
  sliderWrapper: { height: 40, justifyContent: 'center' },
  track: {
    height: SLIDER_HEIGHT,
    backgroundColor: '#ccc',
    borderRadius: 2,
    position: 'absolute',
    width: SLIDER_WIDTH,
  },
  trackActive: {
    position: 'absolute',
    height: SLIDER_HEIGHT,
    backgroundColor: '#00C853',
    borderRadius: 2,
  },
  thumb: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#00C853',
    top: -10,
    zIndex: 10,
  },
});

export default CustomPriceSlider;
