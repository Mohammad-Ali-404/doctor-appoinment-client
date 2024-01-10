import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/UserAxiosSecure';
import { GoTrash } from 'react-icons/go';
import { Helmet } from 'react-helmet-async';
import { FaUsers } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

const UserList = () => {
  const [axiosSecure] = useAxiosSecure() 
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const { data: users, isLoading, isError, refetch } = useQuery({ queryKey: 'users', queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users</div>;
  }
  const handleMakeAdmin = allUsers =>{
    axiosSecure.patch(`/users/admin/${allUsers._id}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount) {
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${allUsers.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
  }
  const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
  };
  const offset = currentPage * itemsPerPage;
  const paginatedUsers = users.slice(offset, offset + itemsPerPage);
  const handleDeleteUser = (userData) => {
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
          .delete(`/users/${userData._id}`)
          .then((res) => {
            if (res?.data?.acknowledged) {
              refetch();
              Swal.fire("Deleted!", "user has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("error:", error);
          });
      }
    });
  };
  return (
    <div>
        <Helmet><title>All Users | One Care</title></Helmet>
        <ul>
                <div>
                    <div className='pt-10'>
                        {/* <DashboardTitle title='Manage Volunteer' subTitle="Added Create daily new causes"/> */}
                    </div>
                    <div className='bg-white p-8 rounded-xl mt-10'>
                        <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
                            <div className="overflow-x-auto">
                                <table className="divide-y divide-gray-200">
                                    <thead className="bg-gray-50 text-slate-800">
                                        <tr className=''>
                                        <th className="py-3 pl-2 md:py-5 text-left text-base md:text-lg pe-2">
                                            Image
                                        </th>
                                        <th className="py-3 md:py-5 text-left text-base md:text-lg">
                                            Title
                                        </th>
                                        <th className="py-3 md:py-5 pe-6 text-left text-base md:text-lg">
                                            Role
                                        </th>
                                        <th className="py-3 pr-2 md:py-5 text-left text-base md:text-lg">
                                            Delete
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {paginatedUsers.map((allUsers) => (
                                            <tr key={allUsers._id}>
                                            <td className="py-2 md:py-4">
                                                <img
                                                src={allUsers.photo}
                                                alt="user"
                                                className="w-12 h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
                                                />
                                            </td>
                                            <td className="py-2 xl:text-lg md:text-sm text-xs md:py-4 w-40 md:w-full">
                                                {allUsers.name}
                                            </td>
                                            <td className=" px-4">
                                            <div className="bg-gray-100 py-2 rounded-md">
                                                {
                                                    allUsers.role === 'admin' ? (
                                                        <span className='text-base p-3 font-semibold'>Admin</span>
                                                    ) : (
                                                        <FaUsers onClick={() => handleMakeAdmin(allUsers)} className="sm:text-xl text-base mx-auto cursor-pointer text-cyan-600" />
                                                    )
                                                }
                                            </div>
                                            </td>
                                            <td className="">
                                                <div className="bg-gray-100 w-2/3 py-2 rounded-md">
                                                <GoTrash
                                                    onClick={() => {
                                                    handleDeleteUser(allUsers);
                                                    }}
                                                    className="sm:text-xl text-base mx-auto cursor-pointer text-red-500"
                                                />
                                                </div>
                                            </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='my-4'>
                                <ReactPaginate
                                    previousLabel={'Previous'}
                                    nextLabel={'Next'}
                                    breakLabel={'...'}
                                    breakClassName={'text-gray-600'}
                                    pageCount={Math.ceil(users.length / itemsPerPage)}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={'flex justify-center gap-2'}
                                    subContainerClassName={'flex items-center space-x-4'}
                                    activeClassName={'bg-blue-500 text-white font-semibold border border-blue-500 py-2 -mt-2 rounded-full'}
                                    pageLinkClassName={'text-slate-800 hover:bg-blue-100 border border-blue-500 px-4 py-2 rounded-full'}
                                    previousLinkClassName={'text-slate-800 hover:bg-blue-100 border border-blue-500 px-4 py-2 rounded-full'}
                                    nextLinkClassName={'text-blue-500 hover:bg-blue-100 border border-blue-500 px-4 py-2 rounded-full'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
         </ul>
    </div>
  );
};

export default UserList;
