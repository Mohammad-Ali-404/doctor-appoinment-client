/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../Hooks/UserAxiosSecure';
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateMemberProfile = ({singleBlogData, setIsUpdateBlogModalOpen}) => {
    const [loading, setLoading] = useState(false);
    const [axiosSecure] = useAxiosSecure()
    const closeBlogUpdateModal = () => {
        setIsUpdateBlogModalOpen(false);
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
          const {name, title, details, testimonial, category, additional_description} = data;
          const blogData = {name, title, details, testimonial, category, additional_description, image:imgURL}
          axiosSecure.put(`/blogs/${singleBlogData._id}`, blogData)
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
                        Update Blog Data
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="sm:max-w-4xl max-h-screen mx-auto sm:p-6 rounded-md">
                                <div className="mb-4 w-full ">
                                    <label htmlFor="image" className="text-sm font-medium">
                                    Upload Blog Image
                                    </label>
                                    <input type="file" {...register('image')} className="mt-1 p-2 w-full border rounded-md" required/>
                                </div>
                            <div className='flex gap-5'>
                                <div className="mb-4 w-full ">
                                    <label htmlFor="title" className="text-sm font-medium">
                                        Blog Title
                                    </label>
                                    <input defaultValue={singleBlogData?.title || ""} type="text" {...register('title')} id="title" className="mt-1 p-2 w-full border rounded-md"/>
                                </div>
                                <div className="mb-4 w-full">
                                    <label htmlFor="category" className=" text-sm font-medium">
                                        Blog Category
                                    </label>
                                    <input defaultValue={singleBlogData?.category || ""} type="category" {...register('category')} className="w-full p-2 border rounded-md"  />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-600 text-sm font-medium">Additional Description</label>
                                <textarea defaultValue={singleBlogData?.additional_description || ""} {...register('additional_description')} className="w-full p-2 border rounded-md"  />
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="" className=" text-sm font-medium">
                                    Blog Details
                                </label>
                                <input defaultValue={singleBlogData?.details || ""} type="text" {...register('details')} className="w-full p-4 border rounded-md"  />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className=" text-sm font-medium">
                                Testimonial
                                </label>
                                <textarea defaultValue={singleBlogData?.testimonial || ""} {...register('testimonial')} className="w-full p-2 border rounded-md"  />
                            </div>
                        </div>
                        <button
                        className="bg-green-500 text-white px-4 py-1 2xl:py-2 rounded-md hover:bg-green-700 duration-500"
                        type="submit"
                        >
                        {loading ? "Updating..." : "Update"}
                        </button>
                        <button
                        onClick={closeBlogUpdateModal}
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