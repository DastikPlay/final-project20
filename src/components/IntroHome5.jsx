import DastanArrow2 from '../assets/Arrow 2.png'
import Together from '../assets/together 1.png'
import Polygon from '../assets/Polygon 3.svg'


const IntroHome5 = () => {
  return (
    <div>
        <div className="ml-[70px]">
            <div className="mt-[100px] w-[1380px] bg-[#F4F7FB] flex justify-between items-center rounded-[10px] shadow-2xl">
            <div className="flex p-[28px]">
                <img className="relative rounded-[10px]" src={Together} alt="tlt" />
                <div className="absolute backdrop-blur-sm w-[233px] h-[139px] rounded-[10px] mt-[385px] ml-[340px] text-[#FFFFFF]">
                <h5 className="text-[18px] text-center pt-[17px] font-normal">Тест-драйв в Москве</h5>
                <p className="pt-[5px] text-[14px] font-normal pl-[35px]">Оцените все преимущества самокатов лично</p>
                <div className="bg-[#6F73EE] px-[22px] flex justify-between h-[42px] rounded-[10px] mt-[15px]">
                    <button>Подробнее</button>
                    <img className="w-[13px] h-[10px] mt-[16px]" src={DastanArrow2} alt="ddr" />
                </div>
                </div>
            </div>
            <div className="mr-[135px]">
                <h1 className="text-[#282739] w-[540px] font-semibold text-[35px]">KUGOO-RUSSIA — ПЕРВЫЙ ОФИЦИАЛЬНЫЙ ДИЛЕР KUGOO KIRIN В РОССИИ</h1>
                <p className="w-[540px] text-[#282739] mt-[18px]">Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                <div className="w-[540px] h-[204px] bg-[#FFFFFF] rounded-[10px] shadow-2xl mt-[40px]">
                <p className="text-[#282739] text-center text-sm pt-[20px] font-semibold">Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</p>
                <div className="text-[#282739] mt-[13px] text-[14px] ml-[21px]">
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>цены от завода-изготовителя Jilong ;</p>
                    </div>
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>бесплатный тест-драйв самокатов;</p>
                    </div>
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>фирменную гарантию 1 год;</p>
                    </div>
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>ремонт и обслуживание от 1 дня в собственном сервисном центре;</p>
                    </div>
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>более 1 000 запчастей и аксессуаров в наличии</p>
                    </div>
                </div>
                <a className="text-[#6F73EE] pt-[13px] text-xs pl-[23px]" href="#">Смотреть сертификат</a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default IntroHome5