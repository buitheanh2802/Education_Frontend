import React from 'react'
import { Icon } from 'src/Components/Icon'

const Oauthentication = () => {
    const api = process.env.REACT_APP_URL_API;
    const login = {
        Facebook: () => window.location.href = `${api}/auth/facebook`,
        Google: () => window.location.href = `${api}/auth/google`,
        Github: () => window.location.href = `${api}/auth/github`
    }

    return (
        <div className="flex my-[20px] gap-[15px] items-center">
            <p className="text-gray-500">Đăng nhập với</p>

            <button type="button" onClick={login.Google} className="bg-gray-100 border hover:bg-gray-200 duration-300 rounded-full h-[40px] w-[40px]">
                <Icon.Google className="w-[20px] mx-auto" />
            </button>
            <button type="button" onClick={login.Facebook} className="bg-gray-100 border hover:bg-gray-200 duration-300 rounded-full h-[40px] w-[40px]">
                <Icon.Facebook className="w-[20px] mx-auto" />
            </button>
            <button type="button" onClick={login.Github} className="bg-gray-100 border hover:bg-gray-200 duration-300 rounded-full h-[40px] w-[40px]">
                <Icon.Github className="w-[20px] mx-auto" />
            </button>
        </div>
    )
}

export default Oauthentication
