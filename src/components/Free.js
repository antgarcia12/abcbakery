import React from 'react';

import Gluten from './media/images/glutenFree.jpg';
import Sugar from './media/images/sugarFree.jpg';
import './Free.css';


class Free extends React.Component {
    render() {
        return (
            <div className="freeComponent">
                <h5>Gluten Free Cakes, Cupcakes & Cookies</h5>
                <div className="sugarCard">
                    <p className="fDescription">ABC is always happy to help those with any kind of dietary needs, whether it be voluntary or not, we do offer gluten free and sugar free options. If you prefer chocolate or vanilla, we can make them work for you. Gluten free options are cupcakes and cakes, while the sugar free options are all three: cupcakes, cakes, cookes. Let us know what YOU need!</p>
                </div>
            </div>

        )
    }
}

export default Free;