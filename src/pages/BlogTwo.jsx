import Block1 from '../components/Block1'
import Block2 from '../components/Block2'
import Block3 from '../components/Block3'
import Block4 from '../components/Block4'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const BlogTwo = () => {
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
            <Block1/>
            <Block2/>
            <Block3/>
            <Block4/>
        </div>
    )
}

export default BlogTwo