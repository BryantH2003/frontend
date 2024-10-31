import React from 'react';
import NavBar from '../components/NavBar';

import '../styles/Home.css';
import '../styles/Page.css';

const Home = () => {

  return (
    <div className='page-wrapper'>
      <header>
        <NavBar />
      </header>

      <div className='main-body'>
        <div className='calendar'>
          <section className='calendar-left'>
            <p>CALENDAR LEFT</p>
          </section>
          <section className='calendar-right'>
            <p>CALENDAR RIGHT</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
