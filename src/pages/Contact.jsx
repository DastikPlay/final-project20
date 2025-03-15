import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import IntroContact from '../components/IntroContact';
import IntroContact2 from '../components/IntroContact2';
import IntroContact3 from '../components/IntroContact3';
import IntroContact4 from '../components/IntroContact4';

const Contact = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://616f3d72066ea61b.mokky.dev/scooters3")
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
      <IntroContact/>
      <IntroContact2/>
      <IntroContact4/>
      <IntroContact3/>
    </div>
  )
}

export default Contact