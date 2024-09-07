import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!url) return; // Không fetch nếu không có URL

        const fetchData = async () => {
            setLoading(true);

            // Lấy token từ localStorage hoặc sessionStorage (nếu có)
            const token = localStorage.getItem('token'); // hoặc sessionStorage.getItem('token')

            try {
                const res = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        // Thêm token vào header nếu có
                        'Authorization': `Bearer ${token}`
                    },
                    credentials: 'include', // nếu bạn dùng cookie để xác thực
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
