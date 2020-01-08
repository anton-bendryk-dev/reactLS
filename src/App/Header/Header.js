import React from 'react'
import './header.css'
import 'src\App\Header\Logo\Logo.js'
import HeaderContacts from 'src\App\Header\Header contacts\HeaderContacts.js'
const Header  = () => {
    return (
        <div className="header">
			<div className="inline-header">
				<div className="col-width-25 logo">
					<Logo/>
				</div>
				<div className="col-width-75">
					<div className="col-height-45">
						<HeaderContacts/>	
					</div>									
				</div>
				<div className="col-height-50 menu-container">
					<div className="col-width-25">
						<div className="menu-buttons"><a href="">Компания&#8195;<img src={pictures/arrow-down.png} alt=""/></a>
							<div className="drop-menu">
								<div className="menu-buttons"><a href="">О Нас</a></div>
								<div className="menu-buttons"><a href="">Наши Преимущества</a></div>
								<div className="menu-buttons"><a href="">Наша Команда</a></div>
								<div className="menu-buttons"><a href="">Сертификаты</a></div>
								<div className="menu-buttons"><a href="https://www.work.ua/ru/jobs/by-company/1202656/">Вакансии</a></div>
							</div>
						</div>
					</div>
					<div className="col-width-25"></div>
						<div className="menu-buttons transport">
							<a href="">Транспорт&#8195;<img src={pictures/arrow-down.png} alt=""/></a>
							<div className="drop-menu">
							    <div className="menu-buttons"><a href="">География</a></div>
								<div className="menu-buttons"><a href="">Автомобильные</a></div>
								<div className="menu-buttons"><a href="">Сборные</a></div>
								<div className="menu-buttons"><a href="">Страхование</a></div>
								<div className="menu-buttons"><a href="">Таможеные услуги</a></div>
							</div>
						</div>
					</div>
					<div className="col-width-25">
						<div className="menu-buttons"><a href="">Услуги</a></div>
					</div>
					<div className="col-width-25" id="calculation-button">
						<button className="menu-buttons">Расчет Стоимости</button>
					</div> 
						</div>
				</div>
            </div>
        </div>    
    )
}
export default Header