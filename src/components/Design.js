import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg'; //default random image renderring in case of errors while loading
import PropTypes from 'prop-types';


export default function Design({design}) {
    const{name,slug,images,price} = design;
    return (
        <article className="design">
        <div className="img-container">
        <img src={images[0] || defaultImg} alt="single design"/>
        <div className="price-top">
            <h6>Ksh{price}</h6>
            <p>per similar design</p>
        </div>
        <Link to={`/designs/${slug}`}
            className="btn-primary design-link">
                Features
        </Link>
        
        </div>
        <p className="design-info">{name}</p>
        </article>
    );
}

Design.propTypes = {
   design:PropTypes.shape({
       name:PropTypes.string.isRequired,
       slug:PropTypes.string.isRequired,
       images:PropTypes.arrayOf(PropTypes.string).isRequired,
       price:PropTypes.number.isRequired,
   })
};