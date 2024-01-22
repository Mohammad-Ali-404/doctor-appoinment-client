/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../Hooks/UserAxiosSecure';
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateMemberProfile = ({singleTeamMemberData, setIsUpdateMemberModalOpen}) => {
    const [loading, setLoading] = useState(false);
    const [axiosSecure] = useAxiosSecure()
    const closeMemberUpdateModal = () => {
        setIsUpdateMemberModalOpen(false);
      };
      const { register, handleSubmit, reset, formState: { errors }, } = useForm();
      const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
      const onSubmit = async (data) =>{
      const formData = new FormData()
      formData.append('image', data.image[0])
      fetch(img_hosting_url, {
        method:'POST',
        body:formData
      })
      .then(res => res.json())
      .then(imgRes =>{
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          const {name, specialist, degree, educationalBackground, experienceAndSkills, phone, registrationNumber, email, selfDescription, facebook, instagram, twitter} = data;
          const TeamMemberData = {name, specialist, degree, educationalBackground, experienceAndSkills, phone, registrationNumber, email, selfDescription, facebook, instagram, twitter, image:imgURL}
          axiosSecure.put(`/team/${singleTeamMemberData._id}`, TeamMemberData)
          .then(data=>{
            if (data.data.insertedId) {
                reset();
            }
          })
          .finally(() => {
            Swal.fire({
              title: 'Success!',
              text: 'Doctor Profile Update Successfully',
              icon: 'success',
              confirmButtonText: 'Cool',
            });
          })
        }
      })
      }
    return (
        <div>
             <div>
            <div>
                <div className="fixed top-0 left-0 flex sm:w-full sm:h-full  justify-center items-center bg-black/20 bg-opacity-50 z-40 px-2 py-6 overflow-y-visible">
                    <div className="bg-white p-3 2xl:p-6 rounded-md">
                    <h2 className="text-lg 2xl:text-xl font-semibold mb-1 2xl:mb-2">
                        Update Volunteer profile
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="sm:max-w-4xl max-h-screen mx-auto sm:p-6 rounded-md">
                                <div className="mb-4 w-full ">
                                    <label htmlFor="name" className="text-sm font-medium">
                                    Upload Doctor Image
                                    </label>
                                    <input type="file" {...register('image')} className="mt-1 p-2 w-full border rounded-md" placeholder="John Doe"/>
                                </div>
                            <div className='flex gap-5'>
                                <div className="mb-4 w-full ">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Full Name
                                    </label>
                                    <input defaultValue={singleTeamMemberData?.name || ""} type="text" {...register('name')} id="name" className="mt-1 p-2 w-full border rounded-md"placeholder="John Doe"/>
                                </div>
                                <div className="mb-4 w-full">
                                    <label htmlFor="email" className=" text-sm font-medium">
                                        Email
                                    </label>
                                    <input defaultValue={singleTeamMemberData?.email || ""} type="email" {...register('email')} placeholder="john.doe@example.com" className="w-full p-2 border rounded-md"  />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-600 text-sm font-medium">Self Description:</label>
                                <textarea defaultValue={singleTeamMemberData?.selfDescription || ""} {...register('selfDescription')} className="w-full p-2 border rounded-md"  />
                            </div>
                            <div className='flex gap-5'>
                                <div className="mb-4 w-full ">
                                    <label htmlFor="name" className="text-sm font-medium">
                                    Specialist
                                    </label>
                                    <input defaultValue={singleTeamMemberData?.specialist || ""} type="text" {...register('specialist')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className="mb-4 w-full">
                                    <label htmlFor="degree" className=" text-sm font-medium">
                                    Degree
                                    </label>
                                    <input defaultValue={singleTeamMemberData?.degree || ""} type="text" {...register('degree')} className="w-full p-2 border rounded-md"  />
                                </div>
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="" className=" text-sm font-medium">
                                    Educational Background
                                </label>
                                <input defaultValue={singleTeamMemberData?.educationalBackground || ""} type="text" {...register('educationalBackground')} className="w-full p-4 border rounded-md"  />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className=" text-sm font-medium">
                                    Experience & Skill
                                </label>
                                <textarea defaultValue={singleTeamMemberData?.experienceAndSkills || ""} {...register('experienceAndSkills')} className="w-full p-2 border rounded-md"  />
                            </div>
                            <div className='flex gap-5'>
                                <div className="mb-4 w-full ">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Phone
                                    </label>
                                    <input defaultValue={singleTeamMemberData?.phone || ""} type="text" {...register('phone')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className="mb-4 w-full">
                                    <div className="mb-4">
                                        <label className="text-gray-600 text-sm font-medium">Registration Number:</label>
                                        <input defaultValue={singleTeamMemberData?.registrationNumber || ""} type="text" {...register('registrationNumber')} className="w-full p-2 border rounded-md"  />
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className="mb-4 w-1/3">
                                    <label className="text-gray-600 text-sm font-medium">Facebook:</label>
                                    <input defaultValue={singleTeamMemberData?.facebook || ""} type="text" {...register('facebook')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className="mb-4 w-1/3">
                                    <label className="text-gray-600 text-sm font-medium">Instagram:</label>
                                    <input defaultValue={singleTeamMemberData?.instagram || ""} type="text" {...register('instagram')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className="mb-4 w-1/3">
                                    <label className="text-gray-600 text-sm font-medium">Twitter:</label>
                                    <input defaultValue={singleTeamMemberData?.twitter || ""} type="text" {...register('twitter')} className="w-full p-2 border rounded-md"  />
                                </div>
                            </div>
                        </div>
                        <button
                        className="bg-green-500 text-white px-4 py-1 2xl:py-2 rounded-md hover:bg-green-700 duration-500"
                        type="submit"
                        >
                        {loading ? "Updating..." : "Update"}
                        </button>
                        <button
                        onClick={closeMemberUpdateModal}
                        className="bg-red-500 text-white px-4 py-1 2xl:py-2 rounded-md ml-2 hover:bg-red-700 duration-500"
                        >
                        Cancel
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateMemberProfile;