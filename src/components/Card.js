import React from 'react'
import './Card.css'

export const Card = ({src,title,price,city}) => {
    return <>
        <div className="card">
            <img src={src} alt="Rental Building" style={{"width":"100%"}} />
            <h1>{title}</h1>
            <p className="price">₹{price}</p>
            <h4>Location: {city}</h4>
            <p>Some text about the Building. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <p><button>Add to Cart</button></p>
        </div>
    </>
}
