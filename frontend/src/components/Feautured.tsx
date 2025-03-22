import { useState } from "react"

interface FeaturedProps {
    title: string
    date: string
    img: string
}
function Feautured() {

    const initialState: FeaturedProps[] = [
        {
            title: 'Style begin mr heard by in music do',
            date: 'March 6, 2025',
            img: 'https://www.3forty.media/jinko/demo-2/wp-content/uploads/2024/03/tfm-featured-image-1-scaled-1-1024x1024.webp'
        },
        {
            title: 'Style begin mr docks in the tuesday',
            date: 'March 5, 2025',
            img: 'https://www.3forty.media/jinko/demo-2/wp-content/uploads/2024/03/tfm-featured-image-1-scaled-1-1024x1024.webp'
        }
    ]

    const [featured, setFeatured] = useState(initialState)
    return (
        <>
            <section className=" md:w-11/12 w-full p-4 flex flex-col gap-4 shadow-2xl bg-white">
                <p className="text-gray-500 font-bold">Featured</p>
                <div>
                    <h1 className="text-3xl font-bold w-11/12 my-2">Lorem ipsum dolor sit amet consectetur </h1>
                    <p>march 6, 2024</p>
                </div>
                {
                    featured.map((post, index) => {
                        return (
                            <>

                                <div key={index}  className="flex items-center gap-4">
                                    <img className="w-22 rounded-full" src={post.img}alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold ">{post.title}</h1>
                                        <p>{post.date}</p>
                                    </div>
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



