import { Link } from 'react-router-dom'
import Scooter from '../assets/Scooter25.svg'
import Vector from '../assets/Vector.png'

const IntroStock1 = () => {
  return (
    <div>
        <div className='px-[165px] mt-[22px] flex gap-[5px] items-center'>
            <img className='w-[19px] h-[17px]' src={Vector} alt="sffed" />
            <div className='flex gap-[5px]'>
            <Link className='text-[#5D6C7B]' to="/">Главная</Link>
            <p> / Акции</p>
            </div>
        </div>
    
        <div className='flex mt-[20px] px-[100px]'>
            <img className='relative' src={Scooter} alt="dfg" />
            <div className='absolute pl-[135px] pt-[33px]'>
            <div className='flex gap-[10px]'>
                <button className='w-[75px] h-[25px] bg-[#EE685F] text-[white] text-[14px] rounded-[5px]'>
                <a href="">До 01.09</a>
                </button>
                <button className='w-[93px] h-[25px] bg-[#75D14A] text-[white] text-[14px] rounded-[5px]'>
                <a href="">+ 2 подарка</a>
                </button>
            </div>
            <div>
                <h1 className='text-[#FFFFFF] w-[600px] text-[35px] font-semibold pt-[11px]'>
                ВЫГОДА 2880 RUB ПРИ ПОКУПКЕ KUGOO KIRIN M4 PRO13 AH
                </h1>
            </div>
            </div>
        </div>
    </div>
  )
}

export default IntroStock1