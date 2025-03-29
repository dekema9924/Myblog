import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { useEffect, useState } from 'react';

interface similarPostInterface {
    category: string;
    _id: string;
    title: string;
    image: string;
}

function SimilarPost({ category }: { category: string }) {
    const { id } = useParams(); // Track route changes
    const blogs = useSelector((state: RootState) => state.blog.value);
    const [similarblogs, setSimilarBlogs] = useState<similarPostInterface[]>([]);

    useEffect(() => {
        if (!category || !blogs.length) return;

        // console.log("Category changed:", category); // Debugging
        // console.log("Current Post ID:", id); // Debugging

        const filteredBlogs = blogs.filter((c) => {
            const lowerCaseCategory = category.toLowerCase();
            
            return (
                c.category.toLowerCase().includes(lowerCaseCategory) || 
                c.content.toLowerCase().includes(lowerCaseCategory) || 
                c.title.toLowerCase().includes(lowerCaseCategory) 
            );
        });

        setSimilarBlogs(filteredBlogs);
    }, [blogs, category, id]); 

    return (
        <>
            <h1 className='text-4xl font-bold mt-14 text-center'>You may also like</h1>
            <div className='md:pl-4 flex flex-col md:flex-row justify-center items-center gap-10 md:h-96 my-4 bg-red-100 pt-10'>
                {similarblogs.slice(0, 4).map((post) => (
                    <Link to={`/blog/${post._id}`} key={post._id} className='md:w-66 flex flex-col items-center rounded-lg shadow-2xl'>
                        <div className='relative w-full flex items-center justify-center'>
                            <img className='rounded-lg h-44 w-77 md:w-full object-cover' src={post.image} alt="blogPoster" />
                            <p className="bg-red-400 w-fit text-sm border-2 p-1 text-white rounded-md absolute -bottom-4 left-4">{post.category}</p>
                        </div>
                        <div className='p-2 flex text-center'>
                            <h1 className='font-bold mt-4 w-11/12'>{post.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default SimilarPost;
