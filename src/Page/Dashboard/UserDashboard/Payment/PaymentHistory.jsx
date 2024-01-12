import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosSecure from "../../../../Hooks/UserAxiosSecure";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payment', user?.email], // The query key includes the type of query and the user's email
        queryFn: async () => {
            try {
                // Fetch subscription cart data using axiosSecure
                const res = await axiosSecure.get(`/payments?email=${user?.email}`);
                return res.data;
            } catch (error) {
                console.error("Error fetching cart data:", error);
                throw error;
            }
        },
    });
    return (
        <div>
            <h2 className="text3-xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>price</th>
                            <th>Subscription Plan</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.planName}</td>
                            <td>{payment.transactionId}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;