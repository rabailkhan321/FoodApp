// import {View, Text, Image, StyleSheet} from 'react-native'

// const NewScreen = () => {

//     return (
//         <View>

//             <Text style={{fontSize:50}}> New Screen </Text>    

//         </View>
//     )
// }

// export default NewScreen;

// const styles = StyleSheet.create({
   
//     image: {
//       width: '100%',
//       aspectRatio: 1,
//       resizeMode:'contain'
//     }
//   });



//lab3
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';

// const NewScreen = () => {
//   const { image = '', title = '' } = useLocalSearchParams() as { image?: string; title?: string };

//   return (
//     <View style={styles.container}>
//       {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
//       {title ? <Text style={styles.title}>{title}</Text> : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: '100%',
//     height: 300, 
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default NewScreen;


//lab 4
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';

// const NewScreen = () => {
//   const { image = '', title = '', price = '' } = useLocalSearchParams() as { image?: string; title?: string; price?: string };

//   return (
//     <View style={styles.container}>
//       {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
//       {title ? <Text style={styles.title}>{title}</Text> : null}
//       {price ? <Text style={styles.price}>{price}</Text> : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: '100%',
//     height: 300, 
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 20,
//     color: 'gray',
//     marginTop: 10,
//   },
// });

// export default NewScreen;


// import { useState } from 'react';
// import { View, Text, Image, StyleSheet, Button } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';

// const NewScreen = () => {
//   const { image = '', title = '', price = '' } = useLocalSearchParams() as { image?: string; title?: string; price?: string };
  

//   const [cartItems, setCartItems] = useState<{ image: string, title: string, price: string }[]>([]);

 
//   const addToCart = () => {
//     const newItem = { image, title, price };
//     setCartItems([...cartItems, newItem]); 
//     console.log('Cart Items:', cartItems); 
//   };

//   return (
//     <View style={styles.container}>
//       {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
//       {title ? <Text style={styles.title}>{title}</Text> : null}
//       {price ? <Text style={styles.price}>{price}</Text> : null}


//       <Button title="Add to Cart +" onPress={addToCart} />

    
//       {cartItems.length > 0 && (
//         <View style={styles.cartContainer}>
//           <Text style={styles.cartTitle}>Cart Items:</Text>
//           {cartItems.map((item, index) => (
//             <View key={index} style={styles.cartItem}>
//               <Text>{item.title} - {item.price}</Text>
//             </View>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: '100%',
//     height: 300, 
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 20,
//     color: 'gray',
//     marginTop: 10,
//   },
//   cartContainer: {
//     marginTop: 20,
//     width: '100%',
//   },
//   cartTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cartItem: {
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 5,
//     borderRadius: 5,
//   },
// });

// export default NewScreen;



//lab 5
 


// import { useState } from 'react';
// import { View, Text, Image, StyleSheet, Pressable, Button } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';

// const NewScreen = () => {
//   // Retrieving passed parameters for the image, title, and price
//   const { image = '', title = '', price = '' } = useLocalSearchParams() as { image?: string; title?: string; price?: string };

//   // State to manage selected size
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   // State to manage items in the cart
//   const [cartItems, setCartItems] = useState<{ image: string, title: string, price: string, size: string | null }[]>([]);

//   // Handler for size selection
//   const handleSizeSelect = (size: string) => {
//     setSelectedSize(size);
//   };

//   // Handler to add the item to the cart
//   const addToCart = () => {
//     const newItem = { image, title, price, size: selectedSize };
//     setCartItems([...cartItems, newItem]);  
//     console.log('Cart Items:', cartItems);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Display Image, Title, and Price */}
//       {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
//       {title ? <Text style={styles.title}>{title}</Text> : null}
//       {price ? <Text style={styles.price}>{price}</Text> : null}

//       {/* Size Selection Buttons */}
//       <View style={styles.sizeContainer}>
//         {['Small', 'Medium', 'Large'].map((size) => (
//           <Pressable
//             key={size}
//             onPress={() => handleSizeSelect(size)}
//             style={[
//               styles.sizeButton,
//               selectedSize === size && styles.selectedSizeButton,  
//             ]}
//           >
//             <Text
//               style={[
//                 styles.sizeText,
//                 selectedSize === size && styles.selectedSizeText,  
//               ]}
//             >
//               {size}
//             </Text>
//           </Pressable>
//         ))}
//       </View>

//       {/* Add to Cart Button */}
//       <Button title="Add to Cart +" onPress={addToCart} />

//       {/* Display Cart Items */}
//       {cartItems.length > 0 && (
//         <View style={styles.cartContainer}>
//           <Text style={styles.cartTitle}>Cart Items:</Text>
//           {cartItems.map((item, index) => (
//             <View key={index} style={styles.cartItem}>
//               <Text>{item.title} - {item.price} ({item.size})</Text>
//             </View>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 20,
//     color: 'gray',
//     marginTop: 10,
//   },
//   sizeContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//     justifyContent: 'space-between',
//   },
//   sizeButton: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'grey',
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   selectedSizeButton: {
//     backgroundColor: 'red',
//   },
//   sizeText: {
//     fontSize: 16,
//     color: 'grey',
//   },
//   selectedSizeText: {
//     color: 'white',
//   },
//   cartContainer: {
//     marginTop: 20,
//     width: '100%',
//   },
//   cartTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   cartItem: {
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 5,
//     borderRadius: 5,
//   },
// });

// export default NewScreen;


import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


type PizzaSize = 'Small' | 'Medium' | 'Large';

const NewScreen = () => {

  const { image = '', title = '', price = '' } = useLocalSearchParams() as { image?: string; title?: string; price?: string };

  const [selectedSize, setSelectedSize] = useState<PizzaSize | null>(null);

  const [cartItems, setCartItems] = useState<{ image: string, title: string, price: string, size: PizzaSize | null }[]>([]);

  const handleSizeSelect = (size: PizzaSize) => {
    setSelectedSize(size);
  };

  const addToCart = () => {
    const newItem = { image, title, price, size: selectedSize };
    setCartItems([...cartItems, newItem]);
    console.log('Cart Items:', cartItems);
  };

  return (
    <View style={styles.container}>
      {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {price ? <Text style={styles.price}>{price}</Text> : null}

      <View style={styles.sizeContainer}>
        {(['Small', 'Medium', 'Large'] as PizzaSize[]).map((size) => (
          <Pressable
            key={size}
            onPress={() => handleSizeSelect(size)}
            style={[
              styles.sizeButton,
              selectedSize === size && styles.selectedSizeButton,
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                selectedSize === size && styles.selectedSizeText,
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Button title="Add to Cart +" onPress={addToCart} />

      {cartItems.length > 0 && (
        <View style={styles.cartContainer}>
          <Text style={styles.cartTitle}>Cart Items:</Text>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Text>{item.title} - {item.price} ({item.size})</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'gray',
    marginTop: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  sizeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedSizeButton: {
    backgroundColor: 'red',
  },
  sizeText: {
    fontSize: 16,
    color: 'grey',
  },
  selectedSizeText: {
    color: 'white',
  },
  cartContainer: {
    marginTop: 20,
    width: '100%',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default NewScreen;
