import React, { Component, useContext } from 'react'
import { Box } from '@chakra-ui/react'
import AppContext from './store/AppContext'
import { Redirect, Route, RouteProps } from 'react-router-dom'

const A = () => {

    return (
        <div>
            wtf
        </div>
    )
}

function PrivateRoute({ component, path, children, exact }: { exact?: boolean, component?: React.FC, path: string, children: React.ReactNode }) {

    const globalState = useContext(AppContext)

    return (
        <div>
            {globalState.authenticated ?
                <Route path={path} exact>
                    {children}
                </Route>
                :
                <Redirect to="/" />
            }
        </div>
    )
}

export default PrivateRoute