import React from 'react'
import { Switch } from 'react-router'
import Dashboard from 'src/Pages/Private/Dashboard'
import PrivateRouter from 'src/Routes/PrivateRouter'
import { path } from '../Constants'

const AdminLayout = () => {
    return (
        <Switch>
            <PrivateRouter exact path={path.ADMIN} component={Dashboard}/>
        </Switch>
    )
}

export default AdminLayout
