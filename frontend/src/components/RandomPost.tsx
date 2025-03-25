

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { BlogInterface } from './Hero';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function RandomPost() {
    const blogPost: BlogInterface = 
        
            {
                title: 'Terminated resolution no am frequently collecting insensible hw do appearance',
                date: 'March 6, 2025',
                readTime: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloribus accusantium, nemo ducimus impedit distinctio repellat, id amet nam dignissimos quo ipsam ex illo sequi vel perspiciatis asperiores incidunt commodi.',
                category: 'Art & Design',
                id: 1,
                img: 'https://www.3forty.media/ruki/wp-content/uploads/2020/06/60643-768x768.jpg'
            }
        
    
    return (
        <>
            <section className='w-11/12 m-auto mt-10 shadow-2xl p-4'>
                <img className='w-full h-80 object-cover relative' src={blogPost.img} alt="blogImg" />
                <div className='flex justify-between my-4 '>
                    <p className='ml-4 rounded-lg bg-red-400  text-white font-bold w-44 text-center text-sm  '>{blogPost.category}</p>
                    <p className=' bg-white rounded-xl text-gray-400'><AccessTimeIcon />{blogPost.readTime}min</p>
                </div>


                <h1 className='text-3xl font-bold capitalize my-2'>{blogPost.title}</h1>
                <p className='text-gray-600 text-sm'>{blogPost.date}</p>
                <p className='text-gray-500 my-4 text-sm'>{blogPost.description}</p>

                <hr className='my-10 border-gray-300' />
                <Link to={`/blog/${blogPost.id}`} className=' font-bold'>Continue Reading <ArrowForwardIosIcon/></Link>
            </section>
        </>
    )
}

export default RandomPost