import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // Se usa el evento onChange para detectar cuando el usuario escribe en el input
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newInputValue = inputValue.trim(); // Se gurada el valor del input en una variable
        if(newInputValue.length <= 1) return; // Verifica si el input tiene un valor

        // Se llama a la funcion onNewCategory que se pasa como prop y manda el valor del input
        onNewCategory(newInputValue)
        setInputValue(''); // Limpiar el input
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar Gif" value={inputValue} onChange={onInputChange}/>
        </form>
    )
}
