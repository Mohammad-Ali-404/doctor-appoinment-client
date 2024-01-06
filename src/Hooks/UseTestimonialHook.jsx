import { useEffect, useState } from 'react';

const UseTestimonialHook = () => {
    const [testimonial, setTestimonial] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('http://localhost:5000/testimonial')
        .then(res => res.json())
        .then(data => setTestimonial(data))
        setLoading(false)
    },[])
    return [testimonial, loading]
};

export default UseTestimonialHook;