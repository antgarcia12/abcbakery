import React from 'react';

import './Gallery.css';

import BakeryCupcakes from './media/images/bakeryCupcakes.jpg';
import BasketCookies from './media/images/basketCookies.jpg';
import TrayCookies from './media/images/chocolateCookies.jpg';
import Drip from './media/images/chocolateDrip.jpg';
import Christmas from './media/images/christmasCookies.jpg';
import DC from './media/images/dcCookies.jpg';
import Display from './media/images/displayPastries.jpg';
import Outside from './media/images/outsideCakes.jpg';
import PB from './media/images/pbCookie.jpg';
import Rolls from './media/images/rolls.jpg';


class abcGallery extends React.Component {

    render() {
        return (
            <div className="foodGallery">
                <div className="photoSection">
                    <h1 className="galleryHeading">Welcome to our Gallery</h1>
                    <div className="rowGallery">
                        <div className="columnGallery">
                            <img src={BakeryCupcakes}></img>
                            <img src={BasketCookies}></img>
                            <img src={TrayCookies}></img>
                        </div>
                        <div className="columnGallery">
                            <img src={Drip}></img>
                            <img src={Christmas}></img>
                            <img src={DC}></img>
                            <img src={Rolls}></img>
                        </div>
                        <div className="columnGallery">
                            <img src={Display}></img>
                            <img src={Outside}></img>
                            <img src={PB}></img>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default abcGallery;