import Dastanbai from '../assets/Mask Group.svg'
import Dastanbai2 from '../assets/Mask Group2.svg'
import img10 from '../assets/Rectangle 161.svg'
import DastanArrow from '../assets/Arrow 4.png'
import img11 from '../assets/дрон 1.svg'
import akImg from '../assets/ak.png'
import gy from '../assets/gray.jpg'
const IntroHome3 = () => {
  return (
    <div>
        <div className="flex mt-[110px] justify-between">
        <div className="flex ml-[165px]">
            <img className="relative w-[500px] h-[250px] rounded-[10px]" src={gy} alt="hhh" />
            <div className="ml-[40px] absolute py-[32.5px]">
            <h2 className="text-[black] font-semibold text-[25px] w-[258px]">ПОДБОР СКИНОВ ПОЛЬЗОВАТЕЛЯ</h2>
            <p className="text-[black] mt-[10px] w-[258px]">Пройдитесь по каталогу и выберите свой скин на любой вкус</p>
            <div className="flex items-center gap-[8px] mt-[22px]">
                <a className="text-[black] " href="#">Подобрать cкин</a> 
            
            </div>
            </div>
        </div>  
        <div className="px-[165px] flex">
        <img className="relative w-[500px] h-[250px] rounded-[10px]" src={gy} alt="hhh" />
            <div className="ml-[40px] absolute py-[32.5px]">
            <h2 className="text-[black] font-semibold text-[25px] w-[258px]">ПОДБОР ИГР ПОЛЬЗОВАТЕЛЯ</h2>
            <p className="mt-[10px] w-[220px]">Крупнейший интернет магазин в Снг для игровых действий </p>
            <div className="flex items-center gap-[8px] mt-[22px]">
                <a className="text-[blsck] " href="#">Подобрать игру</a> 
            </div>
            </div>
        </div>  
        </div>

        <div className="mt-[110px] px-[100px] flex">
        <img className="relative" src={img10} alt="wpw" />
        <div className="absolute flex justify-around">
            <img className="mt-[50px] h-[300px] w-[550px] object-cover" src={akImg} alt="fkf " />
            <div className="mt-[67px] ml-[-85px]">
            <button className="w-[62px] h-[27px] rounded-[5px] bg-[#EE685F] text-[white] ml-[150px]">Скидки</button>
            <h1 className="text-[white] w-[441px] font-semibold text-[35px] mt-[27px] ml-[150px]">СКИДКИ НА ДОНАТ ВО ВСЕХ ИГРАХ ПО ДОСТУПНЫМ ЦЕНАМ</h1>
            <button className="w-[132px] h-[53px] bg-[white] rounded-[5px] mt-[27px] ml-[150px]">Узнать больше</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default IntroHome3