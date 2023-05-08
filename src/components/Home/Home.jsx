import {useState, useEffect} from 'react'
import axios from 'axios';
import Card from './Card/Card';

const Home = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {

    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }

  }

  useEffect (() => {
    fetchData();
  }, [])


  const myCountries = data.map((country, index) => (

    // console.log(country)
    <Card key={index} flag={country.flags.png}
    alt={country.flags.alt}  name={country.name.common}
    capital={country.capital}
    population={country.population}/>

  ))





  return (
    <div className='cardBox'>
      {myCountries}
    </div>
  )
}

export default Home
