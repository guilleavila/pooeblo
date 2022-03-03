import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PruebaUser from '../pages/PruebaUser/PruebaUser'
import VillagesListPage from '../pages/VillagesListPage/VillagesListPage'
import VillageSignupPage from '../pages/VillageSignupPage/VillageSignupPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/registro' element={<SignupPage />} />
            <Route path='/registro-pueblo' element={<VillageSignupPage />} />
            <Route path='/iniciar-sesion' element={<LoginPage />} />
            <Route path='/' element={<PruebaUser />} />

            <Route path='/pueblos' element={<VillagesListPage />} />
        </Routes>
    )
}

export default AppRoutes