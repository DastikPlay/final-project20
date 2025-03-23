import XXXL1 from '../assets/XXXL1.png'
import XXXL2 from '../assets/XXXL2.png'
import XXXL3 from '../assets/XXXL3.png'
import donk from '../assets/donk.png'
import Dastanbai5 from '../assets/Mask Group24.svg'
import Star from '../assets/Star 11.svg'
import DastanArrow from '../assets/Arrow 4.png'
import jl from '../assets/jl.jpeg'
import simple from '../assets/simple.jpg'
import monesy from '../assets/monesy.jpg'
import xant from '../assets/xant.webp'
import sb from '../assets/sb.webp'
import mag from '../assets/mag.jpg'
import sh from '../assets/sh.jpg'
import cho from '../assets/cho.jpeg'
const IntroHome8 = () => {
  return (
    <div>
        <div>
          <div className="mt-[100px]">
            <div className="flex justify-center">
              <h1 className="text-[35px] font-semibold w-[923px] text-[#282739] text-center">ОТЗЫВЫ РЕАЛЬНЫХ ПОКУПАТЕЛЕЙ</h1>
            </div>
            <div className="flex gap-[8px] items-center text-[black] justify-center mt-[17px]">
              <a href="">Читать отзывы на GAMEGO</a> 
            </div>
          </div>
          <div className="mt-[57px]">
            <div className="flex justify-between">
              <img className="h-[300px] w-[400px] object-cover rounded-xl"  src={monesy} alt="davf" />
              <img className="h-[300px] w-[400px] object-cover rounded-xl"  src={sh} alt="adf" />
              <div className="flex">
                <img className="h-[300px] w-[400px] object-cover rounded-xl" src={simple} alt="fhfhj" />
                <div className="absolute pl-[22px] py-[23px]">
                  <div className="pt-[41px]">
                    <div className="flex gap-[15px]">
                      <img src={Dastanbai5} alt="ddsf" />
                      <div className="text-[#FFFFFF]">
                        <p className="text-[16px]">Саша Simple.</p>
                        <p className="text-[12px] font-extralight">Игрок Navi</p>
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
                        <p className="text-[12px] font-extralight text-[#FFFFFF]">09 сентября 2023</p>
                      </div>
                      <p className="text-[#FFFFFF] text-[14px] pt-[8px] w-[335px]">Магазин очень понравился, быстро обслужили, персонал хорошо знает свой товар, вежливо и грамотно консультирует, ассортимент внушительный, так что всем рекомендую!</p>
                    </div>
                  </div>
                </div>
              </div>
              <img className="h-[300px] object-cover rounded-xl"src={donk} alt="jmj" />

            </div>
            <div className="flex justify-between mt-[20px] flex gap-[8px]">
              <img className="h-[300px] w-[400px] object-cover rounded-xl"src={simple} alt="pwe" />
              <img className="h-[300px] w-[400px] object-cover rounded-xl" src={sb} alt="iuo" />
              <img className="h-[300px] w-[400px] object-cover rounded-xl" src={xant} alt="wwwce" />
              <img className="h-[300px] w-[400px] object-cover rounded-xl" src={monesy} alt="ykui" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default IntroHome8