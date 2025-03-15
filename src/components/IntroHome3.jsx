import Dastanbai from '../assets/Mask Group.svg'
import Dastanbai2 from '../assets/Mask Group2.svg'
import img10 from '../assets/Rectangle 161.svg'
import DastanArrow from '../assets/Arrow 4.png'
import img11 from '../assets/дрон 1.svg'

const IntroHome3 = () => {
  return (
    <div>
        <div className="flex mt-[110px] justify-between">
        <div className="flex ml-[165px]">
            <img className="relative" src={Dastanbai2} alt="hhh" />
            <div className="ml-[40px] absolute py-[32.5px]">
            <h2 className="text-[#282739] font-semibold text-[25px] w-[258px]">ПОДБОР МОДЕЛИ ЭЛЕКТРОСАМОКАТА</h2>
            <p className="mt-[10px] w-[258px]">Пройдите тест и выберите электросамокат по своим критериям</p>
            <div className="flex items-center gap-[8px] mt-[22px]">
                <a className="text-[#6F73EE] " href="#">Подобрать модель</a> 
                <img className="h-[10px]" src={DastanArrow} alt="lsl" />
            </div>
            </div>
        </div>  
        <div className="px-[165px] flex">
            <img className="relative" src={Dastanbai} alt="hhh" />
            <div className="ml-[40px] absolute py-[32.5px]">
            <h2 className="text-[#282739] font-semibold text-[25px] w-[258px]">СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h2>
            <p className="mt-[10px] w-[220px]">Крупнейший сервисный центр в России для продуктов Kugoo</p>
            <div className="flex items-center gap-[8px] mt-[22px]">
                <a className="text-[#6F73EE] " href="#">Подобрать модель</a> 
                <img className="h-[10px]" src={DastanArrow} alt="lsl" />
            </div>
            </div>
        </div>  
        </div>

        <div className="mt-[110px] px-[100px] flex">
        <img className="relative" src={img10} alt="wpw" />
        <div className="absolute flex">
            <img className="mt-[-19px]" src={img11} alt="fkf " />
            <div className="mt-[67px] ml-[-85px]">
            <button className="w-[62px] h-[27px] rounded-[5px] bg-[#EE685F] text-[white]">Акция</button>
            <h1 className="text-[white] w-[441px] font-semibold text-[35px] mt-[27px]">БЕСПЛАТНАЯ ДОСТАВКА ЭЛЕКТРОСАМОКАТОВ ПО РОССИИ ДО 01.09</h1>
            <button className="w-[132px] h-[53px] bg-[white] rounded-[5px] mt-[27px]">Подробнее</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default IntroHome3