import { useState, useEffect } from 'react';
import { fetchTransactionData } from '../utils/api';

const useFetch = (customerId, monthRange) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchTransactionData(customerId, monthRange)
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [customerId, monthRange]);

  return { data, loading, error };
};

export default useFetch;
