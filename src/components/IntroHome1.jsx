import Star from '../assets/Star 11.svg'
import DastanImg from '../assets/MaskGroup.png'
import gg from '../assets/gg.png'
import img10 from '../assets/Rectangle 161.svg'
const IntroHome1 = () => {
  return (
    <div>
        <section className="mt-[31px] flex px-[100px]">
            <img className=" w-[10700px] h-[400px]" src={img10} alt="fff" />    
            <div className="mt-[39px] ml-[135px] absolute">
            <button className="border-2 border-[white] w-[74px] h-[27px] bg-none text-[white] rounded-[5px] hover:bg-[#FFFFFF] hover:text-[#6F73EE] transition">Новинка</button>
            <h1 className="font-semibold text-[35px] mt-[36px] text-[white] w-[615px]">
                ДОБРО ПОЖАЛОВАТЬ В МАГАЗИН GAMEGO 
            </h1>
            <p className="mt-[7px] text-[white] text-xl">с комиссией со всех банков 1%</p>
            <button className="w-[177px] h-[53px] text-[white] border-2 border-[white] mt-[25px] rounded-[5px] hover:bg-[#FFFFFF] hover:text-[#6F73EE] transition">Перейти в магазин</button>
            </div>
        </section>

            <div className="px-[165px] mt-[40px] flex justify-between items-center">
            <div className="flex">
                <div className="text-[#282739]">
                <h3 className="font-semibold text-[25px]">АКЦИИ</h3>    
                <p className="font-normal text-[16px]">на все скины </p> 
                </div>
                <div className="text-[#282739] ml-[78px]">
                <h3 className="font-semibold text-[25px]">ПОЛУЧЕНИЕ</h3>    
                <p className="font-normal text-[16px]">Моментальное</p> 
                </div>
                <div className="text-[#282739] ml-[134px]">
                <h3 className="font-semibold text-[25px]">ПРОМОКОДЫ</h3>    
                <p className="font-normal text-[16px]">и бонусы к покупкам</p> 
                </div>
            </div>
            <div className="w-[190px] h-[76px] border-2 border-[#5D6C7B1A] rounded-[5px] flex">
                <div className="p-[9px]">
                <button className="bg-[black] w-[56px] h-[56px] rounded-[5px] text-[white] text-[29px] shadow-2xl">GG</button>
                </div>
                <div className="py-[5px]">
                <p className="text-[#5D6C7B]">GG отзывы</p>
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