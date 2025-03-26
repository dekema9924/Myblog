



import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Config from '../config/config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


function Login() {
  const [showPassword, setShowPassword] = useState("text")
  const [formInput, setFormInput] = useState({})
  const navigate = useNavigate();

  //set form inputs
  const HandleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInput({
      ...formInput,
      [e.currentTarget.name]: e.currentTarget.value
    })

  };

  //handle formSubmit
  const HandleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // console.log(formInput)
    axios.defaults.withCredentials = true;
    axios.post(`${Config.ApiUrl}/login`, formInput).then((response) => {
      console.log(response)
      try {
        if (response.data === 'Login success') {
          toast.success(response.data.message);
          navigate('/');
        }
      } catch (error) {
        console.error('Unexpected Error:', error);
      }
    }).catch((error) => {
      if (error.response) {
        console.error(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.error('Error:', error.message);
      }
    })
  };



  return (
    <>
      <div className=' w-11/12 m-auto flex flex-col items-center mt-44'>
        <h1 className='text-2xl pb-10 font-bold w-96 text-center'>The old clock in the attic still ticked, counting moments no one remembered.</h1>

        <form onSubmit={HandleFormSubmit} className='flex w-10/12 md:w-[400px] flex-col gap-5 ' action="">

          {/* username */}
          <div className='relative flex items-center justify-center'>
            <input required onChange={HandleForm} className='border-2 md:w-11/12 w-full pl-14 h-9 rounded-md  ' type="text" name="username" placeholder='username / email' />
            <PersonIcon className='absolute md:left-10 left-3' />
          </div>

          {/* //email
           <div className='relative flex items-center justify-center'>
              <input className='border-2 md:w-11/12 w-full pl-14 h-9 rounded-md  ' type="text" name="email" placeholder='email' />
              <EmailIcon className='absolute md:left-10 left-3'/>
           </div> */}

          {/* //password */}
          <div className='relative flex items-center justify-center'>
            <input onChange={HandleForm} className='border-2 md:w-11/12 w-full pl-14 h-9 rounded-md  ' type={showPassword} name="password" placeholder='password' />
            <KeyIcon className='absolute md:left-10 left-3' />
            {
              showPassword === 'text' ? <VisibilityIcon onClick={() => setShowPassword("password")} className='absolute md:right-10 p-1 right-3 cursor-pointer' /> : <VisibilityOffIcon onClick={() => setShowPassword("text")} className='absolute p-1 md:right-10 right-3 cursor-pointer' />
            }
          </div>

          <button type='submit' className='border-2 bg-red-400 text-white font-bold rounded-md h-10 cursor-pointer w-40 m-auto'>Log In</button>
          <p className='text-gray-500 m-auto'>Not a member? <Link className='text-black font-bold underline' to={'/register'}>Register Now</Link> </p>
        </form>
      </div>
    </>
  )
}

export default Login