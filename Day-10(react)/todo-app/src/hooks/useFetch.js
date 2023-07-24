import { useEffect, useState } from "react";
import { request } from "../services/axios";

const useFetch = (url, data, method) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const todos = await request(url, data, "get");
        setResponse(todos);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetch();
  }, [url, data, method]);

  return { data:response, isLoading, error };
};

export default useFetch;
