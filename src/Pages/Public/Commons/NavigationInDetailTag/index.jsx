import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const NavigationInDetailTag = ({ path }) => {
    return (
        <div className="md:flex md:justify-between sm:grid sm:grid-cols-1 shadow-sm bg-white px-[5px] rounded ">
            <div className=" py-[15px] flex items-center">
                {path?.map((item, index) => <NavLink key={index} to={item?.path} exact
                    activeClassName="after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black"
                    className="relative text-[15px] px-[5px] text-gray-600 hover:text-blue-600 mr-[20px]">{item?.value}</NavLink>)}
            </div>
            <div className="self-center">
                <select name="" className="border border-[#707885] rounded px-[10px] py-[5px]">
                    <option value="">Tất cả</option>
                    <option value="">Xem nhiều nhất</option>
                    <option value="">Mới nhất</option>
                </select>
            </div>
        </div>
    )
}
export default NavigationInDetailTag
