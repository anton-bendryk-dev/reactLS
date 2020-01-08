import React from 'react';
import './header-contacts.css'
import Email from 'https://mail.ukr.net/desktop#sendmsg'
import Facebook from 'https://www.facebook.com/companylogisticssolutions/'

const HeaderContacts = () => {
    return (
        <div className="header-contacts">
			<div className="col-width-25 header-contacts">+380501523665&#8195;&#8195;</div> 
			<div className="col-width-25 header-contacts">+380978757141&#8195;&#8195;</div> 
			<div className="col-width-25 header-contacts">+380509898041&#8195;&#8195;</div>
			<div className="col-width-25 header-links"><a href={Facebook}>Мы в Facebook</a></div>
			<div><a href={Email}>logistics-solutions@ukr.net</a></div>	
		</div>
    )
}
export default HeaderContacts