import DastanArrow2 from '../assets/Arrow 2.png'
import Polygon from '../assets/Polygon 3.svg'
import gpro from '../assets/gpro.jpg'

const IntroHome5 = () => {
  return (
    <div>
        <div className="ml-[70px]">
            <div className="mt-[100px] w-[1380px] bg-[#F4F7FB] flex justify-between items-center rounded-[10px] shadow-2xl">
            <div className="flex p-[28px]">
                <img className="relative rounded-[10px]" src={gpro} alt="tlt" />
                <div className="absolute backdrop-blur-sm w-[233px] h-[139px] rounded-[10px] mt-[385px] ml-[340px] text-[#FFFFFF]">
                <h5 className="text-[18px] text-center pt-[17px] font-normal">GameGo </h5>
                <p className="pt-[5px] text-[14px] font-normal pl-[35px]">Оцените все преимущества донатов по доступным ценам</p>
                <div className="bg-[white] border border-[white] text-[black] px-[85px] flex justify-between h-[42px] rounded-[10px] mt-[15px] hover:bg-[black] hover:text-[white] transition   ">
                    <button>Оценить</button>
                </div>
                </div>
            </div>
            <div className="mr-[135px]">
                <h1 className="text-[#282739] w-[540px] font-semibold text-[35px]">GameGo - ПЕРВЫЙ ОФИЦИАЛЬНЫЙ ДИЛЕР STEAM GAMES В СНГ</h1>
                <p className="w-[540px] text-[#282739] mt-[18px]">Наша цель предоставить полный ассортимент современной продукции GameGo, которая улучшает и упрощает пополнения. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
                <div className="w-[540px] h-[204px] bg-[#FFFFFF] rounded-[10px] shadow-2xl mt-[40px]">
                <p className="text-[#282739] text-center text-sm pt-[20px] font-semibold">Специализируемся исключительно на отзывах от покупателей:</p>
                <div className="text-[#282739] mt-[13px] text-[14px] ml-[21px]">
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>Gamego – лучший сайт для покупок в играх! Все быстро и никаких проблем;</p>
                    </div>
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>Покупал здесь несколько раз – всё быстро, честно и без проблем!;</p>
                    </div>
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>Быстро, удобно и без обмана. Покупка прошла мгновенно!;</p>
                    </div>
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>Давно тут беру внутриигровые товары, всегда без проблем;</p>
                    </div>
                    <div className="flex gap-[10px]">
                    <img src={Polygon} alt="fdf" /><p>Супер сервис! Быстро, надежно и без лишних заморочек.</p>
                    </div>
                </div>
                <a className="text-[gray] pt-[13px] text-xs pl-[23px]" href="#">Смотреть отзывы</a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default IntroHome5