import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect, useState } from 'react';
import Feautured from './Feautured';
import RandomPost from './RandomPost';
import { Link } from 'react-router-dom';
import { useSelector, UseSelector } from 'react-redux';
import { RootState } from '../store/Store';



export interface BlogInterface {
    _id: string
    title: string
    date: string
    readTime: number
    summary: string
    category: string
    image: string
    content: string
    views: number
}

export const initialBlog: BlogInterface[] = [
    {
        _id: "1",
        title: "Sample Blog",
        date: new Date().toISOString(),
        readTime: 5,
        summary: "This is a sample blog summary.",
        category: "General",
        image: "https://picsum.photos/200/300?random=7",
        content: "This is the content of the sample blog.",
        views: 441
    }
]

function Hero() {
    const blogs = useSelector((state: RootState) => state.blog.value)
    const rnd = Math.floor(Math.random() * blogs.length)
    const [rndBlog, setRndBlog] = useState(blogs[rnd])
    const [isBottom, setIsBottom] = useState(false);

    // Update the random blog every 8 seconds
    useEffect(() => {
        if (blogs.length > 0) {
            const updateRandomBlog = () => {
                const rnd = Math.floor(Math.random() * blogs.length);
                setRndBlog(blogs[rnd]);
            };

            const interval = setInterval(updateRandomBlog, 8000);
            return () => clearInterval(interval);
        }
    }, [blogs]);

    // Estimate read time
    const totalWords = rndBlog.content
        ? rndBlog.content.split(" ").length
        : 0;

    const estimatedTime = Math.ceil(totalWords / 200);
    // console.log(`Estimated read time: ${estimatedTime} min`); //debugging




    setTimeout(() => {
        setRndBlog(blogs[rnd])
    }, 8000)



    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY + window.innerHeight;
                    const docHeight = document.documentElement.scrollHeight;

                    if (scrollPosition >= docHeight - 10) {
                        setIsBottom(true);
                    } else {
                        setIsBottom(false);
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <>
            <div className="w-80 m-auto text-center">
                <img className="rounded-full w-22 m-auto" src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png" alt="" />
                <h1 className="text-4xl font-bold">Jzeko</h1>
                <p className="text-gray-400">A Stunning Personal Blog </p>
            </div>
            <div className='md:flex flex-col justify-between  gap-10'>
                {
                    blogs ?
                        <>
                            <div className=' md:w-9/12'>
                                <Link to={`/blog/${rndBlog._id}`}
                                    style={{ backgroundImage: `url(${rndBlog.image})` }}
                                    className="relative block h-96 md:w-11/12l w-11/12 m-auto my-10 text-white bg-no-repeat bg-cover bg-center rounded-2xl"
                                >
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-60 z-0 rounded-2xl"></div>

                                    {/* Content */}
                                    <div className="relative z-10 p-6">
                                        <span className=' rounded-4xl text-sm block w-30 h-6 text-center bg-red-400 text-white font-semibold m-auto my-10'>{rndBlog.category}</span>
                                        <h1 className='text-2xl font-bold text-center'>{rndBlog.title}</h1>
                                        <div className='flex items-center gap-2 justify-center my-2 font-bold  text-sm '>
                                            <p>Njeko</p>
                                            <p>{new Date(rndBlog.date).toISOString().split("T")[0]}</p>
                                            <p>-<AccessTimeIcon className='mx-1' style={{ fontSize: "17px" }} />{estimatedTime}min Read</p>
                                        </div>
                                    </div>


                                </Link>
                            </div>
                        </>
                        : "...loading"
                }
                  <div
      id="fixedBox"
      className={`md:w-3/12 mr-4 z-40 my-10 md:my-0 transition-all duration-300 ${
        isBottom
          ? "md:fixed bottom-10 right-0" // Fix it to the bottom when at the bottom
          : "md:fixed right-0 top-66" // Fix it to the top by default
      }`}
    >
                    <Feautured />
                    <RandomPost />
                </div>

            </div>
        </>
    )
}

export default Hero