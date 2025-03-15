import Young4 from '../assets/young4.png'
import Young5 from '../assets/young5.png'
import Young6 from '../assets/young6.png'
import EG from '../assets/EGroup100.svg'
import Eva from '../assets/eva.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "@mui/material"
import 'swiper/css';

const Block4 = () => {
  return (
    <div>
        <div className="mt-[100px] ml-[165px]">
          <div>
            <h1 className="text-[35px] font-semibold w-[923px] text-[#282739]">ВАМ ТАКЖЕ МОЖЕТ БЫТЬ ИНТЕРЕСНО</h1>
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
                  <img className="relative rounded-t-xl" src={Young4} alt="srg" />
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">Как правильно заряжать электросамокат</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>01.09.2021</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>53</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={Young5} alt="srg" />
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">Как правильно заряжать электросамокат</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>01.09.2021</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>53</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={Young6} alt="srg" />
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">Как правильно заряжать электросамокат</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>01.09.2021</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>53</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={Young4} alt="srg" />
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">Как правильно заряжать электросамокат</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>01.09.2021</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>53</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={Young5} alt="srg" />
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">Как правильно заряжать электросамокат</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>01.09.2021</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>53</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={Young6} alt="srg" />
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">Как правильно заряжать электросамокат</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>01.09.2021</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>53</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={Young4} alt="srg" />
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">Как правильно заряжать электросамокат</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>01.09.2021</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>53</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex w-[350px]">
                  <img className="relative rounded-t-xl" src={Young5} alt="srg" />
                </div>
                <div className="h-[181px] w-[350px] bg-[#F4F7FB] rounded-b-xl pl-[20px]">
                  <p className="text-#282739] text-[18px] pt-[20px] font-medium w-[235px]">Как правильно заряжать электросамокат</p>
                  <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">Один из первых вопросов, который волнует после покупки электросамоката.</p>
                  <div className="flex gap-[25px] mt-[18px]">
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={EG} alt="sdgh" />
                      </div>
                      <p>01.09.2021</p>
                    </div>
                    <div className="flex gap-[11px] items-center">
                      <div>
                        <img src={Eva} alt="sgadf" />
                      </div>
                      <p>53</p>
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

export default Block4