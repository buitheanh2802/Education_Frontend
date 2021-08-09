import React from 'react'
import prev_icon from '../../assets/media/icons/prev.svg'
import next_icon from '../../assets/media/icons/next.svg'

const Pagings = () => {
    return (
        <div className=" mt-[35px] flex items-center">
            <div className="m-auto flex items-center pagings">
                <span className="text-3xl text-gray-500 btn_slick active"><img src={prev_icon} alt="" /></span>
                <span className="text-[16px] mx-[28px]">Trang 1</span>
                <span className="text-3xl text-gray-500 btn_slick "><img src={next_icon} alt="" /></span>
            </div>
        </div>
    )
}

export default Pagings
