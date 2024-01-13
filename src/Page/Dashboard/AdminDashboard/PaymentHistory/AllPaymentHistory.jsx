import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/UserAxiosSecure';
import { Helmet } from 'react-helmet-async';

const AllPaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [axiosSecure] = useAxiosSecure() 
  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await axiosSecure.get('/payment-history');
        setPaymentHistory(response.data);
      } catch (error) {
        setError('Error fetching payment history');
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentHistory();
  }, [axiosSecure]);

  if (loading) {
    return <p>Loading payment history...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div >
        <Helmet><title>Payment History | One Care</title></Helmet>
        <div className="pt-10">
            {/* <DashboardTitle title='Payment History' subTitle="Manage all Donar details" /> */}
        </div>
    <div className='mt-10 bg-white p-8 rounded-xl'>
      <h2 className="text-xl py-5">Total Payments: {paymentHistory.length}</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 md:py-5 text-base md:text-lg px-3 md:ps-5">
                Number
              </th>
              <th className="py-3 md:py-5 text-left text-base md:text-lg">
                Name
              </th>
              <th className="py-3 md:py-5 text-left text-base md:text-lg">
                Payment
              </th>
              <th className="py-3 md:py-5 text-justify pl-6 text-base md:text-lg">
                Subscription
              </th>
              <th className="py-3 md:py-5 text-left text-base md:text-lg">
                Email
              </th>
              <th className="py-3 md:py-5 text-left text-base md:text-lg">
                Transaction Id
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paymentHistory.map((payment, index) => (
              <tr key={payment._id}>
                <th className="py-2 md:py-4">{index + 1}</th>
                <td className="py-2 md:py-4">
                  <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-3">
                    {payment.name}
                  </p>
                </td>
                <td className="py-2 md:py-4">
                  <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-3">
                    {payment.price}$
                  </p>
                </td>
                <td className="py-2 md:py-4">
                  <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-3">
                    {payment.planName}
                  </p>
                </td>
                <td className="py-2 md:py-4">
                  <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-3">
                    {payment.email}
                  </p>
                </td>
                <td className="py-2 md:py-4">
                  <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-3">
                    {payment.transactionId}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default AllPaymentHistory;