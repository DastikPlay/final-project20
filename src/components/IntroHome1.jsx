import Star from '../assets/Star 11.svg'
import DastanImg from '../assets/MaskGroup.png'

const IntroHome1 = () => {
  return (
    <div>
        <section className="mt-[31px] flex px-[100px]">
            <img className="relative" src={DastanImg} alt="fff" />    
            <div className="mt-[39px] ml-[135px] absolute">
            <button className="border-2 border-[white] w-[74px] h-[27px] bg-none text-[white] rounded-[5px] hover:bg-[#FFFFFF] hover:text-[#6F73EE] transition">Новинка</button>
            <h1 className="font-semibold text-[35px] mt-[36px] text-[white] w-[615px]">
                ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN ОТ ОФИЦИАЛНОГО ДИЛЕРА
            </h1>
            <p className="mt-[7px] text-[white] text-xl">с бесплатной доставкой по РФ от 1 дня</p>
            <button className="w-[177px] h-[53px] text-[white] border-2 border-[white] mt-[25px] rounded-[5px] hover:bg-[#FFFFFF] hover:text-[#6F73EE] transition">Перейти в католог</button>
            </div>
        </section>

            <div className="px-[165px] mt-[40px] flex justify-between items-center">
            <div className="flex">
                <div className="text-[#282739]">
                <h3 className="font-semibold text-[25px]">ГАРАНТИЯ 1 ГОД</h3>    
                <p className="font-normal text-[16px]">на весь ассортимент</p> 
                </div>
                <div className="text-[#282739] ml-[78px]">
                <h3 className="font-semibold text-[25px]">РАСРОЧКА</h3>    
                <p className="font-normal text-[16px]">от 6 месяцев</p> 
                </div>
                <div className="text-[#282739] ml-[134px]">
                <h3 className="font-semibold text-[25px]">ПОДАРКИ</h3>    
                <p className="font-normal text-[16px]">и бонусам к покупкам</p> 
                </div>
            </div>
            <div className="w-[190px] h-[76px] border-2 border-[#5D6C7B1A] rounded-[5px] flex">
                <div className="p-[9px]">
                <button className="bg-[#FC3F1D] w-[56px] h-[56px] rounded-[5px] text-[white] text-[29px] shadow-2xl">Я</button>
                </div>
                <div className="py-[5px]">
                <p className="text-[#5D6C7B]">Яндекс отзывы</p>
                <div className="flex items-center gap-[10px]">
                    <img className="w-[20px] h-[20px]" src={Star} alt="sdf" /><p className="text-[#282739] font-semibold text-[25px]"> 4,9</p>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default IntroHome1