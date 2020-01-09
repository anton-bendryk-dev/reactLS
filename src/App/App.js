import React from 'react';
import 'src\style\resetLs.css';
import 'src\style\ls.css';
import Header from '.src\App\Header\Header.js';
import Slide from 'src\App\Slide\Slide.js';
import OurAdvantages from 'src\App\Our Advantages\OurAdvantages.js';
import AboutCompany from 'src\App\About Company\AboutCompany.js';
import Geography from 'src\App\Geography\Geography.js';
import Transport from 'src\App\Transport\Transport.js';
import slide3 from 'src\pictures\slide3.jpg';
import GroupageCargo from 'src\pictures\groupage-cargo.jpg';
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
            <div className="groupage-cargo">
              <div className="groupage-cargo-container">
                <h2>СБОРНЫЕ ГРУЗЫ</h2>
                <p>Компания Logistics Solutions также занимается перевозкой сборных грузов и это составляет большую долю наших транспортировок. Доставка сборных грузов востребована среди представителей многих отраслей и бизнесов разного размера, от индивидуальных предпринимателей до крупных корпораций. Такой вид транспортировки представляет собой перевозку небольших товаров разных поставщиков в одном направлении.</p>
              </div>
              <div className="groupage-cargo-img">
                <img src={GroupageCargo} alt="" />
              </div>
              <p>Разумное использование грузового места снижает издержки при доставке и гарантирует безопасность товаров.Мы изучаем нужды заказчика и характеристики груза, составляем подходящую схему транспортировки и рассчитываем стоимость. Наша компания доставляет товары в срок независимо от конечного пункта назначения. Надёжные логистические компании и другие партнёры позволяют нам сохранять небольшие цены и швейцарское качество обслуживания при экспорте и импорте сборных грузов. Мы придерживаемся высоких стандартов во всех мелочах.</p>
            </div>
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
