import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

export default function CustomNavBar() {

  return (
    <View style={styles.container}>
        
        <View >
        <Text > Live Chat </Text>
        </View>
        
        <View  >
        <Text> Profile </Text>

        </View>
        <View  >
        <Text> Home </Text>

        </View>

        <View  >
        <Text> Menu </Text>

        </View>
        <View  >
        <Text style={{ color: 'orange'}}> Favourites </Text>

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