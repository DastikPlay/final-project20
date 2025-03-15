import { Link } from 'react-router-dom'
import Vector from '../assets/Vector.png'
import Scooter1 from '../assets/Scooter1.svg'
import VK from '../assets/012-vk 1.png'
import Insta from '../assets/013-instagram 1.svg'
import Youtube from '../assets/018-youtube 1.svg'
import TG from '../assets/003-telegram 2.png'
import EG from '../assets/EGroup100.svg'
import Eva from '../assets/eva.svg'

const Block1 = () => {
  return (
    <div>
        <div className='px-[165px] mt-[22px] flex gap-[5px] items-center'>
            <img className='w-[19px] h-[17px]' src={Vector} alt="sffed" />
            <div className='flex gap-[5px]'>
                <Link className='text-[#5D6C7B]' to="/">Главная</Link>
                <Link className='text-[#5D6C7B]' to="/blog"> / Блог</Link>
                <p> / Как правильно заряжать самокат</p>
            </div>
        </div>
      
        <div className='flex px-[250px] mt-[20px]'>
            <img className='relative rounded-[10px]' src={Scooter1} alt="slkdj" />
            <div className='absolute pl-[253px] pt-[26px]'>
                <div className='flex gap-[10px]'>
                    <img className="backdrop-blur-sm p-[10px] shadow-2xl text-[#5D6C7B] font-normal text-xs w-[37px] h-[37px] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition" src={VK} alt="adfg" />
                    <img className="backdrop-blur-sm p-[10px] shadow-2xl text-[#5D6C7B] font-normal text-xs w-[37px] h-[37px] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition" src={Insta} alt="stge" />
                    <img className="backdrop-blur-sm p-[10px] shadow-2xl text-[#5D6C7B] font-normal text-xs w-[37px] h-[37px] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition" src={Youtube} alt="asgaas" />
                    <img className="backdrop-blur-sm p-[10px] shadow-2xl text-[#5D6C7B] font-normal text-xs w-[37px] h-[37px] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition" src={TG} alt="sdgfsdgf" />
                </div>
                <div className='mt-[153px] flex'>
                    <p className='text-[#FFFFFF] text-[12px] pr-[20px]'>1 сентября 2021</p>
                    <div className="flex gap-[25px] text-[#F4F7FB] text-[12px]">
                        <div className="flex gap-[7px] items-center">
                            <div>
                                <img src={EG} alt="sdgh" />
                            </div>
                            <p>01.09.2021</p>
                        </div>
                        <div className="flex gap-[11px] items-center">
                            <div>
                                <img src={Eva} alt="sgadf" />
                            </div>
                            <p>53</p>
                        </div>
                    </div>
                </div>
                <h1 className='text-[#FFFFFF] w-[374px] text-[35px] font-semibold pt-[17px]'>КАК ПРАВИЛЬНО ЗАРЯЖАТЬ САМОКАТ</h1>
            </div>
        </div>
    </div>
  )
}

export default Block1