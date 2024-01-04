import React from 'react';
import UseTeamMemberHook from '../../../Hooks/UseTeamMemberHook';
import Container from '../../Shared/Container/Container';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";

const Team = () => {
    const [teamMember] = UseTeamMemberHook();
    return (
        <div className='mt-16 bg-gradient-to-r from-[#b9bdbc44] to-[#d0f8f344]'>
            <div className='sm:py-14 py-8 '>
                <Container>
                    <div className='text-center'>
                        <h1 className=' border-black text-[#3b8d5d] font-serif font-bold sm:text-2xl text-lg '>| Our Team</h1>
                        <h1 className=' border-black font-bold  text-2xl sm:text-4xl '>Meet Our Successful Doctors</h1>
                    </div>
                    <div className='grid sm:grid-cols-4 py-10 grid-cols-1 gap-10'>
                        {
                            teamMember.slice(0, 4).map((member) =>(
                                <div key={member._id}>
                                    <div className="flex flex-col justify-center h-full shadow-xl bg-white dark:text-gray-100">
                                        <img src={member.image} alt="" className="sm:w-80 w-full py-5 mx-auto" />
                                        <div className='flex justify-between sm:px-4 px-6 py-6'>
                                            <div className="space-y-4">
                                                <div className="my-2 space-y-1 ">
                                                    <h2 className="text-lg font-semibold sm:text-xl">{member.name}</h2>
                                                    <p className="text-xs sm:text-base">{member.specialist}</p>
                                                    <div className='flex items-center gap-2'>
                                                        <FaGraduationCap className='text-2xl'/>
                                                        <p>{member.degree}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mt-8'>
                                                <Link to={`/teamdetails/${member._id}`}><CiCirclePlus className='text-5xl'/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Team;