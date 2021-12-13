import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SulotionApi from 'src/Apis/SulotionApi';

const SolutionDetail = () => {
    const { solutionId } = useParams();
    const [sulution, setSulution] = useState(null);

    // console.log(sulution)

    useEffect(() => {
        (async () => {
            try {
                const { data: resData } = await SulotionApi.get(solutionId);
                const { data, status } = resData;
                if (status) return setSulution(data)
            } catch (error) { }
        })()
    }, [])
    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            phần này là phàn chi tiết solution
        </div>
    )
}

export default SolutionDetail
