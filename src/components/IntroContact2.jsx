import Vector11 from '../assets/Vector11.svg'
import Vector10 from '../assets/Vector10.svg'
import Vector12 from '../assets/Vector12.svg'

const IntroContact2 = () => {
    return (
        <div>
          <div className='flex justify-center gap-[20px] mt-[50px]'>
            <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[145px] h-[53px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Москва и МО</button>
            <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[265px] h-[53px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Санкт-Петербург и Ленобласть</button>
            <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[128px] h-[53px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Краснодар</button>
            <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[96px] h-[53px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Минск</button>
            <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[201px] h-[53px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Пункты выдачи CDEK</button>
          </div>
            <div className='mt-[50px] flex items-center justify-between ml-[165px]'>
              <div>
                <h3 className='text-[#282739] text-[20px] font-semibold'>Адрес магазина и сервисного центра:</h3>
                <div className='mt-[30px]'>
                  <div className='w-[455px] h-[80px] flex gap-[19px]'>
                    <div className='w-[38px] h-[80px] rounded-[5px] bg-[#F4F7FB] px-[11px] py-[30px] shadow-xl'>
                      <img className='w-[15px] h-[18px]' src={Vector11} alt="afdsg" />
                    </div>
                    <div>
                      <div className='flex gap-[20px] items-center'>
                        <p className='text-[18px]'>ул. Ткацкая, 5 стр. 16 (м. Семеновская)</p>
                        <a className='text-[#6F73EE] text-[14px]' href="">Как пройти</a>
                      </div>
                      <div className='text-[#5D6C7B] text-[14px] mt-[5px]'>
                        <p>Пн-Вс 10:00 - 20:00 (магазин)</p>
                        <p>Пн-Вс 10:00 - 20:00 (сервисный центр)</p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-[30px] flex'>
                    <div className='w-[38px] h-[55px] rounded-[5px] bg-[#F4F7FB] px-[11px] py-[18px] shadow-xl'>
                      <img className='w-[15px] h-[18px]' src={Vector10} alt="afdsg" />
                    </div>
                    <div className='ml-[20px] flex gap-[30px]'>
                      <div>
                        <p className='text-[#5D6C7B] text-[14px]'>Магазин</p>
                        <p className='text-[18px]'>+7 (499) 406-15-79</p>
                      </div>
                      <div>
                        <p className='text-[#5D6C7B] text-[14px]'>Магазин</p>
                        <p className='text-[18px]'>+7 (499) 406-15-79</p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-[30px] flex'>
                    <div className='w-[38px] h-[210px] rounded-[5px] bg-[#F4F7FB] px-[11px] py-[95px] shadow-xl'>
                      <img className='w-[15px] h-[18px]' src={Vector12} alt="afdsg" />
                    </div>
                    <div className='ml-[20px] text-[14px]'>
                      <div>
                        <p className='w-[426px]'> <span className='font-medium'>Бесплатная парковка</span> (для въезда предварительно запросите
                            у менеджера пропуск)</p>
                      </div>
                      <div className='mt-[25px]'>
                        <p className='w-[426px]'>Перед посещением магазина, пожалуйста, <span className='font-medium'>уточняйте наличие рассматриваемой вами модели по телефону</span>  у менеджера. </p>
                      </div>
                      <div className='mt-[25px]'>
                        <p className='w-[426px]'> <span className='font-medium'>Возьмите с собой паспорт или другой документ</span>, удостоверяющий личность – он может понадобиться для прохождения через пропускной пункт.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d454256.8911426634!2d38.66881890202359!3d55.92067332778661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1741502580616!5m2!1sru!2skg" width="610" height="483" style={{ border: 0, borderRadius:'10px', marginRight:'40px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default IntroContact2