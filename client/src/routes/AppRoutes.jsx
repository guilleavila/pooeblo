import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import VillagesListPage from '../pages/VillagesListPage/VillagesListPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/registro' element={<SignupPage />} />
            <Route path='/iniciar-sesion' element={<LoginPage />} />
            <Route path='/pueblos' element={<VillagesListPage />} />
        </Routes>
    )
}

export default AppRoutes