
//original
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

export default function CustomNavBar() {

  return (
    <View style={styles.container}>
        
        <View >
        <Text style={{ color: 'orange'}}> Meals </Text>
        </View>
        
        <View  >
        <Text> Sides </Text>

        </View>
        <View  >
        <Text> Snacks </Text>

        </View>


    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 0.05,
  flexDirection:'row',
//   alignItems: 'center',
  justifyContent: 'space-between',
},
image:{
  width:'100%', 
  aspectRatio:2/1,
},
name:{
fontSize:42
},
title:{
  fontSize:50
}
});