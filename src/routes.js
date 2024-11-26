import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegistroPage from './pages/RegistroPage';

const router = createBrowserRouter([
    { path : "/2024-2-peliculas-frontend", element : <LoginPage /> },
    { path : "/2024-2-peliculas-frontend/main", element : <MainPage /> },
    { path : "/2024-2-peliculas-frontend/registrar", element : <RegistroPage /> }
])

export default router