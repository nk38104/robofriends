import React from 'react';
import { prominent } from 'color.js';
import styles from './Card.module.css';


const changeColor = (event, uri) => {
    prominent(uri, { format: "hex", amount: 2 }).then(color => {
        event.target.style.color = color[1];
    })
}

const resetButtonColor = (event) => {
    event.target.style.color = "white";
}

const Card = ({ id, name, email }) => {
    const imageUri = `https://robohash.org/${id}?200x200`;

    return (
        <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img alt="profile_picture" src={imageUri}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            <button className={styles.cardButton} onMouseOver={(event) => changeColor(event, imageUri)} onMouseLeave={resetButtonColor}>ADD TO FRIENDS</button>
        </div>
    );
 }

export default Card;
