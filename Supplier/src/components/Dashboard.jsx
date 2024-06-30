import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const [showSupplierLinks, setShowSupplierLinks] = useState(false);

    const handleSupplierClick = () => {
        setShowSupplierLinks(!showSupplierLinks);
    };

    return (
        <div className="dashboard-container bg-gray-900 w-64 h-screen fixed left-0 ">
            <div className="shopName flex items-center justify-center bg-gray-800 h-15 pb-1 pt-4 ">
                <div className="shopName-name text-white text-lg  font-bold ml-8">
                    Chaminda WMS
                </div>
            </div>
            <div className="navigation-button-bar flex flex-col items-center mt-8">
                <Link to='/'>
                    <button className="w-60 bg-blue-500 flex items-center justify-start px-4 py-2 rounded-xl mt-3">
                        <div className="font-normal text-base w-36 text-white font-sans ml-8 flex justify-start">
                            Home
                        </div>
                    </button>
                </Link>
                <div>
                    <button className="w-60 flex items-center justify-start px-4 py-2 rounded-xl mt-3 hover:bg-blue-400 " onClick={handleSupplierClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 30 32" fill="none">
                        
                        </svg>
                        <div className="font-normal text-base w-48 text-white font-sans ml-10 flex justify-start">
                            Supplier
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none" style={{ transform: showSupplierLinks ? 'rotate(90deg)' : 'none' }}>
                            
                        </svg>
                    </button>
                    {showSupplierLinks && (
                        <div className='pl-3'>
                            <Link to="/login" className="block p-2 text-blue-200 hover:text-white">
                                Login
                            </Link>
                            <Link to="/register" className="block p-2 text-blue-200 hover:text-white">
                                Register
                            </Link>
                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
