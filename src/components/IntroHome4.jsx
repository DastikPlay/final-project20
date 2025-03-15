import Avatar from '../assets/Avatar.svg'
import Robot1 from '../assets/robot1.png'
import Robot2 from '../assets/robot2.png'
import Robot3 from '../assets/robot3.png'

const IntroHome4 = () => {
  return (
    <div className='mt-[100px] px-[165px]'>
      <div className='flex items-center justify-between'>
        <h1 className="text-[black] font-semibold text-[35px]">ЭЛЕКТРОСАМОКАТЫ</h1>
        <div className='w-[279px] h-[91px] bg-[#F4F7FB] rounded-[5px] shadow-2xl flex items-center gap-[19px]'>
          <img className='pl-[10px]' src={Avatar} alt="sdgf" />
          <div className='flex flex-col'>
            <p className='text-[#282739] text-[12px] font-semibold w-[178px]'>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
            <a className='text-[#6F73EE] pt-[6px] text-[12px]' href="">Задать вопрос</a>
          </div>
        </div>
      </div>
        
      <div className='mt-[68px]'>
        <div className='flex justify-between'>
          <div className='flex'>
            <img className='relative rounded-[10px]' src={Robot1} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Робот-пылесоссы</p>
              <p>от 29 900 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px]' src={Robot2} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Электровелосипеды</p>
              <p>от 29 900 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px]' src={Robot3} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Весы</p>
              <p>от 29 900 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px]' src={Robot1} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Робот-пылесоссы</p>
              <p>от 29 900 ₽</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-[30px]'>
          <div className='flex'>
            <img className='relative rounded-[10px]' src={Robot3} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Робот-пылесоссы</p>
              <p>от 29 900 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px]' src={Robot1} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Электровелосипеды</p>
              <p>от 29 900 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px]' src={Robot2} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Весы</p>
              <p>от 29 900 ₽</p>
            </div>
          </div>
          <div className='flex'>
            <img className='relative rounded-[10px]' src={Robot3} alt="sdfs" />
            <div className='absolute w-[233px] h-[69px] rounded-[10px] text-[white] backdrop-blur-sm py-[10px] pl-[16px] mt-[176px] m-[12px]'>
              <p>Робот-пылесоссы</p>
              <p>от 29 900 ₽</p>
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