import { useState } from "react"
import Footer from "../components/Footer"
import ListaCategorias from "../components/ListaCategorias"
import ListaPeliculas from "../components/ListaPeliculas"
import { useEffect } from "react"

const MainPage = () => {
    const [listaPeliculas, setListaPeliculas] = useState([])

    const httpGetPeliculas = async () => {
        const resp = await fetch("http://localhost:3000/data/peliculas.json")
        const peliculas = await resp.json()
        setListaPeliculas(peliculas)
    }

    useEffect(() => {
        httpGetPeliculas()
    }, [])
    

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