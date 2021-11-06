import React from 'react'
import { Switch } from 'react-router'
import Dashboard from 'src/Pages/Private/Dashboard'
import SlideBar from 'src/Pages/Private/Commons/SlideBar'
import Header from 'src/Pages/Private/Commons/Header'
import PrivateRouter from 'src/Routes/PrivateRouter'
import { path } from '../Constants'

const AdminLayout = () => {
    return (
        <>
            <div className="h-screen fixed top-0 left-0 bottom-0 w-[300px] bg-gray-200">
                <SlideBar />
            </div>
            <div className="ml-[300px]">
                <Header />
                <Switch>
                    <PrivateRouter exact path={path.ADMIN} component={Dashboard} />
                </Switch>
            </div>
        </>
    )
}

export default AdminLayout
