import IntroStock1 from '../components/IntroStock1'
import IntroStock2 from '../components/IntroStock2'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const Stock = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://616f3d72066ea61b.mokky.dev/scooters2')
      .then((response) => {
        setDishes(response.data);
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
      <IntroStock1/>
      <IntroStock2/>
    </div>
  )
}

export default Stock