import React from 'react'
import ChartPost from './Components/ChartPost'
import ChartQuestion from './Components/ChartQuestion'

const ChartManager = () => {
    return (
        <div className="w-full grid grid-cols-2 gap-5 2xl:gap-10">
            <ChartPost />
            <ChartQuestion />
        </div>
    )
}

export default ChartManager
