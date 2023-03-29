import { useState } from "react";

function Home () {
    let [saludo,setsaludo] = useState('Hola');
    const handlesaludo = function () {
        setsaludo('chao');
    };
    return (
        <>
        HOME
        {saludo}
        <button onClick={handlesaludo} > s </button>
        </>
    )
};

export {Home};