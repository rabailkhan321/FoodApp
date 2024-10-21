//without custom hook 
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// const PostProduct = () => {
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const [description, setDescription] = useState('');
//   const [available, setAvailable] = useState(true);

//   const handleSubmit = () => {

//     console.log('Submitting data:', {
//       title,
//       price: Number(price),
//       image,
//       description,
//       available,
//     });

//     // const headers= {
//     //   'Content-Type': 'application/json'
//     // }
//     // axios.post('https://foodapi-zohaib.vercel.app/products', {
//     //   title,
//     //   price: Number(price),
//     //   image,
//     //   description,
//     //   available,
//     // }, {headers:headers})

//     axios.post('https://foodapi-zohaib.vercel.app/products', {
//       title,
//       price: Number(price),
//       image,
//       description,
//       available,
//     })
//     .then((response) => {
      
//         console.log('posting')
      
//     })
//     .catch((error) => {
//       console.log('error')
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Title</Text>
//       <TextInput
//         style={styles.input}
//         value={title}
//         onChangeText={setTitle}
//         placeholder="Enter title"
//       />

//       <Text style={styles.label}>Price</Text>
//       <TextInput
//         style={styles.input}
//         value={price}
//         onChangeText={setPrice}
//         placeholder="Enter price"
//         keyboardType="numeric"
//       />

//       <Text style={styles.label}>Image URL</Text>
//       <TextInput
//         style={styles.input}
//         value={image}
//         onChangeText={setImage}
//         placeholder="Enter image URL"
//       />

//       <Text style={styles.label}>Description</Text>
//       <TextInput
//         style={styles.input}
//         value={description}
//         onChangeText={setDescription}
//         placeholder="Enter description"
//       />

//       <Button title="Post Product" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
// });

// export default PostProduct;


//with custom hook 
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import usePostProduct from './hooks/usePostProduct'; // Import the custom hook

const PostProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [available, setAvailable] = useState(true);

  const apiUrl = 'https://foodapi-zohaib.vercel.app/products'; // You can dynamically pass the API URL
  const { postProduct, loading, error } = usePostProduct(apiUrl);

  const handleSubmit = () => {
    const product = {
      title,
      price: Number(price),
      image,
      description,
      available,
    };

    console.log('Submitting product:', product);
    postProduct(product);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Image URL</Text>
      <TextInput
        style={styles.input}
        value={image}
        onChangeText={setImage}
        placeholder="Enter image URL"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />

      <Button title="Post Product" onPress={handleSubmit} disabled={loading} />

      {loading && <Text>Posting product...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default PostProduct;
