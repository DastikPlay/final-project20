import XXXL1 from '../assets/XXXL1.png'
import XXXL2 from '../assets/XXXL2.png'
import XXXL3 from '../assets/XXXL3.png'
import XXXL4 from '../assets/XXXL4.png'
import XXXL5 from '../assets/XXXL5.png'
import XXXL6 from '../assets/XXXL6.png'
import XXXL7 from '../assets/XXXL7.png'
import XXXL8 from '../assets/XXXL8.png'
import XXXL9 from '../assets/XXXL9.png'
import XXXL10 from '../assets/XXXL-5 1.png'
import XXXL11 from '../assets/XXXL-7 2.png'
import Dastanbai5 from '../assets/Mask Group24.svg'
import Star from '../assets/Star 11.svg'
import DastanArrow from '../assets/Arrow 4.png'

const IntroHome8 = () => {
  return (
    <div>
        <div>
          <div className="mt-[100px]">
            <div className="flex justify-center">
              <h1 className="text-[35px] font-semibold w-[923px] text-[#282739] text-center">ОТЗЫВЫ И ФОТО РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ</h1>
            </div>
            <div className="flex gap-[8px] items-center text-[#6F73EE] justify-center mt-[17px]">
              <a href="">Читать отзывы на Яндекс</a> <img src={DastanArrow} alt="" />
            </div>
          </div>
          <div className="mt-[57px]">
            <div className="flex justify-between">
              <img src={XXXL1} alt="davf" />
              <img src={XXXL2} alt="adf" />
              <div className="flex">
                <img className="relative rounded-[10px]" src={XXXL3} alt="fhfhj" />
                <div className="absolute pl-[22px] py-[23px]">
                  <div className="pt-[41px]">
                    <div className="flex gap-[15px]">
                      <img src={Dastanbai5} alt="ddsf" />
                      <div className="text-[#FFFFFF]">
                        <p className="text-[16px]">Илья М.</p>
                        <p className="text-[12px] font-extralight">Знаток города 2 уровня</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-[14px] items-center pt-[20px]">
                        <div className="flex gap-[5px]">
                          <img className="w-[14px] h-[14px]" src={Star} alt="sdf" />
                          <img className="w-[14px] h-[14px]" src={Star} alt="sdf" />
                          <img className="w-[14px] h-[14px]" src={Star} alt="sdf" />
                          <img className="w-[14px] h-[14px]" src={Star} alt="sdf" />
                          <img className="w-[14px] h-[14px]" src={Star} alt="sdf" />
                        </div>
                        <p className="text-[12px] font-extralight text-[#FFFFFF]">23 сентября 2020</p>
                      </div>
                      <p className="text-[#FFFFFF] text-[14px] pt-[8px] w-[335px]">Магазин очень понравился, быстро обслужили, персонал хорошо знает свой товар, вежливо и грамотно консультирует, ассортимент внушительный, а если чего нет сейчас в наличии, то можно без проблем заказать на сайте, так что всем рекомендую!</p>
                    </div>
                  </div>
                </div>
              </div>
              <img src={XXXL4} alt="jmj" />
              <img src={XXXL5} alt="" />
            </div>
            <div className="flex justify-between mt-[20px]">
              <img src={XXXL10} alt="pwe" />
              <img src={XXXL5} alt="ykui" />
              <img src={XXXL6} alt="wwwce" />
              <img src={XXXL7} alt="iuo" />
              <img src={XXXL8} alt="vtd" />
              <img src={XXXL9} alt="rnku" />
              <img src={XXXL11} alt="vwd" /> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default IntroHome8