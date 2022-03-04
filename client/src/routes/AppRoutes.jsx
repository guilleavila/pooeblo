import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import VillageSignupPage from '../pages/VillageSignupPage/VillageSignupPage'
import UserSignupPage from '../pages/UserSignupPage/UserSignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import VillagesResultsListPage from '../pages/VillagesResultsListPage/VillagesResultsListPage'
import VillageDetailsPage from '../pages/VillageDetailsPage/VillageDetailsPage'
import NewHousePage from '../pages/NewHousePage/NewHousePage'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage'


const AppRoutes = () => {

    return (
        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route path='/registro' element={<UserSignupPage />} />
            <Route path='/registro-pueblo' element={<VillageSignupPage />} />
            <Route path='/iniciar-sesion' element={<LoginPage />} />
            <Route path='/pueblos/resultados/:province' element={<VillagesResultsListPage />} />
            <Route path="/pueblos/:pueblo_id" element={<VillageDetailsPage />} />
            <Route path="/perfil" element={<UserProfilePage />} />
            <Route path='/nueva-casa' element={<NewHousePage />} />

        </Routes>
    )
}

export default AppRoutes