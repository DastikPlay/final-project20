import { Link } from 'react-router-dom'
import Valve from '../assets/aq.jpg'
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
            <img className='relative w-[1400px] rounded-[15px]' src={Valve} alt="dfg" />
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
                    АКЦИИ ДЛЯ ДОНАТА В ИГРАХ
                </h1>
                <div className='flex'>
                    <div>
                        <h1 className='text-[#FFFFFF] w-[600px] text-[25px] font-semibold pt-[11px]'>
                            АКЦИИ ДЛЯ ИГР:
                        </h1>
                        <div className='flex flex-col gap-[3px]'>
                            <p className='text-[gray] text-[20px]'>Counter Strike 2</p>
                            <p className='text-[gray] text-[20px]'>StandOff 2</p>
                            <p className='text-[gray] text-[20px]'>Call of Duty</p>
                            <p className='text-[gray] text-[20px]'>Valorant</p>
                            <p className='text-[gray] text-[20px]'>Dota 2</p>
                            <p className='text-[gray] text-[20px]'>Minecraft</p>
                            <p className='text-[gray] text-[20px]'>Roblox</p>
                            <p className='text-[gray] text-[20px]'>Mobile Legends</p>
                            <p className='text-[gray] text-[20px]'>Pubg</p>
                            <p className='text-[gray] text-[20px]'>Free Fire</p>
                            <p className='text-[gray] text-[20px]'>Fortnite</p>
                            <p className='text-[gray] text-[20px]'>Undawn</p>
                            <p className='text-[gray] text-[20px]'>CS GO</p>
                        </div>
                    </div>
                    <div className='border border-[gray] mr-[200px] ml-[-200px]'></div>
                    <div>
                        <div>
                            <h1 className='text-[#FFFFFF] w-[600px] text-[25px] font-semibold pt-[11px]'>
                                БОНУС ПРИ ДОНАТЕ:
                            </h1>
                            <div className='flex flex-col gap-[3px]'>
                                <p className='text-[lime] text-[20px]'>акция на 15%</p>
                                <p className='text-[lime] text-[20px]'>акция на 10%</p>
                                <p className='text-[lime] text-[20px]'>акция на 20%</p>
                                <p className='text-[lime] text-[20px]'>акция на 5%</p>
                                <p className='text-[lime] text-[20px]'>акция на 10%</p>
                                <p className='text-[lime] text-[20px]'>акция на 15%</p>
                                <p className='text-[lime] text-[20px]'>акция на 10%</p>
                                <p className='text-[lime] text-[20px]'>акция на 5%</p>
                                <p className='text-[lime] text-[20px]'>акция на 25%</p>
                                <p className='text-[lime] text-[20px]'>акция на 20%</p>
                                <p className='text-[lime] text-[20px]'>акция на 10%</p>
                                <p className='text-[lime] text-[20px]'>акция на 5%</p>
                                <p className='text-[lime] text-[20px]'>акция на 15%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default IntroStock1