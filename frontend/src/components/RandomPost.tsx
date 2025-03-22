

import AccessTimeIcon from '@mui/icons-material/AccessTime';

function RandomPost() {
    return (
        <>
            <section className='w-11/12 m-auto mt-10 shadow-2xl p-4'>
                <img className='w-full h-80 object-cover relative' src="https://www.3forty.media/ruki/wp-content/uploads/2020/06/yoga-768x1149.jpg" alt="blogImg" />
                <div className='flex justify-between my-4 '>
                    <p className='ml-4 rounded-lg bg-red-400  text-white font-bold w-44 text-center text-sm  '>Art & Design</p>
                    <p className=' bg-white rounded-xl text-gray-400'><AccessTimeIcon />2min</p>
                </div>


                <h1 className='text-3xl font-bold capitalize my-2'>Terminated resolution no am frequently collecting insensible hw do appearance</h1>
                <p className='text-gray-600 text-sm'>March 6, 2025</p>
                <p className='text-gray-500 my-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quaerat nesciunt. Ut necessitatibus tenetur hic! Deserunt, sunt necessitatibus. Suscipit iusto provident debitis sit sequi perferendis earum ea dicta harum rerum!</p>

                <hr className='my-10 border-gray-300' />
                <p className=' font-bold'>Continue Reading</p>
            </section>
        </>
    )
}

export default RandomPost