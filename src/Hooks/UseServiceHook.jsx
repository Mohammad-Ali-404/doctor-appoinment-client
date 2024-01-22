import { useEffect, useState } from 'react';

const UseServiceHook = () => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://doctor-appoinment-server-gamma.vercel.app/service')
        .then(res => res.json())
        .then(data => setService(data))
        setLoading(false)
    },[])
    return [service, loading]
};

export default UseServiceHook;