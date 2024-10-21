import { useState } from 'react';
import axios from 'axios';

interface Product {
  title: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

const usePostProduct = (apiUrl: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postProduct = (product: Product) => {
    setLoading(true);
    setError(null);

    axios.post(apiUrl, product)
      .then(() => {
        console.log('Product posted successfully');
      })
      .catch((err) => {
        setError('Error posting product');
        console.error('Error posting product:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { postProduct, loading, error };
};

export default usePostProduct;
