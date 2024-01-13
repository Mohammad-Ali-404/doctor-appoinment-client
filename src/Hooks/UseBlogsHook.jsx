import { useEffect, useState } from 'react';
import useAxiosSecure from './UserAxiosSecure';

const UseBlogsHook = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get('/blogs');
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure]);

  return [blogs, loading];
};

export default UseBlogsHook;