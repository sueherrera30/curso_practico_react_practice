import React from 'react';
// vamos a pasar los propiedades en el parametro, 
// en este caso las esta recibiendo.
const ButtonStateless = props  => {
        const { name } = props;
// aqui se pondrá todo lo que se manejará con jsx.
return(
        <div>
                <button type="button">{props.text}</button>
                <button type="button">{name}</button>
        </div>
) 
}

// para poder verlo en navegador, debemos incertar en index.js

export default ButtonStateless;