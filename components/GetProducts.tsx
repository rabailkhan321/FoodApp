//without custom hook 
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
// import axios, { AxiosResponse } from 'axios';

// interface Movie {
//     id: string;
//     title: string;
//     releaseYear: string;
// }

// interface MoviesResponse {
//     title: string;
//     description: string;
//     movies: Movie[];
// }

// const YourComponent = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string | null>(null);

//     const apiUrl = 'https://reactnative.dev/movies.json';

//     const fetchMovies = () => {
//         setLoading(true);
//         setError(null); // Reset any previous error
//         axios.get<MoviesResponse>(apiUrl)
//             .then((response: AxiosResponse<MoviesResponse>) => {
//                 setMovies(response.data.movies);
//             })
//             .catch(err => {
//                 setError('Error fetching data');
//                 console.error('Error fetching data:', err);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     };

//     return (
//         <View style={styles.container}>
//             <Button title="Get Movies" onPress={fetchMovies} />
//             {loading && <Text>Loading...</Text>}
//             {error && <Text style={styles.error}>{error}</Text>}
//             <FlatList
//                 data={movies}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <View style={styles.item}>
//                         <Text style={styles.title}>{item.title}</Text>
//                         <Text style={styles.releaseYear}>Release Year: {item.releaseYear}</Text>
//                     </View>
//                 )}
//                 contentContainerStyle={movies.length === 0 && !loading && styles.empty}
//             />
//             {movies.length === 0 && !loading && <Text>No movies found.</Text>}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#fff',
//     },
//     item: {
//         marginBottom: 16,
//         padding: 10,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 8,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     releaseYear: {
//         fontSize: 14,
//         color: '#555',
//     },
//     error: {
//         color: 'red',
//         marginVertical: 10,
//     },
//     empty: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1,
//     },
// });

// export default YourComponent;


//with custom hook
import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import useMovies from './hooks/useMovies'; // Assuming the hook is in the same folder

const YourComponent = () => {
    const apiUrl = 'https://reactnative.dev/movies.json'; // You can change this URL
    const { movies, loading, error, fetchMovies } = useMovies(apiUrl);

    return (
        <View style={styles.container}>
            <Button title="Get Movies" onPress={fetchMovies} />
            {loading && <Text>Loading...</Text>}
            {error && <Text style={styles.error}>{error}</Text>}
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.releaseYear}>Release Year: {item.releaseYear}</Text>
                    </View>
                )}
                contentContainerStyle={movies.length === 0 && !loading && styles.empty}
            />
            {movies.length === 0 && !loading && <Text>No movies found.</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    item: {
        marginBottom: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    releaseYear: {
        fontSize: 14,
        color: '#555',
    },
    error: {
        color: 'red',
        marginVertical: 10,
    },
    empty: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default YourComponent;
