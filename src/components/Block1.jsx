import { Link } from 'react-router-dom'
import Vector from '../assets/Vector.png'
import EG from '../assets/EGroup100.svg'
import Eva from '../assets/eva.svg'

const Block1 = () => {
  return (
    <div>
        <div className='px-[165px] mt-[22px] flex gap-[5px] items-center'>
            <img className='w-[19px] h-[17px]' src={Vector} alt="sffed" />
            <div className='flex gap-[5px]'>
                <Link className='text-[#5D6C7B]' to="/">Главная</Link>
                <Link className='text-[#5D6C7B]' to="/blog"> / Донат</Link>
                <p> / Как играть в CS2 и Standoff 2</p>
            </div>
        </div>
      
        <div className='flex px-[250px] mt-[20px]'>
            <img className='rounded-[15px] w-[1400px]' src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66765aa095ff83700f20f51f_671737de00457a06ef919278/smart_crop_516x290" alt="slkdj" />
        </div>
    </div>
  )
}

export default Block1