import Avatar from '../assets/Avatar.svg'
import Robot1 from '../assets/robot1.png'
import Robot2 from '../assets/robot2.png'
import Robot3 from '../assets/robot3.png'
import Cs2 from '../assets/cs.png'
import standoff from '../assets/standoff.png'
import minecraft from '../assets/minecraft.png'
import roblox from '../assets/roblox.png'
import frrn from '../assets/frrn.png'
import cod from '../assets/cod.webp'
import pg from '../assets/pg.webp'
import vl from '../assets/vl.png'

const IntroHome4 = () => {
  return (
    <div className='mt-[100px] px-[165px]'>
      <div className='flex items-center justify-between'>
        <h1 className="text-[black] font-semibold text-[35px]">ЦЕНЫ НА ДОНАТ</h1>
        <div className='w-[279px] h-[91px] bg-[#F4F7FB] rounded-[5px] shadow-2xl flex items-center gap-[19px]'>
          <img className='pl-[10px]' src={Avatar} alt="sdgf" />
          <div className='flex flex-col'>
            <p className='text-[#282739] text-[12px] font-semibold w-[178px]'>Менеджер ответит на любой ваш вопрос о продуктах GameGo</p>
            <a className='text-[gray] pt-[6px] text-[12px]' href="">Задать вопрос</a>
          </div>
        </div>
      </div>

      <div className='mt-[68px]'>
        <div className='flex justify-between'>
          <div className='flex'>
            <img className='relative rounded-[10px] w-[255px] h-[255px]' src={Cs2} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Counter-Strike2</p>
              <p>от 1000 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px] w-[255px] h-[255px]' src={standoff} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Standoff2</p>
              <p>от 1000 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px] w-[255px] h-[255px]' src={minecraft} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>MineCraft</p>
              <p>от 1000 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px] w-[255px] h-[255px]' src={roblox} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Roblox</p>
              <p>от 500 ₽</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-[30px]'>
          <div className='flex'>
            <img className='relative rounded-[10px] w-[255px] h-[255px]' src={frrn} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Fortnite</p>
              <p>от 1500 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px] w-[255px] h-[255px]' src={cod} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Call Of Duty</p>
              <p>от 1000 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px] w-[255px] h-[255px]' src={pg} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Pubg </p>
              <p>от 2000 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px] w-[255px] h-[255px]' src={vl} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Valorant</p>
              <p>от 1000 ₽</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-[50px]'>
          <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[142px] h-[53px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Смотреть все</button>
        </div>
      </div>
    </div>
  )
}

export default IntroHome4