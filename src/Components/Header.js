import React from 'react';
import {  Link } from 'react-router-dom';


const Header = () => {

    return (

      <nav className="navigation">
        <Link to="/" className="logoStyle">Bookstore CMS</Link>

        <ul className="nav-header">
          <li className="nav-link">
            <Link className="nav-link active" to="/CoronaVirus">Home</Link>
          </li>
         

          

        </ul>

      </nav>
    );
  }


export default Header;