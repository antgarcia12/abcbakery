import React from 'react';

import './Flavors.css'


class Flavors extends React.Component {
    render() {
        return (
            <div className="cakeFlavors">
                <div className="wcmyFlavors">
                    <h4 className="flavorHeadings">Cake Flavors</h4>
                    <p><strong>Classic:</strong> White (Vanilla), Chocolate</p>
                    <p><strong>Deluxe:</strong> Red Velvet, German Chocolate, Carrot, Lemon, Strawberry, Cherry, Mocha, Almond, Spice, Orange, Tres Leches, Confetti, Pineapple Upside Down, Lobo (Red Velvet and Almond Swirl)</p>
                    <hr></hr>
                    <h4 className="flavorHeadings">Fillings</h4>
                    <p><strong>Classic:</strong>Bavarian Cream, Chocolate Bavarian Cream, Traditional Buttercream, Chocolate Buttercream, Whipped Cream, Chocolate Whipped Cream, Strawberry, Raspberry, Lemon, Apricot, Mocha, Apple, Pineapple</p>
                    <p><strong>Deluxe:</strong> German Chocolate, Cream Cheese, Cherry, Fudge, Flavored Buttercream</p>
                    <hr></hr>
                    <h4 className="flavorHeadings">Icing</h4>
                    <p><strong>Classic:</strong> Traditional Buttercream, Chocolate Buttercream, Whipped Cream, Chocolate Whipped Cream</p>
                    <p><strong>Deluxe:</strong> Cream Cheese, Fudge, German Chocolate, Flavored Buttercream</p>

                    <p>Ask us about:  Gluten Free & Sugar Free Cakes and Cupcakes, Italian Cream Cake, Ice Cream Cakes, Cookie Cakes, Charges for Deluxe Flavors, Fillings and Icings, and Custom Decoration!</p>
                    <p><strong>Please keep in mind the following prices only pertain to front-of-house orders. Please schedule a consultation with one of our Wedding Professionals if you would like a Wedding quote. Call us at 505-255-5080</strong></p>

                    <hr></hr>

                    <h2 className="flavorHeadings">Pricing by Size</h2>
                    <h3 className="flavorHeadings">Sheet Cakes</h3>
                    <table border="1" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td valign="top" width="148"><b>Size (approx)</b></td>
                                <td valign="top" width="148"><b>Servings    2&#215;2</b></td>
                                <td valign="top" width="148"><b>Servings 2&#215;3</b></td>
                                <td valign="top" width="148"><b>Classic Price</b></td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">1/8 (6”x8”)</td>
                                <td valign="top" width="148">12</td>
                                <td valign="top" width="148">8</td>
                                <td valign="top" width="148">$25.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">1/4 (8”x12”)</td>
                                <td valign="top" width="148">24</td>
                                <td valign="top" width="148">16</td>
                                <td valign="top" width="148">$31.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">1/3 (8”x16”)</td>
                                <td valign="top" width="148">32</td>
                                <td valign="top" width="148">20</td>
                                <td valign="top" width="148">$44.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">1/2 (12”x16”)</td>
                                <td valign="top" width="148">48</td>
                                <td valign="top" width="148">32</td>
                                <td valign="top" width="148">$60.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">3/4 (12”x24”)</td>
                                <td valign="top" width="148">72</td>
                                <td valign="top" width="148">48</td>
                                <td valign="top" width="148">$86.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">Full (18”x24”)</td>
                                <td valign="top" width="148">96</td>
                                <td valign="top" width="148">72</td>
                                <td valign="top" width="148">$112.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr></hr>
                    <h3 className="flavorHeadings">Round Cakes</h3>
                    <table border="1" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td valign="top" width="148"><b>Size</b></td>
                                <td valign="top" width="148"><b>Servings    2&#215;2</b></td>
                                <td valign="top" width="148"><b>Servings 2&#215;3</b></td>
                                <td valign="top" width="148"><b>Classic Price</b></td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">6”</td>
                                <td valign="top" width="148">8</td>
                                <td valign="top" width="148">6</td>
                                <td valign="top" width="148">$23.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">7”</td>
                                <td valign="top" width="148">10</td>
                                <td valign="top" width="148">6</td>
                                <td valign="top" width="148">$26.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">8”</td>
                                <td valign="top" width="148">12</td>
                                <td valign="top" width="148">8</td>
                                <td valign="top" width="148">$29.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">9”</td>
                                <td valign="top" width="148">16</td>
                                <td valign="top" width="148">10</td>
                                <td valign="top" width="148">$38.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">10”</td>
                                <td valign="top" width="148">24</td>
                                <td valign="top" width="148">14</td>
                                <td valign="top" width="148">$45.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">12”</td>
                                <td valign="top" width="148">36</td>
                                <td valign="top" width="148">20</td>
                                <td valign="top" width="148">$60.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">14”</td>
                                <td valign="top" width="148">48</td>
                                <td valign="top" width="148">32</td>
                                <td valign="top" width="148">$72.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">16”</td>
                                <td valign="top" width="148">60</td>
                                <td valign="top" width="148">48</td>
                                <td valign="top" width="148">$96.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr></hr>
                    <h3 className="flavorHeadings">Square Cakes</h3>
                    <table border="1" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td valign="top" width="148"><b>Size</b></td>
                                <td valign="top" width="148"><b>Servings    2&#215;2</b></td>
                                <td valign="top" width="148"><b>Servings 2&#215;3</b></td>
                                <td valign="top" width="148"><b>Classic Price</b></td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">6”</td>
                                <td valign="top" width="148">9</td>
                                <td valign="top" width="148">6</td>
                                <td valign="top" width="148">$32.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">8”</td>
                                <td valign="top" width="148">16</td>
                                <td valign="top" width="148">9</td>
                                <td valign="top" width="148">$48.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">10’</td>
                                <td valign="top" width="148">25</td>
                                <td valign="top" width="148">15</td>
                                <td valign="top" width="148">$64.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">12”</td>
                                <td valign="top" width="148">36</td>
                                <td valign="top" width="148">24</td>
                                <td valign="top" width="148">$75.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><strong>***Prices does not include deluxe pricing and custom decoration.</strong></p>
                    <hr></hr>
                    <h3 className="flavorHeadings">Dessert Cakes</h3>
                    <table border="1" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td valign="top" width="148"><b>Size</b></td>
                                <td valign="top" width="148"><b>Servings</b></td>
                                <td valign="top" width="148"><b>Price</b></td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">7&#8243; rounds &amp; 1/8 sheet</td>
                                <td valign="top" width="148">3-12</td>
                                <td valign="top" width="148">$15-$38</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr></hr>
                    <h3 className="flavorHeadings">Cheesecake</h3>
                    <table border="1" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td valign="top" width="148"><b>Size</b></td>
                                <td valign="top" width="148"><b>Price</b></td>
                                <td valign="top" width="148"><b>Add Fresh Fruit</b></td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">6”</td>
                                <td valign="top" width="148">$15.00</td>
                                <td valign="top" width="148">$5.00</td>
                            </tr>
                            <tr>
                                <td valign="top" width="148">10”</td>
                                <td valign="top" width="148">$32.00</td>
                                <td valign="top" width="148">$10.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Flavors;