import React from 'react';
import './About.css';
import Cookie from './media/images/cookiePic.png';
import Cupcake from './media/images/cupcakePic.png';
import Cake from './media/images/cakePic.png';


class About extends React.Component {
    render() {
        return (
            <div className="foodCards">

                <div class="card1">
                    <img src={Cake} alt="Cake" className="pastry"></img>
                    <div>
                        <p class="description">Our cupcakes are crafted from scratch in our bakery every day by our professional Pastry Chefs. All recipes are created only for ABC Cake Shop and Bakery customers.</p>
                    </div>
                </div>

                <div class="card1">
                    <img src={Cupcake} alt="cupcake" className="pastry"></img>
                    <div>
                        <p className="description">After slicing into ABC Cake Shop's moist cakes that are covered in sweet buttercream frosting, your party guests will be asking for seconds!</p>
                    </div>
                </div>

                <div class="card1">
                    <img src={Cookie} alt="cookie" className="pastry"></img>
                    <div>
                        <p class="description">Our delicious collection of baked cookies will satisfy anyone's sweet tooth</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;