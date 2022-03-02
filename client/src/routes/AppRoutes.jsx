import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PruebaUser from '../pages/PruebaUser/PruebaUser'
import QuienPage from '../pages/QuienPage/QuienPage'
import VillagesListPage from '../pages/VillagesListPage/VillagesListPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/registro' element={<SignupPage />} />
            <Route path='/iniciar-sesion' element={<LoginPage />} />
            <Route path='/pruebauser' element={<PruebaUser />} />

            <Route path='/pueblos' element={<VillagesListPage />} />
        </Routes>
    )
}

export default AppRoutes