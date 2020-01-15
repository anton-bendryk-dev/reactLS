import React from 'react';
import '../style/resetLs.css';
import '../style/ls.css';
import Header from './Header/Header.js';
import Slide from './Slide/Slide.js';
import OurAdvantages from './Our Advantages/OurAdvantages.js';
import AboutCompany from './About Company/AboutCompany.js';
import Geography from './Geography/Geography.js';
import Transport from './Transport/Transport.js';
import slide3 from '../pictures/slide3.jpg';
import GroupageCargo from './GroupageCargo/GroupageCargo.js';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="inline-wrapper">
        <Slide />
      </div>
      <div className="container first row">
        <div className="inline-wrapper">
          <div className="main row">
            <OurAdvantages />
          </div>
        </div>
      </div>
      <div className="container second row">
        <div className="inline-wrapper">
          <div className="main row">
            <AboutCompany />
          </div>
        </div>
      </div>
      <div className="inline-wrapper">
        <div className="main row">
          <Geography/>
        </div>
      </div>
      <div className="insert-img row"><h3>Автомобильные грузоперевозки</h3>
        <div className="insert-img-container">
          <div className="second-insert-img"><img src={slide3} alt="" /></div>
        </div>
      </div>
      <div className="inline-wrapper">
        <div className="main row">
          <Transport/>
        </div>
      </div>
      <div className="container third row">
        <div className="inline-wrapper">
          <div className="main row">
            <GroupageCargo/>
          </div>
        </div>
      </div>
      <div className="inline-wrapper">
        <div className="footer row">
          <div className="inline-footer">
            <div><p>Украина, Киев, ул. Пшеничная, 9, 03134</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
