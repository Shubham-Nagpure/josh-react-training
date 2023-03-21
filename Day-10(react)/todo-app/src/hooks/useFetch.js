import { useEffect, useState } from "react";
import getTodos from "../services/getTodos";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const todos = await getTodos();
        setData(todos);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetch();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
