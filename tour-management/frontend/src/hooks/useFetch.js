import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return; // Không fetch nếu không có URL

    const fetchData = async () => {
      setLoading(true);

      // Lấy token từ localStorage
      const token = localStorage.getItem("token");

      // Prepare headers
      const headers = {
        "Content-Type": "application/json",
      };

      // Add Authorization header if token exists
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      try {
        const res = await fetch(url, {
          headers: headers,
          credentials: "include", // for cookies
        });

        if (!res.ok) {
          setError("Failed to fetch");
        } else {
          const result = await res.json();
          setData(result.data);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
