import { useEffect, useState } from 'react';

const UseTestimonialHook = () => {
    const [testimonial, setTestimonial] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://doctor-appoinment-server-gamma.vercel.app/testimonial')
        .then(res => res.json())
        .then(data => setTestimonial(data))
        setLoading(false)
    },[])
    return [testimonial, loading]
};

export default UseTestimonialHook;