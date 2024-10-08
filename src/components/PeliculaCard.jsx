const PeliculaCard = (props) => {
    return <div className="col-sm-6 mb-2">
        <div className="card" style={ { width : "18rem" } }>
            <img src={ props.pelicula.url } className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{ props.pelicula.nombre }</h5>
            </div>
        </div>
    </div>
}

export default PeliculaCard