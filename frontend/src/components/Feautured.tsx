import { useState } from "react"
import { Link } from "react-router-dom"

interface FeaturedProps {
    title: string
    date: string
    img: string | null
    id: string
}
function Feautured() {

    const initialState: FeaturedProps[] = [
        {
            title: 'Lorem ipsum dolor sit amet consectetur',
            date: 'March 6, 2025',
            img: null,
            id: `3`
        },
        {

            
            title: 'Style begin mr heard by in music do',
            date: 'March 6, 2025',
            img: 'https://www.3forty.media/jinko/demo-2/wp-content/uploads/2024/03/tfm-featured-image-1-scaled-1-1024x1024.webp',
            id: `1`
        },
        {
            title: 'Style begin mr docks in the tuesday',
            date: 'March 5, 2025',
            img: 'https://www.3forty.media/jinko/demo-2/wp-content/uploads/2024/03/tfm-featured-image-1-scaled-1-1024x1024.webp',
            id: `2`
        },
      
    ]

    const [featured, setFeatured] = useState(initialState)
    return (
        <>
            <section className=" md:w-11/12 w-full p-4 flex flex-col gap-4 shadow-2xl bg-white">
                <p className="text-gray-500 font-bold">Featured</p>

                {
                    featured.map((post, index) => {
                        return (
                            <>
                                <div>
                                
                                    <Link to={`/blog/${post.id}`} key={index} className="flex items-center gap-4">
                                        {post.img ? <img src={post.img} alt="" className="w-24 h-24 object-cover" /> : ""}
                                        <div>
                                            <h1 className="text-xl font-bold  ">{post.title}</h1>
                                            <p>{post.date}</p>
                                        </div>
                                    </Link>
                                </div>
                            </>

                        )
                    })
                }


            </section>



        </>
    )
}

export default Feautured



