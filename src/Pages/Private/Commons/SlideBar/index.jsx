import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'
import { path } from 'src/Constants/'

const SlideBar = () => {
    return (
        <div className="w-full">
            <h1 className="h-[60px] flex items-center px-[20px]">
                <Link className="flex items-center" to={path.ADMIN}>
                    <Icon.Logo className="sm:w-[40px] w-[30px]" />
                    <span className="sm:text-[23px] text-[20px] font-bold ml-[5px]">DevStar</span>
                </Link>
            </h1>
            <nav className="mt-[20px]">
                <ul>
                    <li>
                        <NavLink to={path.ADMIN}>Dashboard </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SlideBar
