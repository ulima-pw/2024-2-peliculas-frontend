import { useState } from "react"
import Footer from "../components/Footer"
import ListaCategorias from "../components/ListaCategorias"
import ListaPeliculas from "../components/ListaPeliculas"
import { useEffect } from "react"
import RegistroPeliculaModal from "../components/RegistroPeliculaModal"

const MainPage = () => {
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [listaCategorias, setListaCategorias] = useState([])
    const [categoriaIdSeleccionada, setCategoriaIdSeleccionada] = useState(0)
    const [modalShown, setModalShown] = useState(false)

    const httpGetPeliculas = async (categoriaId) => {
        const url = categoriaId === 0 
            ? "http://localhost:3000/peliculas" 
            : `http://localhost:3000/peliculas?categoria=${categoriaId}`
        const resp = await fetch(url)
        const peliculas = await resp.json()
        setListaPeliculas(peliculas)
    }

    const httpGetCategorias = async () => {
        const url = "http://localhost:3000/categorias"
        const resp = await fetch(url)
        const categorias = await resp.json()
        setListaCategorias(categorias)
    }

    useEffect(() => {
        httpGetCategorias()
        httpGetPeliculas(0)
    }, [])
    
    const seleccionarCategoriaHandler = (id) => {
        setCategoriaIdSeleccionada(id)
        httpGetPeliculas(id)
    }

    return <div className="container">
        <div className="row mb-4">
            <div className="col-md-4">
                <h1>PW Cinema</h1>
                { /* Lista de Categorias */ }
                <ListaCategorias 
                    categoriaIdSeleccionada={ categoriaIdSeleccionada }
                    onSeleccionarCategoria={ seleccionarCategoriaHandler }
                    categorias={ listaCategorias }/>
                <button type="button"
                    className="btn btn-primary mt-4"
                    onClick={ () => {
                        setModalShown(true)
                    }}>
                    Agregar
                </button>
            </div>
            <div className="col-md-8 pt-4">
                <ListaPeliculas
                    categoriaIdSeleccionada={ categoriaIdSeleccionada } 
                    peliculas={ listaPeliculas }/>
            </div>
        </div>
        <RegistroPeliculaModal 
            show={ modalShown }
            categorias={ listaCategorias }
            onClose={ () => {
                setModalShown(false)
            } }/>
        <Footer />
    </div>
}

export default MainPage