import Young4 from '../assets/young4.png'
import Young5 from '../assets/young5.png'
import Young6 from '../assets/young6.png'
import itt from '../assets/itt.jpg'
import ro from '../assets/ro.jpg'
import EG from '../assets/EGroup100.svg'
import Eva from '../assets/eva.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import Img22 from '../assets/Polygon 8.png'
import { Button } from "@mui/material"
import 'swiper/css';

const IntroHome10 = () => {
  return (
    <div>
        <div className="mt-[100px] ml-[165px]">
          <div>
            <h1 className="text-[35px] font-semibold w-[923px] text-[#282739]">НОВЫЕ ИГРЫ </h1>
          </div>
          <Swiper
            className="mt-[60px]"
            spaceBetween={-25}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={itt} alt="srg" />
                  <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                    <Button className="w-[68px] h-[68px]">
                      <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                    </Button>
                  </div>
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">IT TAKES TWO</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">It Takes Two — кооперативная приключенческая игра (2021), созданная для совместного прохождения вдвоем.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>29.03.2025</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>20к</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={ro} alt="srg" />
                  <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                    <Button className="w-[68px] h-[68px]">
                      <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                    </Button>
                  </div>
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">R.E.P.O.</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">R.E.P.O. — кооп-хоррор на 6 игроков с заданиями и физикой объектов. Вышла в раннем доступе</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>09.04.2025</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>32к</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={itt} alt="srg" />
                  <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                    <Button className="w-[68px] h-[68px]">
                      <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                    </Button>
                  </div>
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">IT TAKES TWO</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">It Takes Two — кооперативная приключенческая игра (2021), созданная для совместного прохождения вдвоем.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>29.03.2025</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>20к</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={ro} alt="srg" />
                  <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                    <Button className="w-[68px] h-[68px]">
                      <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                    </Button>
                  </div>
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">R.E.P.O.</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">R.E.P.O. — кооп-хоррор на 6 игроков с заданиями и физикой объектов. Вышла в раннем доступе</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>09.04.2025</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>32к</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={itt} alt="srg" />
                  <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                    <Button className="w-[68px] h-[68px]">
                      <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                    </Button>
                  </div>
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">IT TAKES TWO</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">It Takes Two — кооперативная приключенческая игра (2021), созданная для совместного прохождения вдвоем.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>29.03.2025</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>20к</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={ro} alt="srg" />
                  <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                    <Button className="w-[68px] h-[68px]">
                      <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                    </Button>
                  </div>
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">R.E.P.O.</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">R.E.P.O. — кооп-хоррор на 6 игроков с заданиями и физикой объектов. Вышла в раннем доступе</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>09.04.2025</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>32к</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={itt} alt="srg" />
                  <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                    <Button className="w-[68px] h-[68px]">
                      <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                    </Button>
                  </div>
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">IT TAKES TWO</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">It Takes Two — кооперативная приключенческая игра (2021), созданная для совместного прохождения вдвоем.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>29.03.2025</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>20к</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={ro} alt="srg" />
                  <div className="absolute w-[68px] h-[68px] bg-[white] rounded-[100px] mt-[65px] mx-[141px]">
                    <Button className="w-[68px] h-[68px]">
                      <img className="w-[16px] h-[20px]" src={Img22} alt="llds" />
                    </Button>
                  </div>
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">R.E.P.O.</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">R.E.P.O. — кооп-хоррор на 6 игроков с заданиями и физикой объектов. Вышла в раннем доступе</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>09.04.2025</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>32к</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>  
          </Swiper>
        </div>
    </div>
  )
}

export default IntroHome10