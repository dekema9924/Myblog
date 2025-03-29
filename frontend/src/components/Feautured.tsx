import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Config from "../config/config"

interface FeaturedProps {
    title: string
    date: string
    image: string | null
    _id: string
}
function Feautured() {

    const initialState: FeaturedProps[] = []
    

    const [featured, setFeatured] = useState(initialState)

    useEffect(()=>{
        axios.get(`${Config.ApiUrl}/blogs/trending`).then((response)=>{
            console.log(response)
            setFeatured(response.data.trending)
            
        })
    },[])
    
    return (
        <>
            <section className=" md:w-11/12 w-full p-4 flex flex-col gap-4 shadow-2xl bg-white">
                <p className="text-gray-500 font-bold">Trending</p>

                {
                    featured?.map((post) => {
                        return (
                            <>
                                <div>
                                
                                    <Link to={`/blog/${post._id}`} key={post._id} className="flex items-center gap-4">
                                        {post.image ? <img src={post.image} alt="blogPoster" className="w-24 h-24 object-cover" /> : ""}
                                        <div>
                                            <h1 className="text-xl font-bold  ">{post.title}</h1>
                                            <p>{new Date(post.date).toISOString().split("T")[0]}</p>

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



