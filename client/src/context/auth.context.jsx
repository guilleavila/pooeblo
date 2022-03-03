import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import authService from '../services/auth.service';

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [session, setSession] = useState(null)

    const storeToken = (token) => {
        localStorage.setItem('authToken', token)
    }

    const removeToken = () => {
        localStorage.removeItem('authToken')
    }

    const getToken = () => {
        return localStorage.getItem('authToken')
    }

    const authenticateUser = () => {
        const storedToken = getToken()

        if (!storedToken) {
            logOutUser()
        } else {
            authService
                .verify(storedToken)
                .then(({ data }) => {
                    const session = data
                    setIsLoggedIn(true)
                    setIsLoading(false)
                    setSession(session)
                })
                .catch(() => logOutUser())
        }
    }

    const logOutUser = () => {
        removeToken()
        setIsLoggedIn(false)
        setIsLoading(false)
        setSession(null)
    }

    useEffect(() => authenticateUser(), [])


    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, session, storeToken, authenticateUser, logOutUser }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProviderWrapper }