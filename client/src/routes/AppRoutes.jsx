import { Routes, Route } from 'react-router-dom'
import UserSignupPage from '../pages/UserSignupPage/UserSignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PruebaUser from '../pages/PruebaUser/PruebaUser'
import VillagesListPage from '../pages/VillagesListPage/VillagesListPage'
import VillageSignupPage from '../pages/VillageSignupPage/VillageSignupPage'
import NewHousePage from '../pages/NewHousePage/NewHousePage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/registro' element={<UserSignupPage />} />
            <Route path='/registro-pueblo' element={<VillageSignupPage />} />
            <Route path='/iniciar-sesion' element={<LoginPage />} />
            <Route path='/' element={<PruebaUser />} />
            <Route path='/nueva-casa' element={<NewHousePage />} />

            <Route path='/pueblos' element={<VillagesListPage />} />
        </Routes>
    )
}

export default AppRoutes