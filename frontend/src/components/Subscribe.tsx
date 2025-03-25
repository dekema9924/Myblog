

import SubscribeButton from './SubscribeButton'

function Subscribe() {
    return (
        <>
            <div className=' w-8/12 h-[300px] m-auto text-center flex flex-col justify-center items-center gap-4'>
                <h1 className='text-3xl font-semibold md:w-[500px]'>I’m on a seafood diet. I see food, and I eat it! 🍤😆</h1>
                <p className='md:w-[500px]'>a floating jellybean. Meanwhile, a sentient toaster debates philosophy with a sock that smells like nostalgia.</p>
                <form className='md:w-[500px] w-[300px]' action="">
                    <div className='relative flex items-center'>
                        <input className=' w-full border-2 border-red-200 h-11 md:pl-10 pl-2 rounded-lg' type="text" name='email' placeholder='your email address' />
                        <div className='absolute  right-0 px-2'>
                            <SubscribeButton />
                        </div>
                    </div>
                    <div className='flex flex-row-reverse my-2 justify-center gap-2'>
                        <p className='text-sm text-gray-400'>I agree to our <a className='font-bold text-gray-600' href="http://">Terms & conditions</a></p>
                        <input type="checkbox" name="conditions" id="" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Subscribe