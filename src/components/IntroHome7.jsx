import { Button } from '@mui/material'
import Dastanbai4 from '../assets/Mask Group4.svg'
import Img22 from '../assets/Polygon 8.png'
import skincs from '../assets/skincs.webp'
const IntroHome7 = () => {
  return (
    <div>
        <div className="flex mt-[100px] justify-center">
          <img className="relative w-[1300px] h-[700px]" src={skincs} alt="sfsd" />
          <div className="absolute w-[136px] h-[136px] bg-[white] rounded-[100px] mt-[247px]">
            <Button className="w-[136px] h-[136px]">
              <img src={Img22} alt="llds" />
            </Button>
          </div>
        </div>
    </div>
  )
}

export default IntroHome7