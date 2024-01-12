import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UserAxiosSecure";
import { GoTrash } from "react-icons/go";
import UseSubcribeCart from "../../../../Hooks/UseSubcribeCart";

const SubscribeCart = () => {
    const { user } = useContext(AuthContext);
    const [cart] = UseSubcribeCart();
    console.log(cart);
    const [axiosSecure] = useAxiosSecure()
    // useQuery hook to fetch cart data
    const handleDeleteCart = (cart) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure
              .delete(`/subscribecart/${cart._id}`)
              .then((res) => {
                if (res?.data?.acknowledged) {
                  Swal.fire("Deleted!", "cart has been deleted.", "success");
                }
              })
              .catch((error) => {
                console.error("error:", error);
              });
          }
        });
      };
    return (
        <div className="mt-8 p-4 bg-gray-100 border rounded">
    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
    <table className="w-full border-collapse border">
        <thead>
            <tr>
                <th className="p-2 border">Plan</th>
                <th className="p-2 border">Price</th>
            </tr>
        </thead>
        <tbody>
        {user?.email && cart.map(subscribe => (
    // Check if the item's email matches the user's email before rendering
    subscribe.email === user?.email && (
        <tr key={subscribe._id}>
            <td className="p-2 border">{subscribe.name}</td>
            <td className="p-2 border">${subscribe.price}/month</td>
            <td className="">
                <div className="bg-gray-100 w-2/3 py-2 rounded-md">
                    <GoTrash
                        onClick={() => {
                            handleDeleteCart(subscribe);
                        }}
                        className="sm:text-xl text-base mx-auto cursor-pointer text-red-500"
                    />
                </div>
            </td>
        </tr>
    )
))}
        </tbody>
    </table>
    <div className="mt-4">
       <Link to='/dashboard/payment'><button className="bg-blue-500 text-white py-2 px-4 rounded">Proceed to Payment</button></Link>
    </div>
</div>

    );
};

export default SubscribeCart;
