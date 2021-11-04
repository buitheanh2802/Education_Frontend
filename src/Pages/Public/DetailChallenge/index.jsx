import React from 'react'
import { useParams } from 'react-router'

const DetailChallenge = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            Detail
        </div>
    )
}

export default DetailChallenge
