import React, { useState } from 'react'
import axios from "axios"
import { Search, House, Headphones, CircleArrowDown, Minus, X, Menu} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MenuLogout = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const token = localStorage.getItem("token");

    const navigate = useNavigate()

    const handleLogout = async () => {
        console.log("Clicked logout")
        try {
            await axios.post("http://localhost:3000/api/auth/logout");

            localStorage.removeItem("token");

            navigate("/login");
        } catch (error) {
            console.log(error);
            alert("Error occured, try again")
        }
    }

    return (
        <>
        {token ? (
            <button 
            className='bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-white/10 active:scale-95 text-lg'
            onClick={handleLogout}>
            Logout
            </button>
        ):(
            <>
              <Link to="/signup"
                className='text-center'>
                <button className='active:scale-95'>Sign up</button>
                </Link>
                
                <Link to="/login"
                className='text-center'>
                <button 
                className='bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-white/10 active:scale-95 text-lg'>
                    Log in
                </button>
            </Link>
            </>
            )}
            
        </>
    );

}

export default MenuLogout