import React from 'react';
import FooterImage from './media/images/abcLogo.png';


import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="listContainer">
                <div className="aboutList">
                    <h5 className="aoHeadings">About ABC</h5>
                    <ul className="footerLists">
                        <li>Cake Flavors and Pricing</li>
                        <li>Cookie Flavors</li>
                        <li>Gluten Free</li>
                        <li>Sugar Free</li>
                        <li>Fundraising and Donations</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div className="hourList">
                    <h5 className="aoHeadings">Operating Hours</h5>
                    <ul className="footerLists">
                        <li> Mon - Sat 7:00am - 6:00pm</li>
                        <li>Sunday: 9:00am - 3:00pm</li>
                    </ul>

                    <p>We Deliver Statewide</p>
                </div>
                <div className="contactList">
                    <img className="miniLogo" src={FooterImage}></img>
                    <ul className="footerLists">
                        <li>ABC Cake Shop & Bakery</li>
                        <li>1830 San Pedro Dr NE</li>
                        <li>Albuquerque, NM 87110</li>
                        <li>Tel: (505)255-5080</li>
                        <li>infor@abccakeshop.com</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;