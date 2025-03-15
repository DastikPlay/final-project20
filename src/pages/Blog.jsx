import IntroBlog1 from '../components/IntroBlog1'
import IntroBlog2 from '../components/IntroBlog2'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import IntroBlog3 from '../components/IntroBlog3';
import Pagination from '../components/Pagination';


const Blog = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://616f3d72066ea61b.mokky.dev/scooters2")
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
      <IntroBlog1/>
      <IntroBlog2/>
      <Pagination/>
      <IntroBlog3/>
    </div>
  )
}

export default Blog