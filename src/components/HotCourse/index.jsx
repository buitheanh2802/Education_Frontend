import React from 'react'
import Course from '../Course'

const HotCourse = () => {
    return (
        <div className="mx-[15px] mt-[60px]">
            <div className="container mx-auto grid grid-cols-3 gap-[30px]">
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
        </div>
    )
}

export default HotCourse
