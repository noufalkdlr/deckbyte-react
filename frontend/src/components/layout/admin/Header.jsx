import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../features/auth/authSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='  h-full w-full border-b'>
      <button onClick={()=>{
        dispatch(logout());
        navigate('/');

      }}>Logout</button>
    </div>
  )
}

export default Header