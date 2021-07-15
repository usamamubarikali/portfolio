import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Bio from './components/bio/Bio';
import Skills from './components/skills/Skills';
import RecentWork from './components/recentWork/RecentWork';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import ContactMe from './components/contactMe/ContactMe';
function App() {
  const [toggleContactMe, setToggleContactMe] = useState(false);
  return (
    <div className="App">

      <ContactMe toggleContactMe={toggleContactMe} setToggleContactMe={setToggleContactMe} />
      <Header setToggleContactMe={setToggleContactMe} />
      <Banner />
      <Bio />
      <Skills />
      <RecentWork setToggleContactMe={setToggleContactMe} />
      <div className="testimonials">
        <Testimonials />
      </div>
      <Footer setToggleContactMe={setToggleContactMe} />
    </div>
  );
}

export default App;
