import { StyleSheet, Image,Button } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import Food from '@/assets/Data/Food';
import FoodComponent from '@/components/FoodComponent';
import CustomNavBar from '@/components/CustomNavBar';
import BottomBar from '@/components/BottomBar';
import PostProduct from '@/components/PostProduct';
import GetProducts from '@/components/GetProducts';
import { useEffect, useState } from 'react';
import { set } from 'mongoose';
export default function TabOneScreen() {
  const[count, setCount] = useState(0);
  const[number, setNumber] = useState(0);
  const[flag, setFlag] = useState(0);
  
  useEffect(()=>{
      console.log('simple ')
  })
  useEffect(()=>{
    console.log('simple with []')
},[])
useEffect(()=>{
  console.log('count ')
  return()=>{
    console.log('unmounted')
  }
},[count])
useEffect(()=>{
  console.log('number ')
},[number])
useEffect(()=>{
  console.log('flag')
},[flag])
useEffect(()=>{
  console.log('All')
},[flag,number, count])

console.log('return called')
  return (
    <View style={styles.container}> 
      {/* <CustomNavBar></CustomNavBar>
    <FoodComponent></FoodComponent>
    <BottomBar></BottomBar> */}
    {/* <PostProduct/> */}
    {/* <GetProducts></GetProducts> */}

    {/* useEffect */}
    <Text> count is {count} </Text>
    <Text> number is {number} </Text>
    <Text> flag is {flag} </Text>
  
    <Button title='count' onPress={()=>setCount(count+1)}></Button>
    <Button title='number' onPress={()=>setNumber(number+1)}></Button>

    <Button title='flag' onPress={()=>setFlag(flag+1)}></Button>









    </View>
   
  );
}
const styles=  StyleSheet.create({
  container:{
    flex:1

  }
  

})

//lab 3
// import { StyleSheet, Image } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';

// import Food from '@/assets/Data/Food';
// import FoodComponent from '@/components/FoodComponent';
// import CustomNavBar from '@/components/CustomNavBar';
// import BottomBar from '@/components/BottomBar';
// import { NavigationContainer } from '@react-navigation/native';
// import { Stack } from 'expo-router';

// export default function TabOneScreen() {
  
//   return (
//     <View style={styles.container}> 
//         <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="FoodComponent" component={FoodComponent} options={{ title: 'Food List' }} />
//         <Stack.Screen name="FoodDetailScreen" component={FoodDetailScreen} options={{ title: 'Food Details' }} />
//       </Stack.Navigator>
//     </NavigationContainer>

//       <CustomNavBar></CustomNavBar>
//     <FoodComponent></FoodComponent>
//     <BottomBar></BottomBar>
//     </View>
   
//   );
// }
// const styles=  StyleSheet.create({
//   container:{
//     flex:1

//   }
  

// })
