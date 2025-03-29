import { useParams } from "react-router-dom"
import Subscribe from "./Subscribe"
import SImilarPost from "./SImilarPost"
import axios from "axios"
import { useEffect, useState } from "react"
import Config from "../config/config"

interface ReadBlogInterface {
    title: string | null
    content: string | null
    date: Date | null
    image: string | null
    category: string | null
}

function ReadBlog() {
    const { id } = useParams<{ id: string }>()
    const [blog, setBlog] = useState<ReadBlogInterface>()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get(`${Config.ApiUrl}/blogs/${id}`).then((response) => {
            // console.log(response.data)
            setBlog(response.data)
            setIsLoading(false)
        })
    }, [id])
    return (
        <>
            <section className="bg-[#f0f0f0]">
                <div className="w-80 m-auto pt-10 text-center">
                    <img className="rounded-full w-22 m-auto" src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png" alt="" />
                    <h1 className="text-4xl font-bold">Jzeko</h1>
                    <p className="text-gray-400">A Stunning Personal Blog </p>
                </div>
                {
                    !isLoading ?

                        <>
                            <div className="w-9/12  m-auto my-4">
                                <img className="w-full h-80 object-cover" src={blog?.image ?? "https://via.placeholder.com/720"} alt="postImg" />


                                <div className="w-11/12 m-auto py-4">
                                    <p className="bg-red-400 w-fit text-sm p-1 text-white rounded-md">{blog?.category}</p>
                                    <h1 className="md:text-[3em] font-bold text-2xl  w-70 my-4   md:w-8/12">{blog?.title}</h1>
                                    <div className="text-gray-500">
                                        <p>by <span className="text-black font-bold">Lewis Skelly</span></p>
                                        <p>{blog?.date ? new Date(blog.date).toISOString().split("T")[0] : "Unknown Date"}</p>

                                    </div>

                                    <div>
                                        <p className="w-11/12 my-10 font-sans text-lg leading-8">
                                            {blog?.content}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </>
                        : ""
                }
            </section>

            <Subscribe />
            <SImilarPost
                category={blog?.category ?? "technology"}

            />
        </>
    )
}

export default ReadBlog