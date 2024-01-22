import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/UserAxiosSecure';

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddedBlog = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const [capabilities, setCapabilities] = useState([]);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            if (imgRes.success) {
                const imgUrl = imgRes.data.display_url;
                const {name, title, details, testimonial, category, posted_by, additional_description, post_date} = data;
                const addedNewBlog = {name, title, details, testimonial, category, posted_by, additional_description, post_date, capabilities_details: capabilities, image: imgUrl};
                axiosSecure.post(`/blogs`, addedNewBlog)
                    .then(data => {
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                title: 'Success!',
                                text: 'New Blog added Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool',
                            });
                        }
                    })
            }
        })
    }

    const handleAddCapability = () => {
        if (capabilities.length < 5) { // Limit the number of capabilities to 5 for example
            setCapabilities([...capabilities, '']);
        }
    }

    const handleRemoveCapability = (index) => {
        const updatedCapabilities = [...capabilities];
        updatedCapabilities.splice(index, 1);
        setCapabilities(updatedCapabilities);
    }

    return (
        <div className='py-10'>
            <h1 className='text-xl font-semibold text-center py-5'>Added New Team Member</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-6xl mx-auto p-6 bg-white rounded-md shadow-md">
                                <div className="mb-4 w-full ">
                                        <label htmlFor="name" className="text-sm font-medium">
                                        Upload Blog Image
                                        </label>
                                        <input type="file" {...register('image')} className="mt-1 p-2 w-full border rounded-md"placeholder="John Doe"/>
                                    </div>
                                <div className='sm:flex gap-5'>
                                    <div className="mb-4 w-full ">
                                        <label htmlFor="title" className="text-sm font-medium">
                                            Blog Titile
                                        </label>
                                        <input type="text" {...register('title')} id="title" className="mt-1 p-2 w-full border rounded-md"/>
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label htmlFor="category" className=" text-sm font-medium">
                                            Category
                                        </label>
                                        <input type="category" {...register('category')}  className="w-full p-2 border rounded-md"  />
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label className="text-gray-600 text-sm font-medium">Posted By</label>
                                        <input type="text" {...register('posted_by')} className="w-full p-2 border rounded-md"  placeholder='Admin Or other person'/>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="text-gray-600 text-sm font-medium">Additional Description</label>
                                    <textarea {...register('additional_description')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="category" className=" text-sm font-medium">
                                        Blog Details
                                    </label>
                                    <textarea {...register('details')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className='sm:flex gap-5 w-full'>
                                        <div className="flex flex-col gap-2 w-2/3 mb-4">
                                        <label className="text-gray-600 text-sm font-medium">Capabilities:</label>
                                            {capabilities.map((capability, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        {...register(`capabilities_details[${index}]`)}
                                                        placeholder={`Capability ${index + 1}`}
                                                        className="w-full p-2 border rounded-md"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveCapability(index)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={handleAddCapability}
                                                className="btn w-36 btn-sm text-base bg-gradient-to-t from-[#59c598] to-[#13b63c71]"
                                            >
                                                Add Capability
                                            </button>
                                    </div>
                                    <div className="mb-4 w-1/3">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Post Date
                                        </label>
                                        <input type="date" {...register('post_date')} className="w-full p-2 border rounded-md"  />
                                    </div>
                                </div>

                                <div className='sm:flex gap-5'>
                                   
                                    <div className="mb-4 w-full">
                                        <div className="mb-4">
                                            <label className="text-gray-600 text-sm font-medium">Testimonial</label>
                                            <textarea type="text" {...register('testimonial')} className="w-full p-2 border rounded-md"  />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className='btn text-base bg-gradient-to-t from-[#59c598] to-[#13b63c71]'>Add Blog</button>
                </div>
            </form>
        </div>
    );
};

export default AddedBlog;
                    