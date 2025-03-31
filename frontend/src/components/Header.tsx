import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubscribeButton from './SubscribeButton';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../features/UserSlice';
import Cookies from 'js-cookie';


function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const user = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()


    isNavOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

    //logout function
    const HandleLogout=()=>{
        dispatch(userLogOut())
        Cookies.remove('token')
    }

    return (
        <>
            <header className='flex items-center h-22 justify-around fixed w-full top-0 bg-white z-50'>

                <div className='flex items-center gap-4'>
                    <MoreHorizIcon
                        onClick={() => setIsNavOpen(true)}
                        className="ml-4 cursor-pointer block md:hidden"
                    />
                    <Link to={'/'} className='text-[2em] font-bold'>Jzeko</Link>
                </div>
                <ul className='lg:flex hidden gap-4 items-center font-bold '>
                    {/* <li>LifeStyle</li>
                    <li>Beauty</li>
                    <li>Travel</li> */}
                    <SubscribeButton />
                </ul>
                {

                    !user?.username?
                        <div className='flex items-center gap-2'>
                            <Link to={'/login'} className=' border-2 w-24 text-center text-sm flex items-center justify-center font-bold bg-black text-white h-10 rounded-md cursor-pointer'>LogIn</Link>
                            <Link to={'/Register'} className='underline'>Register</Link>

                        </div>
                        : 
                        <div className='flex items-center gap-2'>
                                 <p className='underline capitalize font-semibold'>{user.username}</p>
                            
                           <div onClick={HandleLogout} className=' '>
                                <ExitToAppIcon style={{fontSize: '2em'}} className='text-red-400 cursor-pointer'/>
                           </div>
                            
                        </div>
                }
            </header>



            {/* mobile nav */}
            <nav className={` w-10/12 h-[100vh] bg-white z-50 top-0  fixed lg:hidden transition-all duration-500 ${isNavOpen ? "left-0" : "-left-[1500px]"} `}>
                <div className='flex items-center justify-between '>

                    <h1 className='text-[2em] ml-4 font-bold'>Jzeko</h1>
                    <CloseIcon onClick={() => setIsNavOpen(false)} className='cursor-pointer mr-4' />
                </div>
                <hr className='mt-4 text-gray-400 w-11/12 m-auto' />


                <ul className='mt-4 flex flex-col gap-4 p-4 text-2xl font-semibold'>
                    {/* <li>LifeStyle</li>
                    <li>Beauty</li>
                    <li>Travel</li>
                    <li>Art & Design</li> */}
                    <li>Subscribe</li>
                    {
                        !user.username ? <Link to={'/login'} className=' border-2 w-24 text-center text-sm flex items-center justify-center font-bold bg-black text-white h-10 rounded-md cursor-pointer'>LogIn</Link> : ""
                    }


                </ul>

            </nav>
        </>
    )
}

export default Header