import PeliculaCard from "./PeliculaCard"

const ListaPeliculas = (props) => {
    let peliculasFiltradas = props.peliculas
    if (props.categoriaIdSeleccionada !== 0) {
        peliculasFiltradas = props.peliculas.filter((pelicula) => {
            return pelicula.categoria === props.categoriaIdSeleccionada
        })
    }
    
    return <div className="row">
        {
            peliculasFiltradas.map( (pelicula) => {
                return <PeliculaCard pelicula={ pelicula }/>
            })
        }
    </div>
}

export default ListaPeliculas