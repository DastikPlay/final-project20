import Batery from '../assets/Cs2.jpg'
import Cumka from '../assets/So2.jpg'
import Vector1 from '../assets/Vector1.png'
import Vector2 from '../assets/Vector2.png'

const IntroStock2 = () => {
  return (
    <div>
      <div className='mt-[111px] px-[165px]'>
        <div className='flex justify-between'>
          <div className='w-[540px] h-[367px] flex'>
            <img className='rounded-l-xl w-[275px]' src={Batery} alt="dfh" />
            <div className='h-[367px] w-[255px] bg-[#F4F7FB] rounded-r-xl flex flex-col justify-center pl-[30px]'>
              <p className='text-[#5D6C7B] text-[12px] '>Срок акции: 15.08 - 01.09</p>
              <h2 className='text-[#282739] text-[18px] font-semibold w-[199px] pt-[10px]'>До 01.09 выгода акции при донате GameGo CS2</h2>
              <p>+ 4 бонуса к донату</p>
              <div className='mt-[160px]'>
                <button className='w-[195px] h-[37px] bg-[gray] border border-[gray] rounded-[5px] text-[white] text-[12px] hover:text-[gray] hover:bg-[white] transition'>Принять участие в акции</button>
              </div>
            </div>
          </div>
          <div className='w-[540px] h-[367px] flex'>
            <img className='rounded-l-xl' src={Cumka} alt="dfh" />
            <div className='h-[367px] w-[255px] bg-[#F4F7FB] rounded-r-xl flex flex-col justify-center pl-[30px]'>
              <p className='text-[#5D6C7B] text-[12px] '>Срок акции: 15.08 - 01.09</p>
              <h2 className='text-[#282739] text-[18px] font-semibold w-[199px] pt-[10px]'>До 01.09 выгода акции при донате GameGo SO2</h2>
              <p>+ 3 бонуса к донату</p>
              <div className='mt-[160px]'>
                <button className='w-[195px] h-[37px] bg-[gray] border border-[gray] rounded-[5px] text-[white] text-[12px] hover:text-[gray] hover:bg-[white] transition'>Принять участие в акции</button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-[30px]'>
        <div className='w-[540px] h-[367px] flex'>
            <img className='rounded-l-xl' src={Cumka} alt="dfh" />
            <div className='h-[367px] w-[255px] bg-[#F4F7FB] rounded-r-xl flex flex-col justify-center pl-[30px]'>
              <p className='text-[#5D6C7B] text-[12px] '>Срок акции: 15.08 - 01.09</p>
              <h2 className='text-[#282739] text-[18px] font-semibold w-[199px] pt-[10px]'>До 01.09 выгода акции при донате GameGo SO2</h2>
              <p>+ 3 бонуса к донату</p>
              <div className='mt-[160px]'>
                <button className='w-[195px] h-[37px] bg-[gray] border border-[gray] rounded-[5px] text-[white] text-[12px] hover:text-[gray] hover:bg-[white] transition'>Принять участие в акции</button>
              </div>
            </div>
          </div>
          <div className='w-[540px] h-[367px] flex'>
            <img className='rounded-l-xl w-[275px]' src={Batery} alt="dfh" />
            <div className='h-[367px] w-[255px] bg-[#F4F7FB] rounded-r-xl flex flex-col justify-center pl-[30px]'>
              <p className='text-[#5D6C7B] text-[12px] '>Срок акции: 15.08 - 01.09</p>
              <h2 className='text-[#282739] text-[18px] font-semibold w-[199px] pt-[10px]'>До 01.09 выгода акции при донате GameGo CS2</h2>
              <p>+ 4 бонуса к донату</p>
              <div className='mt-[160px]'>
                <button className='w-[195px] h-[37px] bg-[gray] border border-[gray] rounded-[5px] text-[white] text-[12px] hover:text-[gray] hover:bg-[white] transition'>Принять участие в акции</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-[8px] mt-[40px] mb-[90px]'>
          <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
            <img className='p-[9.9px] w-[32px] h-[32px] hover:border border-[gray] hover:text-[gray] hover:rounded-[5px] transition' src={Vector1} alt="sgfa" />
          </div>
          <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
            <p className='py-[5px] h-[32px] px-[11px] hover:border border-[gray] hover:text-[gray] hover:rounded-[5px] transition'>1</p>
          </div>
          <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
            <p className='py-[5px] h-[32px] px-[11px] hover:border border-[gray] hover:text-[gray] hover:rounded-[5px] transition'>2</p>
          </div>
          <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
            <p className='py-[5px] h-[32px] px-[11px] hover:border border-[gray] hover:text-[gray] hover:rounded-[5px] transition'>3</p>
          </div>
          <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
            <p className='py-[5px] h-[32px] px-[11px] hover:border border-[gray] hover:text-[gray] hover:rounded-[5px] transition'>4</p>
          </div>
          <div className='w-[32px] h-[32px] border border-[#EAEBED] rounded-[5px]'>
            <img className='p-[9.9px] w-[32px] h-[32px] hover:border border-[gray] hover:text-[gray] hover:rounded-[5px] transition' src={Vector2} alt="sgfa" />
          </div>
      </div>
    </div>
  )
}

export default IntroStock2