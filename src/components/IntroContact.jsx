import Vector from '../assets/Vector.png'
import Mask2 from '../assets/Mask2.svg'
import { Link } from 'react-router-dom';

const IntroContact = () => {
  return (
    <div>
      <div className='px-[165px] mt-[22px] flex gap-[5px] items-center'>
        <img className='w-[19px] h-[17px]' src={Vector} alt="sffed" />
        <div className='flex gap-[5px]'>
          <Link className='text-[#5D6C7B]' to="/">Главная</Link>
          <p> / Контакты</p>
        </div>
      </div>
      <div className='flex mt-[20px] px-[100px]'>
        <img className='relative' src={Mask2} alt="sdfg" />
        <div className='absolute py-[74px] pl-[136px]'>
          <h1 className='text-[white] text-[35px] font-semibold'>КОНТАКТЫ И АДРЕСА</h1>
        </div>
      </div>
    </div>
  )
}

export default IntroContact