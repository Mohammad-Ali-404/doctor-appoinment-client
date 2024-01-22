import { useEffect, useState } from 'react';
const UseTeamMemberHook = () => {
    const [teamMember, setTeamMember] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetch('https://doctor-appoinment-server-gamma.vercel.app/team')
        .then(res => res.json())
        .then(data => setTeamMember(data))
        setLoading(false)
    },[])
    return [teamMember, loading]
};

export default UseTeamMemberHook;