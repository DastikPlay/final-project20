import Young1 from '../assets/young1.png'
import Young2 from '../assets/young2.png'
import Young3 from '../assets/young3.png'
import Arrow from '../assets/Arrow 4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "@mui/material"
import Img22 from '../assets/Polygon 8.png'
import akr from '../assets/AKR.JPG'
import m4 from '../assets/m4.jpg'
import p90 from '../assets/p90.jpg'
import awp from '../assets/awp.jpg'
import p250 from '../assets/p250.jpg'
const IntroHome9 = () => {
  return (
    <div>
        <div className="mt-[100px]">
          <div className="flex px-[165px] justify-between">
            <div>
              <h1 className="text-[35px] font-semibold w-[923px] text-[#282739]">ОСМОТР СКИНОВ НА ОРУЖИЯ</h1>
              <p className="text-[#5D6C7B] w-[405px] text-[14px]">Узнайте больше о донатах GAMEGO и посмотрите сравнительные обзоры разных скинов на нашем YouTube-канале.</p>
            </div>
            <div>
              <div className="flex gap-[10px] items-center text-[gray]">
                <a href="">Все осмотры скинов от GG </a>
                
              </div>
            </div>
          </div>
          <div className="mt-[49px] flex gap-[30px]">
            <div className="ml-[165px]">
              <div className="flex w-[540px]">
                <img className="relative rounded-[10px] w-[500px] h-[300px]" src={akr} alt="srg" />
                <div className="absolute w-[104px] h-[104px] bg-[white] rounded-[100px] mt-[100px] mx-[217px]">
                  <Button className="w-[104px] h-[104px]">
                    <img src={Img22} alt="llds" />
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-#282739] text-[18px] mt-[20px] font-medium">AZIMOV? Обзор GAMEGO XS Plus</p>
              </div>
            </div>
              <Swiper
                spaceBetween={-25}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div>
                    <div className="flex w-[350px]">
                      <img className="relative rounded-[10px]" src={m4} alt="srg" />
                      <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                        <Button className="w-[68px] h-[68px]">
                          <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-[229px]">
                      <p className="text-#282739] text-[18px] mt-[20px] font-medium">AZIMOV? Обзор GAMEGO XS Plus</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex w-[350px]">
                      <img className="relative rounded-[10px] w-[800px] h-[]" src={p90} alt="srg" />
                      <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                        <Button className="w-[68px] h-[68px]">
                          <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-[229px]">
                      <p className="text-#282739] text-[18px] mt-[20px] font-medium">AZIMOV? Обзор GAMEGO XS Plus</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex w-[350px]">
                      <img className="relative rounded-[10px]" src={awp} alt="srg" />
                      <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                        <Button className="w-[68px] h-[68px]">
                          <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-[229px]">
                      <p className="text-#282739] text-[18px] mt-[20px] font-medium">AZIMOV? Обзор GAMEGO XS Plus</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex w-[350px]">
                      <img className="relative rounded-[10px]" src={p250} alt="srg" />
                      <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                        <Button className="w-[68px] h-[68px]">
                          <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-[229px]">
                      <p className="text-#282739] text-[18px] mt-[20px] font-medium">AZIMOV? Обзор GAMEGO XS Plus</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex w-[350px]">
                      <img className="relative rounded-[10px]" src={awp} alt="srg" />
                      <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                        <Button className="w-[68px] h-[68px]">
                          <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-[229px]">
                      <p className="text-#282739] text-[18px] mt-[20px] font-medium">AZIMOV? Обзор GAMEGO XS Plus</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="flex w-[350px]">
                      <img className="relative rounded-[10px]" src={akr} alt="srg" />
                      <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                        <Button className="w-[68px] h-[68px]">
                          <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-[229px]">
                      <p className="text-#282739] text-[18px] mt-[20px] font-medium">AZIMOV? Обзор GAMEGO XS Plus</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
    </div>
  )
}

export default IntroHome9