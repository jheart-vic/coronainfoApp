import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from '../Redux/CoronaVirus';
import CoronaVirusList from './CoronaVirusList';
import Search from './SearchInput';


function CoronaVirus () {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.country.countries);
  const [countriesToRender, setCountriesToRender] = useState(countries) 
 
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch]);

  useEffect(() => {
    setCountriesToRender(countries)
  }, [countries]);


  return (
 <div>
   <Search Country={countries} setCountries={setCountriesToRender} />
    <div className='wrapper'>
      
     
        {
         countriesToRender?.data?.map(country =>(
          <CoronaVirusList key={country.code} country={country}/>
          ))

        }
 </div>
     </div>
     
  );
}

export default CoronaVirus;