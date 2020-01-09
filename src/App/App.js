import React from 'react';
import '../style/reset.css';
import '../style/ls.css';
import Header from '.src\App\Header\Header.js';
import Slide from 'src\App\Slide\Slide.js';
import OurAdvantages from 'src\App\Our Advantages\OurAdvantages.js';
import AboutCompany from 'src\App\About Company\AboutCompany.js';
import Geography from 'src\App\Geography\Geography.js';
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
          <div className="second-insert-img"><img src={pictures / slide3.jpg} alt="" /></div>
        </div>
      </div>
      <div className="inline-wrapper">
        <div className="main row">
          <h3 className="h3">Типы кузовов грузовых автомобилей</h3>
          <div className="transport-container">
            <div className="info-container transport-box">
              <img src={pictures / transport / transport1.jpg} alt="" />
              <h3>Тентованый полуприцеп (еврофура):</h3>
              <ul>
                <li>Грузоподъемность: до 22,5 тонн.</li>
                <li>Полезный объем: 82-92 м.куб</li>
                <li>Размеры: длинна 13,6м, ширина 2,48м, высота 2,6-2,8м</li>
                <li>Вместительность: 34 европаллета</li>
                <li>Груз: это самый распространенный тип кузова. Пригоден для перевозки большинства грузов. Растентовка позволяет производить загрузку сверху (уточнять), сбоку и сзади.</li>
                <li>Не подходит для: грузов, требующих особого температурного режима; крупногабаритных и негабаритных грузов</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={pictures / transport / transport2.jpg} alt="" />
              <h3>Тентовые полуприцепы большего объема  (Jumbo и МЕГА):</h3>
              <ul>
                <li>Грузоподъемность: до 23 тонн.</li>
                <li>Полезный объем: 96-105 м.куб.</li>
                <li>Вместительность: 33 европаллета.</li>
                <li>
                  Jumbo: больший объем достигается за счет специального "Г"-образного пола и уменьшенного диаметра колес полуприцепа.
						</li>
                <li>
                  МЕГА: большой объем достигается за счет увеличения ширины до 2,5м и высоты до 3,05м (внешний вид как у стандартной еврофуры).
						</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={pictures / transport / transport3.jpg} alt="" />
              <h3>Автосцепка:</h3>
              <ul>
                <li>Автомобиль с кузовом на одной раме + прицеп.Преимущество: большой полезный объем.</li>
                <li>Тип загрузки: сзади, сбоку, сверху (уточнять)</li>
                <li>Не подходит для: перевозки длинномерных грузов.</li>
                <li>Грузоподъемность:16-23 тонн.</li>
                <li>Полезный объем: 100-120 м.куб</li>
                <li>Размеры кузова тягача и прицепа: длинна от 6 до 9м, ширина 2,48м,высота от 2,6 до 3,2м.</li>
                <li>Вместительность: 33-44 европаллета.</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={pictures / transport / transport4.jpg} alt="" />
              <h3>Рефрижераторный фургон:</h3>
              <ul>
                <li>Полуприцеп-холодильник.</li>
                <li>
                  Груз: пригоден для перевозки большинства видов скоропортящихся продуктов и грузов со спец. условиями хранения: от +25`С до - 25`С.
						</li>
                <li>Тип загрузки: только сзади!!!</li>
                <li>Цена: в эксплуатации дороже на 5-25%.</li>
                <li>Грузоподъемность: 12-22 тонн.</li>
                <li>Полезный объем: 60-92 м.куб.</li>
                <li>Вместительность: 24-33 европаллета</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={pictures / transport / transport5.jpg} alt="" />
              <h3>Изотермический фургон:</h3>
              <ul>
                <li>
                  Может удерживать определенную температуру длительное время. Бывает полуприцеп, автосцепка и одиночный.
						</li>
                <li>
                  Груз: некоторые виды груза, требующие при перевозке поддержки определенных температурных режимов, в частности продовольственные товары.
						</li>
                <li>Тип загрузки: только сзади!!!</li>
                <li>Грузоподъемность: до 23 тонн.</li>
                <li>Полезный объем: до 92 м.куб.</li>
                <li>Вместительность: 33 европаллета</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={pictures / transport / transport6.jpg} alt="" />
              <h3>Открытый бортовой полуприцеп:</h3>
              <ul>
                <li>Груз: применяется для перевозки грузов, устойчивых к внешним погодным воздействиям.</li>
                <li>Грузоподъемность: до 23 тонн.</li>
                <li>Тип загрузки: сверху, сбоку, сзади.</li>
                <li>Вместительность: 33 европаллета.</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={pictures / transport / transport7.jpg} alt="" />
              <h3>Открытая платформа:</h3>
              <ul>
                <li>Груз: применяется для перевозки грузов, устойчивых к внешним погодным воздействиям таким как контейнера, бетонные блоки, перекрытия, строительные конструкции и т.д. </li>
                <li>Может также использоваться для перевозки негабаритного оборудования.</li>
                <li>Грузоподъемность: 15-23 тонн.</li>
                <li>Тип загрузки: любой.</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={pictures / transport / transport8.png} alt="" />
              <h3>Платформа для негабаритных и тяжеловесных грузов:</h3>
              <ul>
                <li>
                  Груз: применяется для перевозки негабаритных и тяжеловестных грузов. Специальная конструкция платформ позволяет перевозить высокие грузы, а так называемые телескопические платформы позволяют раскладывать прицеп в длину до 29м, что позволяет перевозить длинномерные товары.
						</li>
                <li>Грузоподъемность: 20-200 тонн.</li>
                <li>Тип загрузки: любой.</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={pictures / transport / transport9.jpg} alt="" />
              <h3>Цельномет:</h3>
              <ul>
                <li>Евро фура с металлическим со всех сторон полуприцепом.</li>
                <li>
                  Груз: подходит для любых грузов, которым не требуется температурный режим. Такой прицеп требуется для перевозки дорогих грузов, так как он более надежный в отличии от тента которого можно порезать ножом.
						</li>
                <li>Грузоподъемность: до 23 тонн.</li>
                <li>Полезный объем: 86 м.куб.</li>
                <li>Размеры: длинна 13,6м, ширина 2,45м, высота 2,6м</li>
                <li>Тип загрузки: только сзади!!!</li>
              </ul>
            </div>
            <p>Грузоперевозки автомобильным транспортом осуществляют с применением особого транспорта. Мы выбираем автомобиль учитывая нужды Клиента и характеристики груза, весом от 1т до 23т.Все эти виды автомобилей могут быть тентоваными, рефрежераторными, изотермичными и цельнометалическими.</p>
          </div>
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
                <img src={pictures / groupage - cargo.jpg} alt="" />
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
 		</div >
	</div >
  );
}

export default App
