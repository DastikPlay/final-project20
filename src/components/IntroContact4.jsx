import React from 'react'
import Phone from '../assets/Phone.png'
import WhatsApp from '../assets/whatsapp.png'
import Gmail from '../assets/Gmail.png'

const Contact = () => {
  return (
    <div className='py-[44px] mx-[70px] px-[135px] h-[417px] bg-[#F4F7FB] flex items-start gap-[100px] mt-[100px] rounded-[10px] w-[1400px] flex justify-center'>
      <div>
        <h3 className='text-[18px] font-semibold w-[199px]  text-[#282739] '>ОТДЕЛ РЕКЛАМАЦИЙ И ПРЕЗИНТАЦИЙ</h3>
        <div className='flex items-center gap-2 mt-[27px]'>
          <img src={Gmail} alt="" /><h1>claim@kugoo-russia.ru</h1>
        </div>
        <div className='flex items-center gap-2 mt-[20px]'>
          <img src={Phone} alt="" /><h1>+7 (499) 350-76-92</h1>
        </div>
        <p className='text-[#5D6C7B]'>Ср-Вс 10:00 - 19:00</p>
        <div className='flex items-center gap-2 mt-[20px]'>
          <img src={WhatsApp} alt="" /><h1>+7 (911) 284-53-19</h1>
        </div>
        <p className='text-[#5D6C7B]'>Ср-Вс 10:00 - 19:00</p>
        <h1 className='text-[#6F73EE] mt-[12px]'>Скачать шаблон </h1>
        <button className='bg-[#6F73EE] border-[0px] w-[157px] rounded-[5px] h-[37px] mt-[27px]'>
          <h1 className='text-[white]'>Send message</h1>
        </button>
      </div>
      <div>
        <h3 className='text-[18px] font-semibold w-[199px]  text-[#282739]'>
          ОПТОВЫЙ ОТДЕЛ
        </h3>
        <div className='flex items-center gap-2 mt-[53px]'>

          <img src={Gmail} alt="" /><h1>opt@kugoo-russia.ru</h1>
        </div>
        <div className='flex items-center gap-2 mt-[20px]'>

          <img src={Phone} alt="" /><h1>+7 (499) 281-64-52</h1>
        </div>
        <p className='text-[#5D6C7B]'>Ср-Вс 10:00 - 19:00</p>
      </div>
      <div>
        <h3 className='text-[18px] font-semibold w-[199px]  text-[#282739]'>
          ОТДЕЛ МАРКЕТИНГА И РЕКЛАМЫ
        </h3>
        <div className='flex items-center gap-2 mt-[27px]'>

          <img src={Gmail} alt="" /><h1>marketing@kugoo.ru</h1>
        </div>
      </div>
      <div>
        <h3 className='text-[18px] font-semibold w-[212px]  text-[#282739]'>
          НАПИСАТЬ ДИРЕКТОРУ
        </h3>
        <p className='mt-[58px] w-[250px]'>Если у вас возникли предложения или пожелания, которые помогут
          улучшить работу нашей компании, вы можете написать через<h1 className='text-[#6F73EE]'>специальную форму</h1>
          напрямую руководителю компании.</p>
      </div>      
    </div>
  )
}

export default Contact