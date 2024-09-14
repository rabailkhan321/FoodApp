import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import Food from '@/assets/Data/Food';
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <Image source = {{uri:Food[0].image}}
      
      style={styles.image}
      />
      <Text style={styles.title}>{Food[0].title}</Text>
      <Text style={styles.title}>{Food[0].price}</Text>

    
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  image:{
    width: '100%',
    aspectRatio:2/1
  }
});
