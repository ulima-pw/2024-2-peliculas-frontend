import Footer from "../components/Footer"
import ListaCategorias from "../components/ListaCategorias"
import ListaPeliculas from "../components/ListaPeliculas"

const MainPage = () => {
    const listaPeliculas = [
        {
            id : 1,
            nombre: "Joker 2",
            url : "https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*"
        },
        {
            id : 2,
            nombre: "Robot Salvaje",
            url : "https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*"
        },
        {
            id : 3,
            nombre: "Alien Romulus",
            url : "https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*"
        },
        {
            id : 4,
            nombre: "Beetlejuice 2",
            url : "https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*"
        },
        {
            id : 5,
            nombre: "El guardian de la magia",
            url : "https://hips.hearstapps.com/hmg-prod/images/poster-joker-2-folie-a-deux-joaquin-phoenix-lady-gaga-66d8805e725c1.jpg?resize=980:*"
        }
    ]

    return <div className="container">
        <div className="row mb-4">
            <div className="col-md-4">
                <h1>PW Cinema</h1>
                { /* Lista de Categorias */ }
                <ListaCategorias />
            </div>
            <div className="col-md-8 pt-4">
                <ListaPeliculas peliculas={ listaPeliculas }/>
            </div>
        </div>
        <Footer />
    </div>
}

export default MainPage