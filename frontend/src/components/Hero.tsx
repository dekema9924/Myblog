import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {  useEffect, useState } from 'react';
import Feautured from './Feautured';
import RandomPost from './RandomPost';

export interface Blog {
    id: number
    title: string
    date: string
    readTime: number
    description: string
    category: string
    img: string
}

export const initialBlog: Blog[] = [
    {
        title: 'Style begin mr heard by in music do',
        date: 'March 6, 2025',
        readTime: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloribus accusantium, nemo ducimus impedit distinctio repellat, id amet nam dignissimos quo ipsam ex illo sequi vel perspiciatis asperiores incidunt commodi.',
        category: 'Beauty',
        id: 1,
        img: 'https://www.3forty.media/ruki/wp-content/uploads/2020/06/60643-768x768.jpg'
    },
    {
        title: 'Style begin mr heard by in music do',
        date: 'March 5, 2025',
        readTime: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloribus accusantium, nemo ducimus impedit distinctio repellat, id amet nam dignissimos quo ipsam ex illo sequi vel perspiciatis asperiores incidunt commodi.',
        category: 'Art',
        id: 2,
        img: 'https://www.3forty.media/jinko/demo-2/wp-content/uploads/2024/03/tfm-featured-image-1-scaled-1-1024x1024.webp'
    },
    {
        title: 'Style begin mr heard by in music do',
        date: 'March 7, 2025',
        readTime: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloribus accusantium, nemo ducimus impedit distinctio repellat, id amet nam dignissimos quo ipsam ex illo sequi vel perspiciatis asperiores incidunt commodi.',
        category: 'Happy',
        id: 3,
        img: 'https://www.3forty.media/ruki/wp-content/uploads/2020/06/japan-scene2-768x1086.jpg'
    },
    {
        title: 'Style begin mr heard by in music do',
        date: 'March 7, 2025',
        readTime: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloribus accusantium, nemo ducimus impedit distinctio repellat, id amet nam dignissimos quo ipsam ex illo sequi vel perspiciatis asperiores incidunt commodi.',
        category: 'Happy',
        id: 3,
        img: 'https://www.3forty.media/ruki/wp-content/uploads/2020/06/japan-scene2-768x1086.jpg'
    },
    {
        title: 'Style begin mr heard by in music do',
        date: 'March 7, 2025',
        readTime: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloribus accusantium, nemo ducimus impedit distinctio repellat, id amet nam dignissimos quo ipsam ex illo sequi vel perspiciatis asperiores incidunt commodi.',
        category: 'Happy',
        id: 3,
        img: 'https://www.3forty.media/ruki/wp-content/uploads/2020/06/japan-scene2-768x1086.jpg'
    },
    {
        title: 'Style begin mr heard by in music do',
        date: 'March 7, 2025',
        readTime: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloribus accusantium, nemo ducimus impedit distinctio repellat, id amet nam dignissimos quo ipsam ex illo sequi vel perspiciatis asperiores incidunt commodi.',
        category: 'Happy',
        id: 3,
        img: 'https://www.3forty.media/ruki/wp-content/uploads/2020/06/japan-scene2-768x1086.jpg'
    }
]

function Hero() {
    const rnd = Math.floor(Math.random() * initialBlog.length)

    const [rndBlog, setRndBlog] = useState(initialBlog[rnd])

    setTimeout(() => {
        setRndBlog(initialBlog[rnd])
    }, 4000)


    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const footerHeight = 100; // Adjust based on actual footer height
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
  
        // Check if the user has scrolled to the bottom
        if (scrollY + winHeight >= docHeight - footerHeight) {
          setIsBottom(true);
        } else {
          setIsBottom(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      
      // Cleanup on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  


    return (
        <>
            <div className="w-80 m-auto text-center">
                <img className="rounded-full w-22 m-auto" src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png" alt="" />
                <h1 className="text-4xl font-bold">Jzeko</h1>
                <p className="text-gray-400">A Stunning Personal Blog </p>
            </div>
            <div className='md:flex flex-col justify-between  gap-10'>
                <div className=' md:w-9/12'>
                    <div
                        style={{ backgroundImage: `url(${rndBlog.img})` }}
                        className="relative border-2 h-96 md:w-11/12l w-11/12 m-auto my-10 text-white bg-no-repeat bg-cover bg-center rounded-2xl"
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-60 z-0 rounded-2xl"></div>

                        {/* Content */}
                        <div className="relative z-10 p-6">
                            <span className=' rounded-4xl text-sm block w-30 h-6 text-center bg-red-400 text-white font-semibold m-auto my-10'>{rndBlog.category}</span>
                            <h1 className='text-2xl font-bold text-center'>{rndBlog.title}</h1>
                            <div className='flex items-center gap-2 justify-center my-2 font-bold  text-sm '>
                                <img src="" alt="" />
                                <p>Njeko</p>
                                <p>-{rndBlog.date}</p>
                                <p>-<AccessTimeIcon className='mx-1' style={{ fontSize: "17px" }} />{rndBlog.readTime}min Read</p>
                            </div>
                        </div>


                    </div>
                </div>

               <div 
                 id="fixedBox"
                className={`md:w-3/12 mr-4 z-40 my-10 md:my-0 transition-all duration-300 ${
            isBottom ? "absolute  left-0 right-0 mx-auto transition-all duration-300" : "md:fixed right-0 transition-all duration-300"
                 }`}
               >
                      <Feautured />
                      <RandomPost/>
               </div>

            </div>
        </>
    )
}

export default Hero