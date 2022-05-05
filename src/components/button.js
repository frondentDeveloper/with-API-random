import React from 'react';

const Button = ({isActive, clicked}) => {
    return (
        <div>
            <button onClick={clicked}>{isActive ? "Boshqa foydalanuvchini olish" : "Foydalanuvchi tanlash"}</button>
        </div>
    );
}

export default Button;