import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const { id } = useParams();

    // Mock data or fetch based on ID
    const data = {
        1: {
            title: "Bell",
            img: "https://plus.unsplash.com/premium_photo-1731690343060-65cdbebe4a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
            text: "The bells look so beautiful.",
        },
        2: {
            title: "Santa",
            img: "https://images.unsplash.com/photo-1732613942657-61684c51eb55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
            text: "The Santa looks so beautiful.",
        },
    };

    const card = data[id];

    if (!card) {
        return <h2>Card not found</h2>;
    }

    return (
        <div>
            <h1>{card.title}</h1>
            <img src={card.img} alt={card.title} style={{ width: '300px', borderRadius: '10px' }} />
            <p>{card.text}</p>
        </div>
    );
};

export default CardDetails;
