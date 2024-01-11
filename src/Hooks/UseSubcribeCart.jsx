import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./UserAxiosSecure";

const UseSubcribeCart = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['subscribecart', user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/subscribecart?email=${user?.email}`);
                return res.data;
            } catch (error) {
                console.error("Error fetching cart data:", error);
                throw error;
            }
        },
    });
    return [cart, refetch]
    
};

export default UseSubcribeCart;