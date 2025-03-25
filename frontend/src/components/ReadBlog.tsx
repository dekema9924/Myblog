import { useParams } from "react-router-dom"
import Subscribe from "./Subscribe"
import SImilarPost from "./SImilarPost"



function ReadBlog() {
    const { id } = useParams<{ id: string }>()
    return (
        <>
        <p>{id}</p>
            <section className="bg-[#f0f0f0]">
                <div className="w-80 m-auto pt-10 text-center">
                    <img className="rounded-full w-22 m-auto" src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67347bab768161001d967d2a.png" alt="" />
                    <h1 className="text-4xl font-bold">Jzeko</h1>
                    <p className="text-gray-400">A Stunning Personal Blog </p>
                </div>
                <div className="w-9/12  m-auto my-4">
                    <img src="https://www.3forty.media/ruki/wp-content/uploads/2020/06/buddha-1600x680.jpg" alt="postImg" />


                    <div className="w-11/12 m-auto py-4">
                        <p className="bg-red-400 w-fit text-sm p-1 text-white rounded-md">Art & design</p>
                        <h1 className="md:text-[3em] font-bold text-2xl  w-70 my-4   md:w-8/12">Out believe has request not how comfort evident</h1>
                        <div className="text-gray-500">
                            <p>by <span className="text-black font-bold">Lewis Skelly</span></p>
                            <p>March 6th 2025</p>
                        </div>

                        <div>
                            <p className="w-11/12 my-10 font-sans text-lg leading-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi provident voluptatem obcaecati, tempora aliquam cumque pariatur qui. Saepe, distinctio repellendus dolor impedit dolorem quis error consectetur facilis natus placeat.
                                Temporibus aperiam praesentium molestias dolore quia esse expedita provident nihil sit eum quam dolor iure necessitatibus, quis placeat deleniti sint repellendus natus itaque est culpa commodi reprehenderit ex hic. Non.
                                Eaque expedita quaerat, doloribus accusantium quas explicabo quae dicta repudiandae repellendus non nam corporis aspernatur temporibus provident ducimus, quasi nobis mollitia ipsam optio incidunt repellat quia magnam voluptatum. Aut, ad.
                                Repellat facilis voluptas magnam modi autem quidem, deleniti officia quam facere quis corporis similique sequi possimus tempora explicabo odit ratione vitae laboriosam accusantium ipsam. Culpa quod accusantium ducimus ratione eius.
                                Dolorem, illum optio illo libero id sequi sed. Debitis error commodi molestias odit, tenetur sunt maxime nesciunt minus at, placeat totam nam et minima natus quibusdam officiis. Cumque, cum repellat!
                                Ipsa culpa animi, at quam cum necessitatibus vel, fugit pariatur consequatur ab eos? Provident, eius. Perspiciatis quidem praesentium atque fugit? Ipsam facere sequi dolore nulla molestiae iusto odit ea mollitia?
                                Veritatis, labore? Ex a dicta harum sunt esse quaerat, neque architecto distinctio expedita, quod ducimus possimus amet excepturi mollitia soluta non unde. Adipisci unde possimus natus minus, necessitatibus omnis nam!
                                Minima nulla perspiciatis commodi possimus iusto alias! Aperiam odio velit accusantium repudiandae rerum odit magnam dolor eius alias numquam, cum suscipit maiores, mollitia molestiae blanditiis ipsum quis, fugiat inventore ullam?
                                Dolor, veniam? Nostrum soluta exercitationem dignissimos ad blanditiis ipsa dolorum ipsam voluptatum cupiditate? Aspernatur repellat obcaecati dolore praesentium qui repellendus vel, nesciunt laborum, rem corrupti enim assumenda odio ea ex!
                            </p>
                        </div>

                    </div>

                </div>
            </section>

           <Subscribe/>
           <SImilarPost/>
        </>
    )
}

export default ReadBlog