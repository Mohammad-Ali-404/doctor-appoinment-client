import React from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import Swal from 'sweetalert2';
// import UpdateVolunteerProfile from './UpdateVolunteerProfile/UpdateVolunteerModal';
import useAxiosSecure from '../../../../Hooks/UserAxiosSecure';
import UpdateMemberProfile from './UpdateMemberProfile/UpdateMemberProfile';
import ReactPaginate from 'react-paginate';

const ManageTeamMember = () => {
    const [isUpdateMemberModalOpen, setIsUpdateMemberModalOpen] = useState(false);
    const [memberId, setMemberId] = useState("")
    const [singleTeamMemberData, setSingleTeamMemberData] = useState([])
    const [axiosSecure] = useAxiosSecure()
    const itemsPerPage = 7;
    const [currentPage, setCurrentPage] = useState(0);
    const { data: allTeamMemberData = [], refetch } = useQuery({
        queryKey: ["allTeamMemberData"],
        queryFn: async () => {
          const response = await axiosSecure.get(`/team`);
          return response.data;
        },
      });
      console.log("allTeamMemberData", allTeamMemberData);
      const handleDeleteVolunteer = (memberData) => {
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
              .delete(`/team/${memberData._id}`)
              .then((res) => {
                if (res?.data?.acknowledged) {
                  refetch();
                  Swal.fire("Deleted!", "Doctor has been deleted.", "success");
                }
              })
              .catch((error) => {
                console.error("error:", error);
              });
          }
        });
      };
      const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };
    const offset = currentPage * itemsPerPage;
    const paginatedMember = allTeamMemberData.slice(offset, offset + itemsPerPage);
    return (
        <div>
             <div>
             <h1 className='text-xl font-semibold text-center py-5'>Manage All Team Member</h1>

            <div className='bg-white p-8 rounded-xl mt-10'>
            <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-slate-800">
                <tr className=''>
                  <th className="py-3 pl-2 md:py-5 text-left text-base md:text-lg pe-2">
                    Image
                  </th>
                  <th className="py-3 md:py-5 text-left text-base md:text-lg">
                    Name
                  </th>
                  <th className="py-3 md:py-5 text-left text-base md:text-lg">
                    Email
                  </th>
                  <th className="py-3 md:py-5 pe-6 text-left text-base md:text-lg">
                    Update
                  </th>
                  <th className="py-3 pr-2 md:py-5 text-left text-base md:text-lg">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedMember.map((teamData) => (
                  <>
                    <tr key={teamData._id}>
                      <td className="py-2 md:py-4">
                        <img
                          src={teamData.image}
                          alt="causes"
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
                        />
                      </td>
                      <td className="py-2 xl:text-lg md:text-sm text-xs md:py-4 w-40 md:w-full">
                        {teamData.name}
                      </td>
                      <td className="py-2 xl:text-lg md:text-sm text-xs md:py-4 w-40 md:w-full">
                        {teamData.email}
                      </td>
                      <td className="py-2 md:py-4">
                        <div className="bg-gray-100 p-1 ms-3 md:p-2 rounded-lg">
                          <FaRegEdit
                            onClick={() => {
                              setIsUpdateMemberModalOpen(true);
                              setMemberId(teamData?._id);
                              setSingleTeamMemberData(teamData);
                            }}
                            className="w-3 h-3 md:w-4 md:h-4 cursor-pointer text-blue-600"
                          />
                        </div>
                      </td>
                      <td className="py-2 md:py-4">
                        <div className="bg-gray-100 p-1 ms-3 md:p-2 rounded-lg">
                          <GoTrash
                            onClick={() => {
                              handleDeleteVolunteer(teamData);
                            }}
                            className="w-3 h-3 md:w-4 md:h-4 cursor-pointer text-red-500"
                          />
                        </div>
                      </td>
                    </tr>
                  </>
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
                                    pageCount={Math.ceil(allTeamMemberData.length / itemsPerPage)}
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
                {isUpdateMemberModalOpen && (
                <UpdateMemberProfile
                key={memberId._id}
                singleTeamMemberData={singleTeamMemberData}
                setIsUpdateMemberModalOpen={setIsUpdateMemberModalOpen}
                />
            )}
        </div>
        </div>
        </div>
    );
};

export default ManageTeamMember;