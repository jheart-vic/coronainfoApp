import React from 'react';
import './style.css';
import {  Route, Routes } from 'react-router-dom';

import Header from './Components/Header'
import CoronaVirusDetails from './Components/CoronaVirusDetails';
import CoronaVirus from './Components/CoronaVirus';


class App extends React.Component {
  render() {
    return (
  
      <>
        <Header />

        <div >

          <Routes>
            <Route path="/" exact element={<CoronaVirus />} />
            {/* <Route index element={<CoronaVirus />} /> */}
            <Route path="/CoronaVirusDetails/:code" element={<CoronaVirusDetails />} />
          </Routes>

        </div>

      </>
   
    );
  }
}

export default App;