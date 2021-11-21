import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from 'src/Pages/Private/Dashboard'
import SlideBar from 'src/Pages/Private/Commons/SlideBar'
import Header from 'src/Pages/Private/Commons/Header'
import PrivateRouter from 'src/Routes/PrivateRouter'
import { path } from '../Constants'
import Exercise from 'src/Pages/Private/Exercise'

const AdminLayout = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <SlideBar />
                <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <Header />
                    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                        <div className="flex flex-col flex-wrap sm:flex-row ">
                            <Switch>
                                <PrivateRouter exact path={path.ADMIN} component={Dashboard} />
                                <PrivateRouter path="/admin/exercise" component={Exercise} />
                            </Switch>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminLayout
