import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {

    // Hook para mantener el estado 
    const [categories , setCategories] = useState(['Valorant']);

    const onAddCategory = ( onNewCategory ) => {

        if(categories.includes(onNewCategory)){
            alert('La categoria ya existe');
            return;
        }; // Verifica si la categoria ya existe
        
        setCategories( [onNewCategory , ...categories ])
    }

    

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory = { onAddCategory }/>

            {
            categories.map( category => (
                <GifGrid key={category} category={category} />
            ))
            }
        </> 
    );
}
