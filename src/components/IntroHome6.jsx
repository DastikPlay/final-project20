import Shop from '../assets/shopping-cart 2.svg'
import Ok from '../assets/Okey.png'
import Billford from '../assets/billfold 1.png'
import Delivery from '../assets/delivery12x.png'
import Discount from '../assets/percentage-discount 1.png'
import Dastanbai3 from '../assets/Mask Group3.svg'
import Arrow from '../assets/Arrow 4.png'

const IntroHome6 = () => {
  return (
    <div>
        <div className="mt-[100px]">
          <div className="">
            <div className="flex justify-center">
              <h1 className="text-[35px] font-semibold w-[923px] text-[#282739] text-center">ПРЕДЛАГАЕМ САМЫЕ ВЫГОДНЫЕ ЦЕНЫ
              НА ПРОДУКТЫ GAMEGO ЗА СЧЕТ ПРЯМЫХ ПОСТАВОК</h1>
            </div>
            <span className="text-[#282739] text-xl flex justify-center mt-[18px]">и заботимся об удобстве покупателей</span>
            <div className="flex justify-center mt-[51px] gap-[20px]">
              <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[175px] h-[53px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Интернет-магазин</button>
              <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[175px] h-[53px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Сервисный центр</button>
            </div>
          </div>
          <div>
            <div className="flex mt-[58px] px-[165px] justify-between">
              <div className="w-[350px] h-[225px] border border-[#EAEBED] rounded-[10px] shadow-2xl ">
                <img className="mt-[26px] ml-[20px] w-[25px] h-[25px]" src={Shop} alt="card" />
                <h3 className="mt-[20px] ml-[20px] text-[#282739] text-[18px] font-semibold">Х товаров в каталоге</h3>
                <p className="mt-[8px] ml-[20px] text-[#282739] text-[14px]">Выбирайте товар, который подходит по цене и характеристикам.  </p>
              </div>
              <div className="w-[350px] h-[225px] border border-[#EAEBED] rounded-[10px] shadow-2xl">
                <img className="mt-[26px] ml-[20px] w-[25px] h-[25px]" src={Billford} alt="card" />
                <h3 className="mt-[20px] ml-[20px] text-[#282739] text-[18px] font-semibold">4 способов оплаты</h3>
                <p className="mt-[8px] ml-[20px] text-[#282739] text-[14px]">Вы можете оплатить покупку картой, онлайн на сайте, через интернет-банкинг или в кредит от «Любого банка». </p>
              </div>
              <div className="w-[350px] h-[225px] border border-[#EAEBED] rounded-[10px] shadow-2xl">
                <img className="mt-[26px] ml-[20px] w-[25px] h-[25px]" src={Ok} alt="card" />
                <h3 className="mt-[20px] ml-[20px] text-[#282739] w-[193px] text-[18px] font-semibold">Полный возврат в случае ошибки</h3>
                <p className="mt-[8px] ml-[20px] text-[#282739] text-[14px]">При покупке вам выдается товарный чек этот чек служит вам полным обслуживанием. </p>
              </div>
            </div>
            <div className="px-[165px] mt-[30px] flex justify-between">
              <div className="w-[350px] h-[185px] border border-[#EAEBED] rounded-[10px] shadow-2xl">
                <img className="mt-[26px] ml-[20px] w-[25px] h-[25px]" src={Delivery} alt="card" />
                <h3 className="mt-[20px] ml-[20px] text-[#282739] text-[18px] font-semibold">Моментальное получение покупки</h3>
                <p className="mt-[8px] ml-[20px] text-[#282739] text-[14px]">Отправляем покупки по всему снг получайте свои покупки моментально без задержек. </p>
                </div>
                <div className="w-[350px] h-[185px] border border-[#EAEBED] rounded-[10px] shadow-2xl">
                  <img className="mt-[26px] ml-[20px] w-[25px] h-[25px]" src={Discount} alt="card" />
                  <h3 className="mt-[20px] ml-[20px] text-[#282739] text-[18px] font-semibold">Донаты без переплат</h3>
                  <p className="mt-[8px] ml-[20px] text-[#282739] text-[14px]">В нашем магазине можно приобрести любой товар из любой видеоигры. </p> <span className="text-[14px] text-[gray] pl-[20px]">Подробнее про условия рассрочки</span>
                </div>
                <div className="flex bg-[#F0F0F0]">
                  <img className="shadow-2xl relative bg-[#F0F0F0]" src={Dastanbai3} alt="ktk" />
                  <div className="absolute">
                    <p className="text-[#282739] font-semibold pt-[68px] ml-[33px]">Больше в магазине</p>
                    <div className="flex gap-[8px] items-center pt-[6px] ml-[33px]">
                      <a className="text-[gray]" href="#">Перейти</a> 
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default IntroHome6