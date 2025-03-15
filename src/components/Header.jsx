import Img1 from '../assets/viber 1.png'
import Img2 from '../assets/003-whatsapp 1.png'
import Img3 from '../assets/003-telegram 1.png'
import Logo from '../assets/Kugoo.svg'
import Search from '../assets/Search.png'
import Balance from '../assets/balance 2.svg'
import Heart from '../assets/Heart.svg'
import Shop from '../assets/shopping-cart 2.svg'
import Img from '../assets/Group 1659.svg'
import Img4 from '../assets/Group 150.svg'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='flex justify-between py-[13px] px-[165px]'>
        <div>
          <div className='flex'>
              <nav className='flex gap-[30px] text-[#5D6C7B]'>
              <a href="">Сервис</a>
              <a href="">Сотрудничество</a>
              <a href="">Заказать звонок</a>
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
        <img src={Logo} alt="logo" />
        <div>
          <button className='w-[114px] h-[40px] bg-[#6F73EE] border-2 border-[#6F73EE] text-[white] rounded-[5px] text-base font-medium hover:bg-[white] hover:text-[#6F73EE] transition'>
            Каталог
          </button>
        </div>
        <div className='w-[603px] h-[40px] border-2 border-[#6F73EE] rounded-[5px] flex justify-between'>
          <div className='flex gap-[20px]'>
            <div className='w-[110px] h-[30px] bg-[#F4F7FB] rounded-[5px] flex items-center justify-center m-[3px]'>
              <select className='flex items-center justify-center' name="city" id="city-select">
                <option value="">Везде</option>
                <option value="">Африка</option>
                <option value="">Америка</option>
                <option value="">Антарктида</option>
                <option value="">Азия</option>
                <option value="">Европа</option>
                <option value="">Марс</option>
              </select>
            </div>
            <input type="text" placeholder='Искать самокат KUGO' />
          </div>
          <div className='w-[40px] h-[38px] bg-[#6F73EE] flex items-center justify-center'>
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
          <a href="#">О магазине</a>
          <div className='flex gap-[8px]'>
            <a href="#">Доставка и оплата</a> 
            <button className='w-[150px] h-[20px] text-[white] bg-[#6F73EE] text-sm rounded-[50px] mt-[3px] border-2 border-[#6F73EE] hover:bg-[white] hover:text-[#6F73EE] transition'>Доступна рассрочка</button> 
          </div>
          <a href="#">Тест-драйв</a>
          <a href="./blog">Блог</a>
          <a href="./contact">Контакты</a>
          <div className='flex gap-[8px]'>
            <a href="./stock">Акции</a> 
            <img src={Img4} alt="sfd" />
          </div>
        </nav>
      </div>

    </header>
  )
}

export default Header