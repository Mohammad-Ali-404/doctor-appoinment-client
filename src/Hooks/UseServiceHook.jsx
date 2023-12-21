import { useEffect, useState } from 'react';

const UseServiceHook = () => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setService(data))
        setLoading(false)
    },[])
    return [service, loading]
};

export default UseServiceHook;