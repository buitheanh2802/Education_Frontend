import React from 'react'
import { Switch } from 'react-router'
import Dashboard from 'src/Pages/Private/Dashboard'
import SlideBar from 'src/Pages/Private/Commons/SlideBar'
import Header from 'src/Pages/Private/Commons/Header'
import PrivateRouter from 'src/Routes/PrivateRouter'
import { path } from '../Constants'

const AdminLayout = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <SlideBar />
                <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <Header />
                </div>

            </div>
        </div>
    )
}

export default AdminLayout
