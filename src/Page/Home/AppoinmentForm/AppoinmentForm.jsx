import React from 'react';
import Container from '../../Shared/Container/Container';

const AppointmentForm = () => {
  return (
    <div>
        <Container>
                <div className="text-white grid sm:grid-cols-2 rounded-xl grid-cols-1 mx-auto mt-20" style={{ backgroundImage: 'url(https://i.ibb.co/7yVtfQp/form-bg.png)', backgroundSize:'cover',}}>
                    <div className=' sm:p-10 p-10 bg-[#141414] bg-opacity-50'>
                        <h2 className='sm:text-2xl text-xl'>| Appointment</h2>
                        <h1 className="sm:text-4xl text-2xl py-4 font-bold mb-4">Apply For Free Now</h1>
                        <form>
                        <div className='sm:flex gap-5'>
                            <div className="mb-4 w-full ">
                                <label htmlFor="name" className="=text-sm font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="email" className=" text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                        </div>
                        <div className='sm:flex gap-5 '>
                            <div className="mb-4 w-full">
                                <label htmlFor="department" className=" text-sm font-medium">
                                    Select Department
                                </label>
                                <select
                                    id="department"
                                    name="department"
                                    className="mt-1 text-gray-900 p-2 w-full border rounded-md"
                                >
                                    <option>Select Department</option>
                                    <option>Cardiology</option>
                                    <option>Dermatology</option>
                                    {/* Add more departments as needed */}
                                </select>
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="doctor" className="text-sm font-medium">
                                    Select Doctor
                                </label>
                                <select id="doctor" name="doctor" className="text-gray-900 mt-1 p-2 w-full border rounded-md">
                                    <option >Select Doctor</option>
                                    <option>Dr. Smith</option>
                                    <option>Dr. Jones</option>
                                    {/* Add more doctors as needed */}
                                </select>
                            </div>
                        </div>
                        <div className='sm:flex gap-5 '>
                            <div className="mb-4 w-full">
                                <label htmlFor="department" className=" text-sm font-medium">
                                    Select Time
                                </label>
                                <select
                                    id="time"
                                    name="time"
                                    className="mt-1 text-gray-900 p-2 w-full border rounded-md"
                                >
                                    <option>Select Time</option>
                                    <option>10:00 - 11:00 AM</option>
                                    <option>11:10 - 11:59 AM</option>
                                    <option>2:00 - 3:00 PM</option>
                                    {/* Add more departments as needed */}
                                </select>
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="doctor" className="text-sm font-medium">
                                    Date
                                </label>
                                <input type="date"  className="mt-1 text-gray-900 p-2 w-full border rounded-md" name="" id="" />
                            </div>
                        </div>
                        {/* Add more form fields as needed */}
                            <div>
                            <button
                                type="submit"
                                className="bg-[#4085d3] text-white text-base font-semibold rounded-md hover:text-gray-900 duration-500 p-3  hover:bg-white"
                            >
                                Book Appoinment
                            </button>
                            </div>
                        </form>
                    </div>
                    <div className='bg-[#141414] bg-opacity-50 '>
                        <img className='w-[475px] sm:ml-20 ml-0 sm:-mt-16' src='https://i.ibb.co/SmPLrF2/hero-img.webp' alt="" />
                    </div>
                </div>
        </Container>
    </div>
  );
};

export default AppointmentForm;
