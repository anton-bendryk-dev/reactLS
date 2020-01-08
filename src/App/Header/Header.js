import React from 'react'
import './header.css'
import './Logo/Logo.js'
const Header  = () => {
    return (
        <div className="header">
			<div className="inline-header">
				<div className="col-width-25 logo">
					<Logo/>
				</div>
				<div className="col-width-75">
					<div className="col-height-45">
						<div className="header-contacts">
							<div className="col-width-25 header-contacts">+380501523665&#8195;&#8195;</div> 
							<div className="col-width-25 header-contacts">+380978757141&#8195;&#8195;</div> 
							<div className="col-width-25 header-contacts">+380509898041&#8195;&#8195;</div>
							<div className="col-width-25 header-links"><a href="https://www.facebook.com/companylogisticssolutions/">Мы в Facebook</a></div>
							<div><a href="https://mail.ukr.net/desktop#sendmsg">logistics-solutions@ukr.net</a></div>	
						</div>	
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
    )
}
export default Header