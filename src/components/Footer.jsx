import { Button } from "@mui/material"
import Logo from '../assets/Kugoo.svg'
import Google from '../assets/path13556.png'
import AppStore from '../assets/Group.png'
import Group from '../assets/_Group_.svg'
import VK from '../assets/012-vk 1.png'
import Insta from '../assets/013-instagram 1.svg'
import Youtube from '../assets/018-youtube 1.svg'
import TG from '../assets/003-telegram 2.png'
import GooglePay from '../assets/GooglePay.png'
import ApplePay from '../assets/ApplePay.png'
import Visa from '../assets/visa-logo.png'
import MasterCard from '../assets/Mastercard.png'
import Maestro from '../assets/Maestro.png'
import WebM from '../assets/Webmoney.png'
import Qiwi from '../assets/Qiwi.png'
import Img1 from '../assets/viber 1.png'
import Img2 from '../assets/003-whatsapp 1.png'
import Img3 from '../assets/003-telegram 1.png'

const Footer = () => {
  return (
    <footer className="mt-[30px]">
      <div className="h-[97px] bg-[#6F73EE] px-[165px] flex items-center justify-between">
        <h2 className="text-[white] text-[18px] font-semibold w-[445px]">ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ, КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ САМОКАТЫ</h2>
        <div className="flex gap-[20px]">
          <div>
            <input className="w-[410px] h-[53px] pl-[15px] bg-[#7F83EE] text-[white] rounded-[5px]" type="email" placeholder="Введите Ваш email"/>
          </div>
          <div className='w-[191px] h-[53px] bg-[white] rounded-[5px]'>
            <Button className='w-[191px] h-[53px] bg-[white]'>Подписаться</Button>
          </div>
        </div>
      </div>

      <div className="h-[510px] bg-[#F4F7FB] px-[165px] pt-[46px]">
        <div className="flex justify-between">
          <div className="flex">
            <div>
              <p className="text-[#282739] text-[18px] font-semibold mb-[17px]">Каталог товаров</p>
              <div className="flex flex-col gap-[10px]">
                <p className="text-[#5D6C7B] text-[14px] ">Электросамокаты</p>
                <p className="text-[#5D6C7B] text-[14px] ">Электроскутеры</p>
                <p className="text-[#5D6C7B] text-[14px] ">Электровелосипеды</p>
                <p className="text-[#5D6C7B] text-[14px] ">Электровелосипеды</p>
              </div>
            </div>
            <div className="flex flex-col ml-[125px]">
              <p className="text-[#282739] text-[18px] font-semibold mb-[17px]">Покупателям</p>
              <div className="flex">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#5D6C7B] text-[14px] ">Сервисный центр</p>
                  <p className="text-[#5D6C7B] text-[14px] ">Доставка и оплата</p>
                  <p className="text-[#5D6C7B] text-[14px] ">Рассрочка</p>
                  <p className="text-[#5D6C7B] text-[14px] ">Тест-драйв</p>
                </div>
                <div className="flex flex-col gap-[10px] ml-[44px]">
                  <p className="text-[#5D6C7B] text-[14px] ">Блог</p>
                  <p className="text-[#5D6C7B] text-[14px] ">Сотрудничество</p>
                  <p className="text-[#5D6C7B] text-[14px] ">Контакты</p>
                  <p className="text-[#5D6C7B] text-[14px] ">Акции</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[327px]">
              <p className="text-[#282739] text-[18px] font-semibold mb-[17px]">Контакты</p>
              <a className="text-[#6F73EE] text-[12px]" href="">Заказать звонок</a>
            </div>
            <div className="flex gap-[40px]">
              <div className="flex flex-col gap-[6px]">
                <p className="text-[12px]">Call-центр</p>
                <p className="text-[#282739] text-[18 px] font-semibold">+7 (800) 505-54-61</p>
                <p className="text-[#5D6C7B] text-[14px]">Пн-Вс 10:00 - 20:00</p>
              </div>
              <div className="flex flex-col gap-[6px]">
                <p className="text-[12px]">Сервисный центр</p>
                <p className="text-[#282739] text-[18 px] font-semibold">+7 (499) 350-76-92</p>
                <p className="text-[#5D6C7B] text-[14px]">Пн-Вс 10:00 - 20:00</p>
              </div>
            </div>
            <div className="mt-[28px] flex gap-[50px]">
              <div>
                <p className="text-[#282739] text-[14px] w-[132px]">Магазин в Москве
                ул. Ткацкая, 5 стр. 16</p>
                <p className="text-[12px] text-[#5D6C7B] pt-[8px]">+7 (499) 406 15 87</p>
              </div>
              <div>
                <p className="text-[#282739] text-[14px] w-[114px]">Магазин в Санкт-Петербурге ул. Фрунзе, 2</p>
                <p className="text-[12px] text-[#5D6C7B] pt-[8px]">+7 (499) 406 15 87</p>
              </div>
              <div>
                <p className="text-[#282739] text-[14px] w-[144px]">Магазин в Краснодаре 
                ул. Восточно-Кругликовская, 86</p>
                <p className="text-[12px] text-[#5D6C7B] pt-[8px]">+ 7 (800) 505 54 61</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#5D6C7B] mt-[49px]"></div>
        <div className="h-[115px] flex items-center justify-between">
          <div className="flex gap-[59px]">
          <img src={Logo} alt="dfd" />
          <div className="flex gap-[10px]">
            <div className="w-[151px] h-[45px] bg-[#FFFFFF] rounded-[10px] shadow-2xl flex items-center gap-[7px]">
              <img className="w-[30px] h-[35px]" src="https://cdn.pixabay.com/photo/2016/08/31/00/49/google-1632434_640.png" alt="dfd" /> 
              <div className="ml-[">
                <p>Доступно на</p>
                <img src={Google} alt="vdv" />
              </div>
            </div>
            <div className="w-[151px] h-[45px] bg-[#FFFFFF] rounded-[10px] shadow-2xl flex items-center gap-[7px]">
              <img className="w-[30px] h-[35px]" src={Group} alt="dfd" /> 
              <div className="ml-[">
                <p>Загрузите в</p>
                <img src={AppStore} alt="vdv" />
              </div>
            </div>
          </div>
          </div>
          <div className="flex gap-[10px]">
            <div className="bg-[#FFFFFF] w-[123px] h-[45px] shadow-2xl rounded-[10px] flex items-center gap-[12px] px-[8px]">
              <img className="w-[25px] h-[25px]" src={VK} alt="gbb" />
              <div>
                <p className="text-[16px] text-[#282739] font-semibold">Вконтакте</p>
                <p className="text-[#5D6C7B] text-[10px]">3 300</p>
              </div>
            </div>
            <div className="bg-[#FFFFFF] w-[123px] h-[45px] shadow-2xl rounded-[10px] flex items-center gap-[12px] px-[8px]">
              <img className="w-[25px] h-[25px]" src={Insta} alt="gbb" />
              <div>
                <p className="text-[16px] text-[#282739] font-semibold">Instagram</p>
                <p className="text-[#5D6C7B] text-[10px]">3 300</p>
              </div>
            </div>
            <div className="bg-[#FFFFFF] w-[123px] h-[45px] shadow-2xl rounded-[10px] flex items-center gap-[12px] px-[8px]">
              <img className="w-[25px] h-[25px]" src={Youtube} alt="gbb" />
              <div>
                <p className="text-[16px] text-[#282739] font-semibold">YouTube</p>
                <p className="text-[#5D6C7B] text-[10px]">3 603</p>
              </div>
            </div>
            <div className="bg-[#FFFFFF] w-[123px] h-[45px] shadow-2xl rounded-[10px] flex items-center gap-[12px] px-[8px]">
              <img className="w-[25px] h-[25px]" src={TG} alt="gbb" />
              <div>
                <p className="text-[16px] text-[#282739] font-semibold">Telegram</p>
                <p className="text-[#5D6C7B] text-[10px]">432</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#5D6C7B]"></div>
        <div className="h-[59px] flex justify-between items-center">
          <div className="text-[#5D6C7B] text-[12px] flex gap-[44px]">
            <p>Реквизиты</p>
            <p>Политика конфиденциальности</p>
          </div>
          <div className="flex gap-[37px]">
            <div className="flex gap-[4px]">
              <div className="w-[34px] h-[23px] shadow-xl bg-[#FFFFFF] rounded-[5px] flex items-center justify-center">
                <img src={GooglePay} alt="dfgf" />
              </div>
              <div className="w-[34px] h-[23px] shadow-xl bg-[#FFFFFF] rounded-[5px] flex items-center justify-center">
                <img src={ApplePay} alt="dfgf" />
              </div>
              <div className="w-[34px] h-[23px] shadow-xl bg-[#FFFFFF] rounded-[5px] flex items-center justify-center">
                <img src={Visa} alt="dfgf" />
              </div>
              <div className="w-[34px] h-[23px] shadow-xl bg-[#FFFFFF] rounded-[5px] flex items-center justify-center">
                <img src={MasterCard} alt="dfgf" />
              </div>
              <div className="w-[34px] h-[23px] shadow-xl bg-[#FFFFFF] rounded-[5px] flex items-center justify-center">
                <img src={Maestro} alt="dfgf" />
              </div>
              <div className="w-[34px] h-[23px] shadow-xl bg-[#FFFFFF] rounded-[5px] flex items-center justify-center">
                <img src={WebM} alt="dfgf" />
              </div>
              <div className="w-[34px] h-[23px] shadow-xl bg-[#FFFFFF] rounded-[5px] flex items-center justify-center">
                <img src={Qiwi} alt="dfgf" />
              </div>
            </div>
            <div className="flex gap-[15px]">
              <p className="text-[#282739] text-[14px]">Online чат:</p>
              <div className="flex gap-[14px] items-center">
                <div>
                  <img src={Img1} alt="sdfd" />
                </div>
                <div>
                  <img src={Img2} alt="sdf" />
                </div>
                <div>
                  <img src={Img3} alt="yhjt" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer