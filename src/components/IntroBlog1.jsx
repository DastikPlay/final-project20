import VK from '../assets/012-vk 1.png'
import Insta from '../assets/013-instagram 1.svg'
import Youtube from '../assets/018-youtube 1.svg'
import TG from '../assets/003-telegram 2.png'
import Vector from '../assets/Vector.png'
import Mask from '../assets/Mask.svg'
import { Link } from 'react-router-dom'

const IntroBlog1 = () => {
  return (
    <div>
      <div className='px-[165px] mt-[22px] flex gap-[5px] items-center'>
        <img className='w-[19px] h-[17px]' src={Vector} alt="sffed" />
        <div className='flex gap-[5px]'>
          <Link className='text-[#5D6C7B]' to="/">Главная</Link>
          <p> / Блог</p>
        </div>
      </div>

      <div className='mt-[20px] px-[100px] flex'>
        <img className='relative' src={Mask} alt="sggf" />
        <div className='absolute py-[74.5px] pl-[133px]'>
          <h1 className='text-[#FFFFFF] w-[600px] text-[35px] font-semibold pt-[px]'>
            БЛОГ KUGOO
          </h1>
        </div>
      </div>

      <div className='mt-[50px] px-[165px] flex justify-between'>
        <div className='flex gap-[10px]'>
          <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[59px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Все</button>
          <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[74px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Видео</button>
          <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[78px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Советы</button>
          <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[99px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Сравнения</button>
          <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[58px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Топ</button>
        </div>
        <div className='flex gap-[10px]'>
          <img className="p-[10px] shadow-2xl text-[#5D6C7B] font-normal text-xs w-[37px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition" src={VK} alt="adfg" />  
          <img className="p-[10px] shadow-2xl text-[#5D6C7B] font-normal text-xs w-[37px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition" src={Insta} alt="stge" />              
          <img className="p-[10px] shadow-2xl text-[#5D6C7B] font-normal text-xs w-[37px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition" src={Youtube} alt="asgaas" />                       
          <img className="p-[10px] shadow-2xl text-[#5D6C7B] font-normal text-xs w-[37px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition" src={TG} alt="sdgfsdgf" />  
        </div>
      </div>
    </div>
  )
}

export default IntroBlog1