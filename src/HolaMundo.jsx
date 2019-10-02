import React from 'react';

const HolaMundo = () => {
        const hello = 'Hola Mundo!';
        const isTrue = true;
        return (
             <div className="HolaMundo">
                     <h1>{hello}</h1>
                     <h2> Curso escencial de react</h2>
                     <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
                     {isTrue ? <h4>Esto es de a devis</h4>: <h5>jumm, no lo se ricky parece falso.</h5>}
                     {isTrue && <h4>Soy verdadero maifren.</h4>}
             </div>   
        )
}

export default HolaMundo;