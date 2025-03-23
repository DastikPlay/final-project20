import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios"
import { useState, useEffect } from "react"
import imageScooter from '../assets/scootersImg.png'
import Accumulator from '../assets/accumulator 1.png'
import Power from '../assets/power 1.png'
import Speedometer from '../assets/speedometer 1.png'
import Timer from '../assets/timer 1.png'
import Shop from '../assets/shop.png'
import Like from '../assets/Like.png'
import cs from '../assets/cs.png'
import vl from '../assets/vl.png'

const IntroHome2 = () => {
  const [scooters, setScooters] = useState([]);
  useEffect(() => {
    axios
      .get("https://616f3d72066ea61b.mokky.dev/scooters3")
      .then((response) => {
        setScooters(response.data[0].scooters)
        // console.log(response.data[0].scooters);

      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  console.log(scooters, 'scooters');


  return (
    <div>
      <div className="px-[165px] mt-[74px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[black] font-semibold text-[35px]">ВАША БИБЛИОТЕКА</h1>
          <div className="flex gap-[10px]">
            <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[109px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Опыт в игре</button>
            <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[96px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Проведенное время</button>
            <button className="shadow-2xl text-[#5D6C7B] font-normal text-xs w-[96px] h-[37px] bg-[#F4F7FB] rounded-[5px] hover:bg-none hover:text-[#6F73EE] hover:border-2 border-[#6F73EE] transition">Цена игры</button>
          </div>
        </div>

        <div className="mt-[50px] flex justify-between">
          {scooters.map((data, index) => {
            return (
              <Card
                className="
                    w-[255px]
                    h-[492px]
                  "
                key={index}>
                  <img src={cs}/>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     Counter-Strike2 
                    </Typography>
                    <div>
                        <div className="mt-[20px]">
                             <div className="">
                                   <div className="flex gap-[10px] items-center">
                                         </div>
                                                <div className="flex gap-[10px] items-center ">
                                                  <img src={Power} alt="fsdf" />
                                                  <p>1500 опыта</p>
                                                   </div>
                                                 </div>
                                                 <div className="flex gap-[38px] mt-[17px]">
                                                 <div className="flex gap-[10px] items-center">
                                                <img src={Timer} alt="fsdf" />
                                          <p>995 часов</p>
                                       </div>
                                 </div>
                           </div>
                      <div className='flex gap-[26px] mt-[27px]'>
                        <p className="text-[#282739] text-[20px] font-semibold">Бесплатная</p>
                        <div className="flex gap-[10px]">
                          <div className='w-[40px] h-[40px] rounded-[100px] border border-[#EAEBED]'>
                            <img className='m-[10px]' src={Shop} alt="sd" />
                          </div>
                          <div className=' w-[40px] h-[40px] rounded-[100px] border border-[#EAEBED]'>
                            <img className='w-[20px] h-[20px] m-[10px]' src={Like} alt="sdfsdf" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-[50px] flex justify-between">
          {scooters.map((data, index) => {
            return (
              <Card
                className="
                    w-[255px]
                    h-[492px]
                  "
                key={index}>
                  <img src={vl}/>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Valorant  
                    </Typography>
                    <div>
                    <div className="mt-[20px]">
                             <div className="">
                                   <div className="flex gap-[10px] items-center">
                                         </div>
                                                <div className="flex gap-[10px] items-center ">
                                                  <img src={Power} alt="fsdf" />
                                                  <p>982 опыта</p>
                                                   </div>
                                                 </div>
                                                 <div className="flex gap-[38px] mt-[17px]">
                                                 <div className="flex gap-[10px] items-center">
                                                <img src={Timer} alt="fsdf" />
                                          <p>643 часов</p>
                                       </div>
                                 </div>
                           </div>
                      <div className='flex gap-[26px] mt-[27px]'>
                        <p className="text-[#282739] text-[20px] font-semibold">Бесплатная</p>
                        <div className="flex gap-[10px]">
                          <div className='w-[40px] h-[40px] rounded-[100px] border border-[#EAEBED]'>
                            <img className='m-[10px]' src={Shop} alt="sd" />
                          </div>
                          <div className=' w-[40px] h-[40px] rounded-[100px] border border-[#EAEBED]'>
                            <img className='w-[20px] h-[20px] m-[10px]' src={Like} alt="sdfsdf" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default IntroHome2