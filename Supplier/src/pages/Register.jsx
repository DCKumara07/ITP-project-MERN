import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginFailure, loginSuccess } from '../redux/supplier/supplierSlice';

export default function Register() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.supplier);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(loginFailure(data.message));
        return;
      }
      dispatch(loginSuccess(data));
      navigate('/login');
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className='flex flex-col ml-28 items-center justify-center h-screen bg-gradient-to-r from-slate-900 to-blue-500'>
      <h1 className='text-4xl font-bold mb-4 text-white'>Supplier Register</h1>
      <form onSubmit={handleSubmit} className='bg-white mt-6 p-8 rounded-lg shadow-lg max-w-md'>
        <input
          type='text'
          placeholder='Supplier Name'
          className='border p-3 rounded-lg mb-4 w-full'
          id='supplierName'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg mb-4 w-full'
          id='email'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Phone Number'
          className='border p-3 rounded-lg mb-4 w-full'
          id='phoneNumber'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Company Name'
          className='border p-3 rounded-lg mb-4 w-full'
          id='companyName'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg mb-4 w-full'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-80 w-full'
        >
          {loading ? 'Loading...' : 'Register'}
        </button>
      </form>
      <div className='flex mt-8 text-lg text-white'>
        <p>Already have an account?</p>
        <Link to='/login' className='ml-4 underline text-lg font-bold'>
          Login
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}
