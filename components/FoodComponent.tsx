
// import { StyleSheet, Image, ScrollViewComponent, ScrollView, FlatList } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';

// import Food from '@/assets/Data/Food';
// import React from 'react';


// export default function FoodComponent(){
//   // return(
    
//   //    <View style={styles.container}>
//   //     <Image source = {{uri:Food[0].image}}
    
//   //   style={styles.image}
//   //   />
//   //   <Text style={styles.title}>{Food[0].title}</Text>
//   //   <Text style={styles.title}>{Food[0].price}</Text>

//   //   <Image source = {{uri:Food[1].image}}
    
//   //   style={styles.image}
//   //   />
//   //   <Text style={styles.title}>{Food[1].title}</Text>
//   //   <Text style={styles.title}>{Food[1].price}</Text>

//   // </View>



//   // )


//   //doing same thing with mapping
// //   return(
// //     <View style={styles.container}>
// //           <ScrollView>

// //       {
// //         Food.map((data)=>{
// //           return(
// //             <View>
// //               <Image source = {{uri:data.image}}
   
// //    style={styles.image}
// //    />
// //    <Text style={styles.title}>{data.title}</Text>
// //    <Text style={styles.title}>{data.price}</Text>
// //             </View>
// //           )

// //         })
// //       }
     

// //      </ScrollView>

// //  </View>



// //  )


//  //now doing those things with flatList
//code below





 
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.95,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   image:{
//     width: '100%',
//     aspectRatio:2/1
//   }
// });

//flatlist
//similar to sir code 
// import { StyleSheet, Image, FlatList } from 'react-native';
// import { Text, View } from '@/components/Themed';
// import Food from '@/assets/Data/Food';
// import React from 'react';

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Image source={{ uri: title.image }} style={styles.image} />
//     <Text style={styles.title}>{title.title}</Text>
//     <Text style={styles.price}>{title.price}</Text>
//   </View>
// );

// export default function FoodComponent() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={Food}
//         renderItem={({ item }) => <Item title={item} />}
//         keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} // Ensure unique key

//         numColumns={2}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.95,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   item: {
//     marginVertical: 10,
//     width: '45%', //changed this
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 16,
//     color: 'gray',
//   },
//   image: {
//     width: 200,
//     aspectRatio: 2 / 1,
//   },
// });

//flatlist generated by chat gpt and working perfectly fine
// import { StyleSheet, Image, FlatList } from 'react-native';
// import { Text, View } from '@/components/Themed';
// import Food from '@/assets/Data/Food';
// import React from 'react';

// const numColumns = 2; // Set the number of columns

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Image source={{ uri: title.image }} style={styles.image} />
//     <Text style={styles.title}>{title.title}</Text>
//     <Text style={styles.price}>{title.price}</Text>
//   </View>
// );

// export default function FoodComponent() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={Food}
//         renderItem={({ item }) => <Item title={item} />}
//         keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} // Ensure unique key
//         numColumns={numColumns} // Set the number of columns
//         key={numColumns} // Add key to force re-render when numColumns changes
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.95,
//     justifyContent: 'center',
//   },
//   item: {
//     flex: 1, // Adjust width to fill columns
//     margin: 10, // Add margin between items
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 16,
//     color: 'gray',
//   },
//   image: {
//     width: '100%', // Fill the available width
//     aspectRatio: 2 / 1, // Keep the aspect ratio
//   },
// });

//perfect code 
// import { StyleSheet, Image, FlatList, Dimensions } from 'react-native';
// import { Text, View } from '@/components/Themed';
// import Food from '@/assets/Data/Food';
// import React from 'react';
// import { Link } from 'expo-router';


// const numColumns = 2; 

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <View style={styles.imageContainer}>
//       <Image source={{ uri: title.image }} style={styles.image} />
//     </View>
//     <View style={styles.infoBox}>
//       <Text style={styles.title}>{title.title}</Text>
//       <Text style={styles.price}>{title.price}</Text>
//     </View>
//   </View>
// );

// export default function FoodComponent() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={Food}
//         renderItem={({ item }) => <Item title={item} />}
//         keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())} 
//         numColumns={numColumns}
//         key={numColumns} 
//         columnWrapperStyle={styles.columnWrapper} 
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10, 
//   },
//   columnWrapper: {
//     justifyContent: 'space-between', 
//   },
//   item: {
//     flex: 1,  
//     margin: 10,  
//     backgroundColor: '#fff', 
//     borderRadius: 10,  
//     borderWidth: 1,  
//     borderColor: '#ddd',  
//     overflow: 'hidden',  
//     aspectRatio: 1,  
//     alignItems: 'center',  
//     justifyContent: 'center',  
//   },
//   imageContainer: {
//     width: '80%', 
//     height: '50%', 
//     borderRadius: 100,  
//     overflow: 'hidden',  
//     marginBottom: 10,  
//     justifyContent: 'center', 
//     alignItems: 'center',  
//   },
//   image: {
//     width: '100%',  
//     height: '100%',  
//   },
//   infoBox: {
//     flex: 1,  
//     justifyContent: 'center', 
//     alignItems: 'center',  
//     padding: 10,  
//   },
//   title: {
//     fontSize: 15,
//     // fontWeight: 'bold',
//     marginBottom: 5,  
//   },
//   price: {
//     fontSize: 16,
//     // color: 'gray',
//     fontWeight: 'bold'
//   },
// });


//lab 3
// import { StyleSheet, Image, FlatList, Dimensions, Pressable } from 'react-native';
// import { Text, View } from '@/components/Themed';
// import Food from '@/assets/Data/Food';
// import React from 'react';
// import { Link } from 'expo-router';


// const numColumns = 2; 
// const Item = ({ title }) => (
//   <Link href={'/NewScreen'} asChild>
//     <Pressable style={styles.renderitem}>
//       <Image source={{ uri: title.image }} style={styles.image} />
//       <Text style={styles.title}>{title.title}</Text>
//       <Text style={styles.price}>{title.price}</Text>
//     </Pressable>
//   </Link>
// );


// export default function FoodComponent() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={Food}
//         renderItem={({ item }) => <Item title={item} />}
//         keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())} 
//         numColumns={numColumns}
//         key={numColumns} 
//         columnWrapperStyle={styles.columnWrapper} 
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10, 
//   },
//   columnWrapper: {
//     justifyContent: 'space-between', 
//   },
//   renderitem: {
//     flex: 1,
//     backgroundColor: 'lightgrey',
//     width: '50%',  
//     margin: 5,    
//     borderRadius: 10,  
//     overflow: 'hidden',
//     alignItems: 'center',  
//   },
//   image: {
//     width: '100%',  
//     height: 150,  // Set a fixed height for the image
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginVertical: 5,  
//   },
//   price: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 10,
//     fontWeight: 'bold'
//   },
// });


//lab 4  add to cart , image size 
// import { StyleSheet, Image, FlatList, Pressable } from 'react-native';
// import { Text, View } from '@/components/Themed';
// import Food from '@/assets/Data/Food';
// import React from 'react';
// import { useRouter } from 'expo-router';

// interface FoodItem {
//   image: string;
//   title: string;
//   price: string;
//   id: number; 
// }

// const numColumns = 2;

// const Item = ({ item }: { item: FoodItem }) => {
//   const router = useRouter();

//   const handlePress = () => {
//     router.push({
//       pathname: '/NewScreen',
//       params: { image: item.image, title: item.title, price: item.price }, 
//     });
//   };
  

//   return (
//     <Pressable style={styles.renderitem} onPress={handlePress}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.price}>{item.price}</Text>
//     </Pressable>
//   );
// };

// export default function FoodComponent() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={Food}
//         renderItem={({ item }) => <Item item={item} />}
//         keyExtractor={(item) => item.id.toString()} 
//         numColumns={numColumns}
//         key={numColumns} 
//         columnWrapperStyle={styles.columnWrapper} 
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10, 
//   },
//   columnWrapper: {
//     justifyContent: 'space-between', 
//   },
//   renderitem: {
//     flex: 1,
//     backgroundColor: 'lightgrey',
//     width: '50%',  
//     margin: 5,    
//     borderRadius: 10,  
//     overflow: 'hidden',
//     alignItems: 'center',  
//   },
//   image: {
//     width: '100%',  
//     height: 150,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginVertical: 5,  
//   },
//   price: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 10,
//     fontWeight: 'bold'
//   },
// });


// lab 5 type alias
import { StyleSheet, Image, View, Text, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Food from '@/assets/Data/Food';
import React from 'react';

 
type FoodItem = {
  image: string;
  title: string;
  price: string;
  id: number;
};

type ItemProps = {
  item: FoodItem;
};

const numColumns = 2;

const Item = ({ item }: ItemProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/NewScreen',
      params: { image: item.image, title: item.title, price: item.price },
    });
  };

  return (
    <Pressable style={styles.renderitem} onPress={handlePress}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      {/* <Text style={styles.price}>{item.price}</Text> */}
    </Pressable>
  );
};

 
type FoodComponentProps = {
  foodData?: FoodItem[];
};

export default function FoodComponent({ foodData }: FoodComponentProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={foodData || Food}  
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        key={numColumns}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  renderitem: {
    flex: 1,
    backgroundColor: 'lightgrey',
    maxWidth: '50%',
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
