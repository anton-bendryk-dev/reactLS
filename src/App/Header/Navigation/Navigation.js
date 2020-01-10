import React from 'react';
import './navigation.css';
import ArrowDown from '../../../pictures/arrow-down.png';
const Navigation = () => {
    return (
        <div className="menu-container">
			<div className="col-width-25">
				<div className="menu-buttons"><a href="">Главная</a></div>
			</div>
			<div className="col-width-25">
				<div className="menu-buttons"><a href="">Компания&#8195;<img src={ArrowDown} alt=""/></a>
					<div className="drop-menu">
						<div className="menu-buttons"><a href="">О Нас</a></div>
						<div className="menu-buttons"><a href="">Услуги</a></div>
						<div className="menu-buttons"><a href="">Наша Команда</a></div>
						<div className="menu-buttons"><a href="">Сертификаты</a></div>
						<div className="menu-buttons"><a href='https://www.work.ua/ru/jobs/by-company/1202656/'>Вакансии</a></div>
					</div>
				</div>
			</div>
			<div className="col-width-25">
				<div className="menu-buttons transport">
					<a href="">Транспорт&#8195;<img src={ArrowDown} alt=""/></a>
					<div className="drop-menu">
						<div className="menu-buttons"><a href="">География</a></div>
						<div className="menu-buttons"><a href="">Автомобильные</a></div>
						<div className="menu-buttons"><a href="">Сборные</a></div>
						<div className="menu-buttons"><a href="">Страхование</a></div>
						<div className="menu-buttons"><a href="">Таможеные услуги</a></div>
					</div>
				</div>
			</div>			
			<div className="col-width-25" id="calculation-button">
				<button className="menu-buttons">Расчет Стоимости</button>
            </div>  
        </div>  
    )
} 
export default Navigation