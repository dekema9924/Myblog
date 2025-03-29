

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';


function RandomPost() {
    const blogs = useSelector((state: RootState) => state.blog.value);

    // Find the blog with the maximum views
    const mostViewedBlog = blogs.reduce((max, blog) =>
        blog.views > max.views ? blog : max, blogs[0]);

    // Check if there is a most viewed blog
        const totalWords = mostViewedBlog.content
            ? mostViewedBlog.content.split(" ").length
            : 0;

        const estimatedTime = Math.ceil(totalWords / 200);

    return (
        <>
            <section className='w-11/12 m-auto mt-10 shadow-2xl p-4'>
                <img className='w-full h-80 object-cover relative' src={mostViewedBlog.image} alt="blogImg" />
                <div className='flex justify-between my-4 '>
                    <p className='ml-4 rounded-lg bg-red-400  text-white font-bold w-44 text-center text-sm  '>{mostViewedBlog.category}</p>
                    <p className=' bg-white rounded-xl text-gray-400'><AccessTimeIcon />{estimatedTime}min</p>
                </div>


                <h1 className='text-3xl font-bold capitalize my-2'>{mostViewedBlog.title}</h1>
                <p>{new Date(mostViewedBlog.date).toISOString().split("T")[0]}</p>
                <p className='text-gray-500 my-4 text-sm'>{mostViewedBlog.summary}</p>

                <hr className='my-10 border-gray-300' />
                <Link to={`/blog/${mostViewedBlog._id}`} className=' font-bold'>Continue Reading <ArrowForwardIosIcon /></Link>
            </section>
        </>
    )
}

export default RandomPost