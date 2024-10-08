import PeliculaCard from "./PeliculaCard"

const ListaPeliculas = (props) => {
    return <div className="row">
        {
            props.peliculas.map( (pelicula) => {
                return <PeliculaCard pelicula={ pelicula }/>
            })
        }
    </div>
}

export default ListaPeliculas