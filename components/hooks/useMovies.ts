import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Movie {
    id: string;
    title: string;
    releaseYear: string;
}

interface MoviesResponse {
    title: string;
    description: string;
    movies: Movie[];
}

const useMovies = (apiUrl: string) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = () => {
        setLoading(true);
        setError(null); // Reset any previous error
        axios.get<MoviesResponse>(apiUrl)
            .then((response: AxiosResponse<MoviesResponse>) => {
                setMovies(response.data.movies);
            })
            .catch(err => {
                setError('Error fetching data');
                console.error('Error fetching data:', err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { movies, loading, error, fetchMovies };
};

export default useMovies;
