import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SulotionApi from 'src/Apis/SulotionApi';
import Comments from '../Comments';

const SolutionDetail = () => {
    const { solutionId } = useParams();
    const [sulution, setSulution] = useState(null);

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
            <Comments userId={sulution?.createBy?._id} shortId={sulution?._id} />
        </div>
    )
}

export default SolutionDetail
