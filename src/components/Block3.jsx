import VK2 from '../assets/012-vk 2.png'
import Insta2 from '../assets/013-instagram 1.png'
import Youtube2 from '../assets/018-youtube 1.png'
import TG2 from '../assets/003-telegram 3.png'
import '../index.css'

const Block3 = () => {
  return (
    <div>
            <div className='px-[165px] mt-[134px] flex items-center justify-between'>
                <div>
                    <h1 className="text-[#282739] font-semibold text-[25px] w-[500px]">ПОДПИСЫВАЙТЕСЬ И ПЕРВЫМИ УЗНАВАЙТЕ О НОВЫХ СКИДКАХ, АКЦИЯХ И РОЗЫГРЫШАХ ПОДАРКОВ</h1>
                    <p className='pt-[15px]'>Станьте частью сообщества GameGo</p>
                </div>
                <div className='w-[355px] h-[270px] bg-[#F4F7FB] rounded-[10px]'>
                <div className='text-[white] flex flex-col gap-[10px] px-[33px] py-[30px]'>
                    <button className='w-[288px] h-[45px] bg-[#4B729F] flex rounded-[5px] justify-between px-[17px] py-[13px]'>
                        <div className='flex items-center gap-[21px]'>
                            <div>
                                <img src={VK2} alt="sdg" />
                            </div>
                            <p>Вконтакте</p>
                        </div>
                        <p>3 300</p>
                    </button>

                    <button className='w-[288px] h-[45px] bg-[#4B729F] flex instagram rounded-[5px] justify-between px-[17px] py-[13px]'>
                        <div className='flex items-center gap-[21px]'>
                            <div>
                                <img src={Insta2} alt="sdg" />
                            </div>
                            <p>Instagram</p>
                        </div>
                        <p>10 602</p>
                    </button>

                    <button className='w-[288px] h-[45px] bg-[#E53935] flex rounded-[5px] justify-between px-[17px] py-[13px]'>
                        <div className='flex items-center gap-[21px]'>
                            <div>
                                <img src={Youtube2} alt="sdg" />
                            </div>
                            <p>YouTube</p>
                        </div>
                        <p>3 603</p>
                    </button>

                    <button className='w-[288px] h-[45px] bg-[#039BE5] flex rounded-[5px] justify-between px-[17px] py-[13px]'>
                        <div className='flex items-center gap-[21px]'>
                            <div>
                                <img src={TG2} alt="sdg" />
                            </div>
                            <p>Telegram</p>
                        </div>
                        <p>432</p>
                    </button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Block3