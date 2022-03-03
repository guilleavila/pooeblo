import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage'
import VillageSignupPage from '../pages/VillageSignupPage/VillageSignupPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import VillagesResultsListPage from '../pages/VillagesResultsListPage/VillagesResultsListPage'
import VillageDetailsPage from '../pages/VillageDetailsPage/VillageDetailsPage'

import PruebaUser from '../pages/PruebaUser/PruebaUser'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/registro' element={<SignupPage />} />
            <Route path='/registro-pueblo' element={<VillageSignupPage />} />
            <Route path='/iniciar-sesion' element={<LoginPage />} />
            <Route path='/pueblos' element={<VillagesResultsListPage />} />
            <Route path="/pueblos/:pueblo_id" element={<VillageDetailsPage />} />
        </Routes>
    )
}

export default AppRoutes