import React from 'react';
import './header.css';
import 'src\App\Header\Logo\Logo.js';
import HeaderContacts from 'src\App\Header\Header contacts\HeaderContacts.js';
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
                    <div className="col-height-50">
                        <Navigation/>
                    </div>
                </div>
            </div>
        </div>    
    )
}
export default Header