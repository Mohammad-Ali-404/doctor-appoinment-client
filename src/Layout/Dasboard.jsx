import React from 'react';
import { AiOutlineHome, AiOutlineMoneyCollect, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMenuAlt3, HiOutlineShare } from "react-icons/hi";
import { RiImageEditFill } from "react-icons/ri";
import { GiNewspaper } from "react-icons/gi";
import { VscDiffAdded } from "react-icons/vsc";
import { FaUserEdit, FaUsers } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import DashboardNavbar from '../Page/Dashboard/Dashboardshared/DashboardNavbar';
import Swal from 'sweetalert2';
import UseAdmin from '../Hooks/UseAdmin';
import { BsCartPlusFill } from "react-icons/bs";

const Dashboard = () => {
	const { logOut } = useContext(AuthContext)
    const [isAdmin] = UseAdmin()
	const handleLogout = () => {
        logOut()
        .then(() =>{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Logout Successful',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(error => console.log(error))
      }
    return (
    <div>
		<div className=''>
			<DashboardNavbar/>
		</div>
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col sm:px-10 px-6 bg-slate-100">
				<label htmlFor="my-drawer-2" className="mb-5 text-base w-28 cursor-pointer dark:bg-slate-700 text-primary drawer-open hover:text-green-600 flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 lg:hidden">
					<HiOutlineMenuAlt3 className='text-xl'/> Menu
				</label>
				<Outlet></Outlet>
			</div>
			<div className="drawer-side">
			<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-5 w-80 min-h-full bg-base-200 text-base-content text-lg">
                    {isAdmin ? <>
                        <div>
                            <li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
                                <Link to="/dasboard/admin-home" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <AiOutlineHome/>
                                    <span className='sm:py-3 py-3 p px-3'>Admin Home</span>
                                </Link>
                            </li>
                            <li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
                                <Link to="/dashboard/allusers" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <AiOutlineUser/>
                                    <span className='sm:py-3 py-3 p px-3'>All User</span>
                                </Link>
                            </li>
                            <li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
                                <Link to="/dashboard/" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <AiOutlineUser/>
                                    <span className='sm:py-3 py-3 p px-3'>Appointment</span>
                                </Link>
                            </li>
                            <li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
                                <Link to="/dashboard/manageteammember" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaUserEdit/>
                                    <span className='sm:py-3 py-3 p px-3'>Manage Team</span>
                                </Link>
                            </li>
                            <li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
                                <Link to="/dashboard/addteammember" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaUsers/>
                                    <span className='sm:py-3 py-3 p px-3'>Add an Team Member</span>
                                </Link>
                            </li>
                            <li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
                                <Link to="/dashboard/" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <AiOutlineMoneyCollect/>
                                    <span className='sm:py-3 py-3 p px-3'>Transaction History</span>
                                </Link>
                            </li>
                            
                            <li className="rounded-sm">
                                <Link to='admin-social-media' href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <HiOutlineShare/>
                                    <span className='sm:py-3 py-3 p px-3'>Social Media</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link onClick={handleLogout} to='/' href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                        <rect width="32" height="64" x="256" y="232"></rect>
                                    </svg>
                                    <span className='sm:py-3 py-3 p px-3'>Logout</span>
                                </Link>
                            </li>
                        </div>
                    </> : <>
                        <div>
                            <li className="rounded-sm">
                                <Link to='/dashboard/subscribecart' href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <BsCartPlusFill/>
                                    <span className='sm:py-3 py-3 p px-3'>Subscribe Cart</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link onClick={handleLogout} to='/' href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                        <rect width="32" height="64" x="256" y="232"></rect>
                                    </svg>
                                    <span className='sm:py-3 py-3 p px-3'>Logout</span>
                                </Link>
                            </li>
                        </div>
                    </>}
                    
                </ul>
			</div>
		</div>
	</div>
    );
};

export default Dashboard;