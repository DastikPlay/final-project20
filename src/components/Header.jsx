import Img1 from '../assets/viber 1.png'
import Img2 from '../assets/003-whatsapp 1.png'
import Img3 from '../assets/003-telegram 1.png'
import Search from '../assets/Search.png'
import Balance from '../assets/balance 2.svg'
import Heart from '../assets/Heart.svg'
import Shop from '../assets/shopping-cart 2.svg'
import Img from '../assets/Group 1659.svg'

const Header = () => {
  return (
    <header>
      <div className='flex justify-between py-[13px] px-[165px]'>
        <div>
          <div className='flex'>
              <nav className='flex gap-[30px] text-[#5D6C7B]'>
              <a href="">Сервис</a>
              <a href="">Сотрудничество</a>
              <a href="">Донат</a>
            </nav>
            <div className='flex gap-[8.5px] ml-[30px] items-center'>
              <img className='w-[15px] h-[15px]' src={Img1} alt="1" />
              <img className='w-[15px] h-[15px]' src={Img2} alt="2" />
              <img className='w-[15px] h-[15px]' src={Img3} alt="3" />
            </div>
          </div>
        </div>
        <div className='flex gap-[9px]'>
          <span>+7 (800) 505-54-61 </span> <img src={Img} alt="dd" />
        </div>
      </div>
      <div className='border border-[#ECF3FF]'></div>



      <div className='px-[165px] py-[27px] flex justify-between'>
        <h1 className="text-[black] font-semibold text-[30px]">GAMEGO</h1>
        <div>
          <button className='w-[114px] h-[40px] bg-[gray] border-2 border-[gray] text-[white] rounded-[5px] text-base font-medium hover:bg-[white] hover:text-[gray] transition'>
            Каталог
          </button>
        </div>
        <div className='w-[603px] h-[40px] border-2 border-[gray] rounded-[5px] flex justify-between'>
          <div className='flex gap-[20px]'>
            <div className='w-[110px] h-[30px] bg-[#F4F7FB] rounded-[5px] flex items-center justify-center m-[3px]'>
              <select className='flex items-center justify-center' name="city" id="city-select">
                <option value="">Донат</option>
                <option value="">Roblox</option>
                <option value="">CS:GO</option>
                <option value="">CS 2</option>
                <option value="">StandOff 2</option>
                <option value="">Minecraft</option>
              </select>
            </div>
            <input className='w-[400px] h-[30px] my-[3px]' type="text" placeholder='Искать игру в GAMEGO' />
          </div>
          <div className='w-[40px] h-[38px] bg-[gray] flex items-center justify-center'>
            <img src={Search} alt="search" />
          </div>
        </div>
        <div className='flex mt-[10px]'>
          <div className='flex gap-[26px] h-[20px]'>
            <img src={Balance} alt="Balance" />
            <img src={Heart} alt="Heart" />
            <img src={Shop} alt="Shop" />
          </div>
          <span className='text-[#282739] font-medium ml-[10px]'>
            Корзина
          </span>
        </div>
      </div>

      <div className='h-[40px] bg-[#F4F7FB] mt-[14px] px-[155px]'>
        <nav className='text-[#282739] font-medium flex gap-[49px] p-[8px]'>
          <a className='hover:text-[green] transition' href="./blog">Донат</a>
          <a className='hover:text-[blue] transition' href="./contact">Контакты</a>
          <a className='hover:text-[yellow] transition' href="./stock">Акции</a> 
        </nav>
      </div>

    </header>
  )
}

export default Header