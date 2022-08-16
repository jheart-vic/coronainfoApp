import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaArrowLeft} from "react-icons/fa";

const CoronaVirusDetails = () => {
  const { state: { country} } = useLocation();
  return (
    <div  >
      <Link to='/'>
        <button className='coronaDetailNavBtn'><FaArrowLeft/></button>
       </Link>
       <div className='virusDetailsContainer'>
        <div className='nameContainer'> 
       <h2 className='virusDetailText '>Country Name</h2>
        <h3 className='countryNameDetails virusDetailText'>{country.name}</h3>
        </div>
        <div className='contentWrapper'>
        <div> 
        <h2 className='virusDetailText'>Total Death</h2>
        <p className='virusDetailText virusDeath'>{country.latest_data.deaths}</p>
        <h2 className='virusDetailText'>Total Confirmed Cases</h2>
        <p className='virusDetailText virusconfirm'>{country.latest_data.confirmed}</p>
        </div>
        <div>
        <h2 className='virusDetailText'>Total Recovered</h2>
        <p className='virusDetailText virusrecovery'>{country.latest_data.recovered}</p>
        <h2 className='virusDetailText '>Total Critical Cases</h2>
        <p className='virusDetailText virusCritical'>{country.latest_data.critical}</p>
        </div>
        </div>
        </div>
        </div>
  )
}

export default CoronaVirusDetails