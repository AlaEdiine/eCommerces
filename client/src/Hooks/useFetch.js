import { useEffect, useState } from "react";
import API from "../api/axios";

const useFetch  = (url) =>  {
  const [load, setload] = useState(false);
  const [error, setError] = useState(false);
  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setload(true);
      try {
        const { data: allProducts } = await API.get(url);
        setDATA(allProducts);
      } catch (err) {
        setError(err);
      }
      setload(false);
    };
    fetchData();
  }, [url]);

  return { DATA, setDATA, load, error };
}

export default useFetch
