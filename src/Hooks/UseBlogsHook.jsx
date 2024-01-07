import { useEffect, useState } from 'react';

const UseBlogsHook = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
        setLoading(false)
    },[])
    return [blogs, loading]
};

export default UseBlogsHook;