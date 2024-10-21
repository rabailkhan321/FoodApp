import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Food from '@/assets/Data/Food';

export default function FoodDetailScreen() {
  const route = useRoute();
  const { food } = route.params; // Get the passed food data

  return (
    <View style={styles.container}>
      <Image source={{ uri: food.image }} style={styles.image} />
      <Text style={styles.title}>{food.title}</Text>
      <Text style={styles.price}>{food.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
});
