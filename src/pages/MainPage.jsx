import { useState } from "react"
import Footer from "../components/Footer"
import ListaCategorias from "../components/ListaCategorias"
import ListaPeliculas from "../components/ListaPeliculas"
import { useEffect } from "react"

const MainPage = () => {
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [categoriaIdSeleccionada, setCategoriaIdSeleccionada] = useState(0)

    const httpGetPeliculas = async () => {
        const resp = await fetch("http://localhost:3000/data/peliculas.json")
        const peliculas = await resp.json()
        setListaPeliculas(peliculas)
    }

    useEffect(() => {
        httpGetPeliculas()
    }, [])
    
    const seleccionarCategoriaHandler = (id) => {
        setCategoriaIdSeleccionada(id)
    }

    return <div className="container">
        <div className="row mb-4">
            <div className="col-md-4">
                <h1>PW Cinema</h1>
                { /* Lista de Categorias */ }
                <ListaCategorias 
                    categoriaIdSeleccionada={ categoriaIdSeleccionada }
                    onSeleccionarCategoria={ seleccionarCategoriaHandler }/>
            </div>
            <div className="col-md-8 pt-4">
                <ListaPeliculas
                    categoriaIdSeleccionada={ categoriaIdSeleccionada } 
                    peliculas={ listaPeliculas }/>
            </div>
        </div>
        <Footer />
    </div>
}

export default MainPage