import { Link } from 'react-router-dom'
import Arrow from '../assets/Arrow 19.png'
import Mask from '../assets/Mask Group100.svg'
import { Button } from '@mui/material'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const NotFound = () => {
  const [scooters, setScooters] = useState([]);  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://616f3d72066ea61b.mokky.dev/scooters2")
      .then((response) => {
        setScooters(response.data);
        setLoading(false);
      })
      // .catch((err) => {
      //   setError(err.message);
      //   setLoading(false);
      // });
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center">
        <CircularProgress /> <p>Загрузка...</p>
      </div>
    );

  // if (error) return <p>Error:{error} </p>;  

  return (
    <div>
      <div className='flex items-center gap-[8px] ml-[165px] mt-[20px]'>
        <Link to="/"><img className='' src={Arrow} alt="geg" /></Link> <Link className='text-[#5D6C7B]' to="/">Вернуться в каталог</Link>
      </div>
      
      <div className='flex mt-[20px] px-[100px]'>
        <img className='relative' src={Mask} alt="dff" />
        <div className="absolute pl-[230px] pt-[68px]">
          <h1 className='text-[white] font-semibold text-[35px] w-[247px]'>СТРАНИЦА НЕ НАЙДЕНА</h1>
          <p className='text-[white] text-[14px] pt-[14px] w-[298px]'>Кажется, что-то пошло не так!
          Запрашиваемая страница не существует.
          Возможно, она устарела или была удалена.</p>
          <div className='w-[191px] h-[53px] bg-[white] rounded-[5px] mt-[22px]'>
            <Button className='w-[191px] h-[53px] bg-[white]'>Перейти в Instagram</Button>
          </div>
          <div className='w-[193px] pt-[9px] text-[12px]'>
            <a className='text-[#FFFFFF]' href="">или позвоните нам, чтобы сообщить об ошибке
            +7 (800) 505-54-61</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound