import Image from 'next/image'
import imageone from '/public/imageone.jpg'
import imagetwo from '/public/imagetwo.jpg'


export default function Home() {
  return (
    <div className='flex flex-col justify-center  items-center text-white h-screen'>
      <div className='bg-indigo-950  sm:flex flex-row justify-between sm:w-[900px] sm:h-[355px] w-[350px] h-[820px] rounded-xl '>
        <div className='bg-purple-800 sm:hidden rounded-t-xl'>
          <Image src={imagetwo} alt='imageone ' className='sm:rounded-r-xl rounded-t-xl opacity-50 ' />
        </div>
        <div >
          {/* {desktop} */}
          <div className='flex flex-col gap-5 mx-10 my-10 '>
            <div className='sm:flex sm:flex-col sm:text-4xl text-3xl  sm:gap-2 sm:block hidden'>
              <div className='sm:flex sm:flex-row flex gap-2  '>
                <h1>Get</h1>
                <h1 className='text-purple-400'>insights</h1>
                <h1 className='sm:hidden'>that</h1>
              </div>
              <h1 >
                your business grow
              </h1>

            </div>
            {/* {mobile} */}
            <div className='flex flex-col items-center justify-center  text-3xl  sm:gap-2 sm:hidden'>
              <div className='flex flex-row gap-1 '>
                <h1>Get</h1>
                <h1 className='text-purple-400'>insights</h1>
                <h1>that</h1>
              </div>
              <h1>help your business</h1>
              <h1>grow.</h1>
            </div>
            {/* {desktop} */}
            <div className='sm:block hidden'>
              <span className='mt-2 text-gray-300 text-sm'>Discover the benefits of data analytics and make
                <br />better decisions regarding revenue,customer
                <br />experience,and overall efficiency
              </span>
            </div>
            {/* {mobile} */}
            <div className='sm:hidden text-center'>
              <span className='mt-2 text-gray-300 text-sm'>Discover the benefits of data
                <br />analytics and make better decisions
                <br />regarding revenue,customer
                <br />experience,and overall efficiency
              </span>
            </div>
            <div className='sm:flex  sm:flex-row sm:mt-5 sm:gap-20 flex flex-col gap-10 justify-center text-center'>
              <div>
                <h1 className='text-2xl'>10k+</h1>
                <h1 className='text-gray-300 text-sm'>COMPANIES</h1>
              </div>
              <div>
                <h1 className='text-2xl'>314 </h1>
                <h1 className='text-gray-300  text-sm'>TEMPLATES</h1>
              </div>
              <div>
                <h1 className='text-2xl'>12M+</h1>
                <h1 className='text-gray-300  text-sm'>QUERIES</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:block hidden  bg-purple-800 sm:rounded-r-xl rounded-t-xl  '>
          <Image src={imageone} alt='imageone ' className='sm:rounded-r-xl 
          opacity-50 ' />
        </div>
      </div>
    </div>
  )
}
