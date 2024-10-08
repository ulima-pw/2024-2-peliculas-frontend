const PeliculaCard = () => {
    return <div className="col-sm-6 mb-2">
        <div className="card" style={ { width : "18rem" } }>
            <img src="https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Titulo Pelicula</h5>
            </div>
        </div>
    </div>
}

export default PeliculaCard