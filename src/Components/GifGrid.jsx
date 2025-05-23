import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({category}) => {


    const {images , isLoading} = useFetchGifs(category);

    console.log({isLoading});


    return (
        <>
            <h3> { category } </h3>

            {
                isLoading && <h2>Cargando...</h2>
            }
            
            <div className="card-grid">
                {images.map( (image) =>(
                    <GifCard  key={image.id} image={image}/>
                )
                )}

            </div>
        </>
    )
}
