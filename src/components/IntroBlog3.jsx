import React from 'react'
import Like from '../assets/Like.png'
import Shop from '../assets/Shop.png'
import Vesy from '../assets/Vesy.png'
import Jaket from '../assets/Jaket.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const WatchPage = () => {
    const card = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 }
    ]

    return (
        <div className='ml-[165px] mt-[90px]'>
            <div>
                <h4 className='text-[35px] font-semibold w-[923px] text-[#282739]'>ВЫ СМОТРЕЛИ</h4>
            </div>
            <Swiper
                className="mt-[60px]"
                spaceBetween={-25}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ display: 'flex' }}
            >
                {card.map((item, idx) => {
                    return (
                        <SwiperSlide>
                            <div key={idx}>
                                <div className=''>
                                    <img src={Vesy} alt="" />
                                </div>
                                <div>
                                    <img src={Jaket} alt="" />
                                </div>
                                <div className='border-[#EAEBED]'>
                                <p className="text-[#282739] text-[18px] pt-[20px] font-medium w-[235px]">Защитная экипировка «Черепаха».</p>
                                <p className="w-[281px] pt-[11px] text-[#282739] text-[14px]">100% дышащая ткань.</p>
                                <div className="flex flex-col gap-[25px] mt-[18px]">
                                    <div className='flex items-center gap-[41px]'>
                                        <p className='text-[20px]'>5 900 ₽</p>
                                        <div className='flex gap-[10px]'>
                                            <div className='w-[40px] h-[40px] rounded-[100px] border border-[#EAEBED]'>
                                                <img className='m-[10px]' src={Shop} alt="" />
                                            </div>
                                            <div className=' w-[40px] h-[40px] rounded-[100px] border border-[#EAEBED]'>
                                                <img className='w-[20px] h-[20px] m-[10px]' src={Like} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-[10px] items-center">
                                        <button className='w-[206px] h-[37px] bg-[#6F73EE] rounded-[5px] text-[white] text-[12px]'>Купить в 1 клик</button>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>

        </div>
    )
}

export default WatchPage;