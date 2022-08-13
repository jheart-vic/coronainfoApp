import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from '../Redux/CoronaVirus';
import CoronaVirusList from './CoronaVirusList';
import Search from './SearchInput';


function CoronaVirus () {
  const countries = useSelector(state => state.country.countries);
  const [countriesToRender, setCountriesToRender] = useState(countries) 
  const dispatch = useDispatch();
 
  
  useEffect(() => {
    dispatch(getCountries())
    setCountriesToRender(countries)
  }, [dispatch, countries])
 

  return (
    <>
         <ul>
        <Search Country={countries} setCountries={setCountriesToRender} />
        {
        setCountriesToRender?.data?.map(country =>(
          <CoronaVirusList key={country.code} country={country}/>
          ))
        }
      </ul>

     </>
  );
}

export default CoronaVirus;