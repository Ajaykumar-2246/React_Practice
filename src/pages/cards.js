import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            img: "https://plus.unsplash.com/premium_photo-1731690343060-65cdbebe4a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
            title: "Bell",
            text: "The bells look so beautiful",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1732613942657-61684c51eb55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
            title: "Santa",
            text: "The Santa looks so beautiful",
        },
    ];

    const handleCardClick = (id) => {
        navigate(`/card/${id}`);
    };

    return (
        <div className="card-container" style={{ display: 'flex', gap: '1rem' }}>
            {data.map((item) => (
                <div
                    onClick={() => handleCardClick(item.id)}
                    className="card"
                    key={item.id}
                    style={{ width: '14rem', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}
                >
                    <img
                        className="card-img"
                        src={item.img}
                        alt={item.title}
                        style={{ width: '100%', borderRadius: '5px' }}
                    />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;
