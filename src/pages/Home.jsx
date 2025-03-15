import IntroHome1 from "../components/IntroHome1"
import IntroHome10 from "../components/IntroHome10"
import IntroHome11 from "../components/IntroHome11"
import IntroHome2 from "../components/IntroHome2"
import IntroHome3 from "../components/IntroHome3"
import IntroHome5 from "../components/IntroHome5"
import IntroHome6 from "../components/IntroHome6"
import IntroHome7 from "../components/IntroHome7"
import IntroHome8 from "../components/IntroHome8"
import IntroHome9 from "../components/IntroHome9"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import IntroHome4 from "../components/IntroHome4"
import IntroHome12 from "../components/IntroHome12"

const Home = () => {
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
      <IntroHome1 />
      <IntroHome2 />
      <IntroHome3 />
      <IntroHome4 />
      <IntroHome5 />
      <IntroHome6 />
      <IntroHome7 />
      <IntroHome8 />
      <IntroHome9 />
      <IntroHome10 />
      <IntroHome11 />
      <IntroHome12/>
    </div>
  )
}

export default Home