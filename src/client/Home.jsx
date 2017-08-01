import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <Link to="/dashboard">Dahsboard</Link>
    <br />
    <Link to="/login">Login</Link>
  </div>
);

export default Home;
