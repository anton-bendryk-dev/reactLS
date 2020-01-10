import React from 'react';
import './transport.css';
import TransportBox from './Transport-box/TransportBox.js';
import TransportBoxItem from './Transport-box/TransportBoxItem';
import transport2 from '../../pictures/transport/transport2.jpg';
import transport3 from '../../pictures/transport/transport3.jpg';
import transport4 from '../../pictures/transport/transport4.jpg';
import transport5 from '../../pictures/transport/transport5.jpg';
import transport6 from '../../pictures/transport/transport6.jpg';
import transport7 from '../../pictures/transport/transport7.jpg';
import transport8 from '../../pictures/transport/transport8.jpg';
import transport9 from '../../pictures/transport/transport9.jpg';

const Transport = () => {
    return (
        <div>
            <h3 className="h3">Типы кузовов грузовых автомобилей</h3>
          <div className="transport-container">
            <div className="info-container transport-box">
              {
                TransportBox.map(({
                  id,
                  image,
                  name,
                  CarryingCapacity,
                  UsefulVolume,
                  size,
                  spaciousness,
                  cargo,
                  NotSuitableFor
                }) => (
                  <TransportBoxItem
                  id = {id}
                  image = {image}
                  name = {name}
                  CarryingCapacity = {CarryingCapacity}
                  UsefulVolume = {UsefulVolume}
                  size = {size}
                  spaciousness = {spaciousness}
                  cargo = {cargo}
                  NotSuitableFor = {NotSuitableFor}
                  />
                ))
              }
            </div>
            <div className="info-container transport-box">
              <img src={transport2} alt="" />
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
              <img src={transport3} alt="" />
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
              <img src={transport4} alt="" />
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
              <img src={transport5} alt="" />
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
              <img src={transport6} alt="" />
              <h3>Открытый бортовой полуприцеп:</h3>
              <ul>
                <li>Груз: применяется для перевозки грузов, устойчивых к внешним погодным воздействиям.</li>
                <li>Грузоподъемность: до 23 тонн.</li>
                <li>Тип загрузки: сверху, сбоку, сзади.</li>
                <li>Вместительность: 33 европаллета.</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={transport7} alt="" />
              <h3>Открытая платформа:</h3>
              <ul>
                <li>Груз: применяется для перевозки грузов, устойчивых к внешним погодным воздействиям таким как контейнера, бетонные блоки, перекрытия, строительные конструкции и т.д. </li>
                <li>Может также использоваться для перевозки негабаритного оборудования.</li>
                <li>Грузоподъемность: 15-23 тонн.</li>
                <li>Тип загрузки: любой.</li>
              </ul>
            </div>
            <div className="info-container transport-box">
              <img src={transport8} alt="" />
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
              <img src={transport9} alt="" />
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
    )
}
export default Transport