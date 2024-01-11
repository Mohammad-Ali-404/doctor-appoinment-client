import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AiFillEdit, AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { FaAlignJustify } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const ProfileDropdown = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);
    const openDropdown = () => {
        clearTimeout(timeoutRef.current);
        setIsDropdownOpen(true);
      };
    
      const closeDropdown = () => {
        timeoutRef.current = setTimeout(() => {
          setIsDropdownOpen(false);
        }, 200);
      };
    
      const toggleDropdown = () => {
        if (isDropdownOpen) {
          closeDropdown();
        } else {
          openDropdown();
        }
      };
    
      const handleLogOut = () =>{
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
            <div className=" relative inline-block">
      <div
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
        className="flex items-center border py-0 px-2 rounded-2xl gap-1 cursor-pointer hover:border-blue-500  transition duration-100"
      >
        <FaAlignJustify className="text-xl" />
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            referrerPolicy="no-referrer"
            src={user?.photoURL}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className="absolute top-full right-0 mt-2 dark:bg-gray-800 dark:text-gray-50 bg-white border border-gray-300 shadow-md rounded-md"
        >
          <ul className="flex flex-col ">
            <Link
              className="px-10 py-2 w-full dark:hover:bg-slate-600 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
            >
              <AiFillEdit />
              Edit Profile
            </Link>

            <Link
              to={
                "/dashboard"   
              }
            >
              <li className="px-10 py-2 w-full dark:hover:bg-slate-600 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <AiOutlineHome /> Dashboard
              </li>
            </Link>
            <li>
             <Link onClick={handleLogOut} to='/'
                  className="px-10 py-2 w-full mt-auto  dark:hover:bg-red-500 hover:bg-gray-100  cursor-pointer flex items-center gap-2">
                  <AiOutlineLogout />
                  Logout
             </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
        </div>
    );
};

export default ProfileDropdown;