import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight} from "react-icons/fa";




const CoronaVirusList = ({ country}) => {

 const colors = ["#918e8e8a", " rgb(147 146 146)", '#ec4c8a', "#f076a5" ];
// pick random color from colors
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const Colorstyle = {
  backgroundColor : randomColor
    
  };

    const { code } = country;

  

   
  return (
    <>
    
    
      <div className='mainContainer '> 
      <div style={Colorstyle} className='container '>
      <Link to={`CoronaVirusDetails/${code}`} state={{country}}>
       <button className='virusDetailsDisplay'><FaArrowRight /></button>
       </Link>
       <div className='cardStyle'>
        <h3 className='countryName'>{country.name}</h3>
        <p className='countryPopulation'>Population: {country.population}</p>
      
      </div>
    </div>
    </div>
    </>
  );
};

export default CoronaVirusList;