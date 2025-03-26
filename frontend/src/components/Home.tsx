
import Hero from './Hero'
import { BlogInterface } from './Hero'
import { initialBlog } from './Hero'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { userLogin } from '../features/UserSlice'
import axios from 'axios'
import Config from '../config/config'


function Home() {
    const [blogPost, setBlogPost] = useState<BlogInterface[]>(initialBlog)
    const dispatch = useDispatch()
    const token = Cookies.get('token')

    //get user profile data
    const getProfile = async () => {
        axios.defaults.withCredentials = true
        await axios.get(`${Config.ApiUrl}/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response)
            dispatch(userLogin({id: response.data.id, username: response.data.username}))
        })
    }

    //check if token exist
    useEffect(() => {
        if (token) {
            //store token in store
            dispatch(userLogin({ token: token }))
        }
        getProfile()

    }, [token])





    return (
        <>
            <Hero />
            <div className='md:ml-20 flex flex-col items-center md:block '>
                <h1 className='font-bold text-3xl ml-4'>Welcome to Jzeko</h1>
                <p className='text-gray-400 font-semibold ml-4 md:mb-4 '>Browse through my Blogs</p>

                <div className='flex flex-wrap gap-10 w-10/12'>
                    {
                        blogPost.map((blog) => {
                            return (
                                <Link key={blog.id} to={`/blog/${blog.id}`} className=' w-11/12 md:w-3/12 my-10 m-auto md:m-0'>
                                    <img className='w-full h-66 object-cover' src={blog.img} alt="blogposter" />

                                    <div className='p-4 shadow-2xl'>
                                        <h1 className='text-3xl font-bold capitalize '>{blog.title}</h1>
                                        <div className='text-gray-700 font-semibold flex gap-5 text-xs mt-4'>
                                            <p>{blog.date}</p>
                                            <p>By Lewis Skully</p>
                                        </div>
                                        {/* description */}
                                        <div className='text-sm my-2 text-gray-600 h-10 overflow-hidden'>
                                            <p>{blog.description}</p>
                                        </div>

                                        <hr className='my-2 border-gray-300' />
                                        <div className='flex justify-between items-center'>
                                            <p className='border-[1px] border-gray-300 rounded-lg shadow-2xl w-32 text-center'>{blog.readTime} Min Read</p>
                                            <p className=' before:content-[""] before:border-[2px] before:border-red-700
                            before:absolute before:w-full before:-top-[11.5px] before:rounded-2xl 
                            relative'>{blog.category}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home