import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima commodi omnis amet vero minus veritatis! Quae veritatis voluptates impedit recusandae sapiente cupiditate ea eum consequuntur saepe dicta adipisci, ipsam harum.</p>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error ratione minus rem corrupti ea totam at mollitia quod. Error voluptatum, dolore aut distinctio dolorem eum libero. Ipsam, consequuntur obcaecati?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aliquam vero eaque repellat quasi inventore expedita ullam voluptas sit quod. Cumque non, explicabo excepturi reiciendis ea consequatur dolorum ullam cum!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia neque unde, suscipit vitae est ipsa incidunt. Provident molestiae repellendus, deserunt eligendi hic commodi doloribus quibusdam vero quia porro quasi sint?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia neque unde, suscipit vitae est ipsa incidunt. Provident molestiae repellendus, deserunt eligendi hic commodi doloribus quibusdam vero quia porro quasi sint?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia neque unde, suscipit vitae est ipsa incidunt. Provident molestiae repellendus, deserunt eligendi hic commodi doloribus quibusdam vero quia porro quasi sint?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About