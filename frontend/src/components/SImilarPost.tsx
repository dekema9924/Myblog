

import { useState } from 'react'
import { Link } from 'react-router-dom'

interface similarPostInterface {
    categorey: string
    id: string
    title: string
    img: string
    authur: string
}

function SImilarPost() {
    const initialSimilarPost: similarPostInterface[] = [
        {
            categorey: 'Art & design',
            id: '1',
            title: 'an ancient clock tower ticked backward, counting down to an event no one remembered but everyone feared',
            img: 'https://www.3forty.media/ruki/wp-content/uploads/2020/06/62841-900x600.jpg',
            authur: 'Will lewis'
        },
        {
            categorey: 'Art & design',
            id: '2',
            title: 'an ancient clock tower ticked backward, counting down to an event no one remembered but everyone feared',
            img: 'https://www.3forty.media/ruki/wp-content/uploads/2020/06/62841-900x600.jpg',
            authur: 'Will lewis'
        },
        {
            categorey: 'Art & design',
            id: '3',
            title: 'an ancient clock tower ticked backward, counting down to an event no one remembered but everyone feared',
            img: 'https://www.3forty.media/ruki/wp-content/uploads/2020/06/62841-900x600.jpg',
            authur: 'Will lewis'
        }
    ]
    const [similarPost, setSimilarPost] = useState<similarPostInterface[]>(initialSimilarPost)

    return (
        <>
            <h1 className='text-4xl  font-bold mt-14 text-center'>You may also like</h1>
            <div className='md:pl-4 flex flex-col md:flex-row justify-center items-center gap-10 md:h-96 my-4 bg-red-100 '>
                {
                    similarPost.map((post) => {
                        return (
                            <Link to={`/blog/${post.id}`} key={post.id} className='md:w-66  rounded-lg shadow-2xl '>
                                <div className='relative'>
                                    <img className='rounded-lg' src={post.img} alt="blogPoster" />
                                    <p className="bg-red-400 w-fit text-sm border-2 p-1 text-white rounded-md absolute -bottom-4 left-4">{post.categorey}</p>
                                </div>
                                <div className='p-2'>
                                    <h1 className='font-bold mt-4'>{post.title}</h1>
                                    <p className='text-gray-500 font-semibold capitalize text-sm'>{post.authur}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SImilarPost