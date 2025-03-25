



import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyIcon from '@mui/icons-material/Key';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const[showPassword, setShowPassword] = useState("text")

  return (
    <>
    <div className=' w-11/12 m-auto flex flex-col items-center mt-44'>
        <h1 className='text-2xl pb-10 font-bold w-96 text-center'>The old clock in the attic still ticked, counting moments no one remembered.</h1>

        <form className='flex w-10/12 md:w-[400px] flex-col gap-5 ' action="">

        {/* username */}
           <div className='relative flex items-center justify-center'>
              <input className='border-2 md:w-11/12 w-full pl-14 h-9 rounded-md  ' type="text" name="username" placeholder='username / email' />
              <PersonIcon className='absolute md:left-10 left-3'/>
           </div>

           {/* //email
           <div className='relative flex items-center justify-center'>
              <input className='border-2 md:w-11/12 w-full pl-14 h-9 rounded-md  ' type="text" name="email" placeholder='email' />
              <EmailIcon className='absolute md:left-10 left-3'/>
           </div> */}

           {/* //password */}
           <div className='relative flex items-center justify-center'>
              <input className='border-2 md:w-11/12 w-full pl-14 h-9 rounded-md  ' type={showPassword} name="password" placeholder='password' />
              <KeyIcon className='absolute md:left-10 left-3'/>
                {
                  showPassword === 'text' ? <VisibilityIcon onClick={()=>setShowPassword("password")} className='absolute md:right-10 p-1 right-3 cursor-pointer'/> : <VisibilityOffIcon onClick={()=>setShowPassword("text")} className='absolute p-1 md:right-10 right-3 cursor-pointer'/>
                }
           </div>

           <button className='border-2 bg-red-400 text-white font-bold rounded-md h-10 cursor-pointer w-40 m-auto'>Log In</button>
           <p className='text-gray-500 m-auto'>Not a member? <Link className='text-black font-bold underline' to={'/register'}>Register Now</Link> </p>
        </form>
    </div>
  </>
  )
}

export default Login