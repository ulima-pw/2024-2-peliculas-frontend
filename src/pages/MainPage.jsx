import Footer from "../components/Footer"
import ListaCategorias from "../components/ListaCategorias"
import ListaPeliculas from "../components/ListaPeliculas"

const MainPage = () => {
    return <div className="container">
        <div className="row mb-4">
            <div className="col-md-4">
                <h1>PW Cinema</h1>
                { /* Lista de Categorias */ }
                <ListaCategorias />
            </div>
            <div className="col-md-8 pt-4">
                <ListaPeliculas />
            </div>
        </div>
        <Footer />
    </div>
}

export default MainPage