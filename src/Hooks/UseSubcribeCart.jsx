import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./UserAxiosSecure";

const UseSubscribeCart = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    // useQuery hook to fetch subscription cart data
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['subscribecart', user?.email], // The query key includes the type of query and the user's email
        queryFn: async () => {
            try {
                // Fetch subscription cart data using axiosSecure
                const res = await axiosSecure.get(`/subscribecart?email=${user?.email}`);
                return res.data;
            } catch (error) {
                console.error("Error fetching cart data:", error);
                throw error;
            }
        },
    });

    return [cart, refetch]; // Return the cart data and the refetch function
};

export default UseSubscribeCart;
