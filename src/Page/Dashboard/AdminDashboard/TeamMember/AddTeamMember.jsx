import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../Hooks/UserAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token= import.meta.env.VITE_Image_Upload_Token;
const AddTeamMember = () => {
    const [axiosSecure] = useAxiosSecure()
    const {register, handleSubmit, reset} = useForm()
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = (data) =>{
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method:'POST',
            body:formData
          })
        .then(res => res.json())
        .then(imgRes =>{
            if (imgRes.success) {
                const imgUrl = imgRes.data.display_url;
                const {name, specialist, degree, educationalBackground, experienceAndSkills, phone, registrationNumber, email, selfDescription, facebook, instagram, twitter} = data;
                const newTeamMember = {name, specialist, degree, educationalBackground, experienceAndSkills, phone, registrationNumber, email, selfDescription, facebook, instagram, twitter, image:imgUrl}
                axiosSecure.post(`/team`, newTeamMember)
                .then(data=>{
                    if (data.data.insertedId) {
                      reset();
                      Swal.fire({
                        title: 'Success!',
                        text: 'New Doctor added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                      });
                    }
                  })
                
            }
        })
    }
    return (
        <div className='py-10'>
            <h1 className='text-xl font-semibold text-center py-5'>Added New Team Member</h1>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className="max-w-6xl mx-auto p-6 bg-white rounded-md shadow-md">
                            <div className="mb-4 w-full ">
                                    <label htmlFor="name" className="text-sm font-medium">
                                    Upload Doctor Image
                                    </label>
                                    <input type="file" {...register('image')} className="mt-1 p-2 w-full border rounded-md"placeholder="John Doe"/>
                                </div>
                            <div className='sm:flex gap-5'>
                                <div className="mb-4 w-full ">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Full Name
                                    </label>
                                    <input type="text" {...register('name')} id="name" className="mt-1 p-2 w-full border rounded-md"placeholder="John Doe"/>
                                </div>
                                <div className="mb-4 w-full">
                                    <label htmlFor="email" className=" text-sm font-medium">
                                        Email
                                    </label>
                                    <input type="email" {...register('email')} placeholder="john.doe@example.com" className="w-full p-2 border rounded-md"  />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-600 text-sm font-medium">Self Description:</label>
                                <textarea {...register('selfDescription')} className="w-full p-2 border rounded-md"  />
                            </div>
                            <div className='sm:flex gap-5'>
                                <div className="mb-4 w-full ">
                                    <label htmlFor="name" className="text-sm font-medium">
                                    Specialist
                                    </label>
                                    <input type="text" {...register('specialist')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className="mb-4 w-full">
                                    <label htmlFor="email" className=" text-sm font-medium">
                                    Degree
                                    </label>
                                    <input type="text" {...register('degree')} className="w-full p-2 border rounded-md"  />
                                </div>
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="email" className=" text-sm font-medium">
                                    Educational Background
                                </label>
                                <input type="text" {...register('educationalBackground')} className="w-full p-4 border rounded-md"  />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className=" text-sm font-medium">
                                    Educational Background
                                </label>
                                <textarea {...register('experienceAndSkills')} className="w-full p-2 border rounded-md"  />
                            </div>
                            <div className='sm:flex gap-5'>
                                <div className="mb-4 w-full ">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Phone
                                    </label>
                                    <input type="text" {...register('phone')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className="mb-4 w-full">
                                    <div className="mb-4">
                                        <label className="text-gray-600 text-sm font-medium">Registration Number:</label>
                                        <input type="text" {...register('registrationNumber')} className="w-full p-2 border rounded-md"  />
                                    </div>
                                </div>
                            </div>
                            <div className='sm:flex gap-5'>
                                <div className="mb-4 w-1/3">
                                    <label className="text-gray-600 text-sm font-medium">Facebook:</label>
                                    <input type="text" {...register('facebook')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className="mb-4 w-1/3">
                                    <label className="text-gray-600 text-sm font-medium">Instagram:</label>
                                    <input type="text" {...register('instagram')} className="w-full p-2 border rounded-md"  />
                                </div>
                                <div className="mb-4 w-1/3">
                                    <label className="text-gray-600 text-sm font-medium">Twitter:</label>
                                    <input type="text" {...register('twitter')} className="w-full p-2 border rounded-md"  />
                                </div>
                            </div>
                            <button type="submit" className='btn text-base bg-gradient-to-t from-[#59c598] to-[#13b63c71]'>Add Doctor</button>
                </div>
            </form>
        </div>
    );
};

export default AddTeamMember;