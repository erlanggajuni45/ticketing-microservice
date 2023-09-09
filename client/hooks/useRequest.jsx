import { useState } from 'react';
import axios from 'axios';

export default function useRequest({ url, method, body }) {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    setErrors(null);
    try {
      const response = await axios[method](url, body);
      return response.data;
    } catch (err) {
      console.log(err);
      setErrors(err.response.data.errors);
    }
  };

  return { doRequest, errors };
}
