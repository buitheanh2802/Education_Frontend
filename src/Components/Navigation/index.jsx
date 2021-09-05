import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Navigation = ({ path, button }) => {
    const history = useHistory()
    return (
        <div className="container mx-auto flex justify-between shadow-sm bg-white px-[5px] rounded ">
            <div className="py-[15px]">
                {path.map((item, index) => <NavLink key={index} to={item.path} exact activeClassName="after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black" className="relative inline-block text-[15px] px-[5px] text-gray-600 hover:text-blue-600 mr-[20px]">{item.value}</NavLink>)}
            </div>
            <div className="self-center">
                <button onClick={() => { history.push(button.path) }} className="flex my-auto hover:bg-[#0d61c7] bg-[#1273eb] text-white rounded px-[10px] gap-[5px] py-[5px] text-[14px] ">
                    <div className="self-center"><button.icon className="w-[15px] fill-current" /> </div>
                    <span>{button.value}</span>
                </button>
            </div>
        </div>
    )
}

export default Navigation
