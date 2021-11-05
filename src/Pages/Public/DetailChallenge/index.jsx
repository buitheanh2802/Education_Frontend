import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { path } from 'src/Constants/';
import { ActionGetChallenge } from 'src/Redux/Actions/Challenge.action';
import Navigation from '../Commons/Navigation';

const DetailChallenge = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [challenge, setChallenge] = useState(null);
    const { id } = useParams();

    const pathName = [
        { path: `${path.CHALLENGE}/detail/${id}`, value: "Chi tiết bài tập" },
        { path: `${path.CHALLENGE}/detail/${id}`, value: "Giải pháp" }
    ]

    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(ActionGetChallenge(id));
            const { data, message, status } = payload;
            setIsLoading(false);
            if (status) return setChallenge(data)

            console.log(message)
        })()
    }, [dispatch, id])

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            <Navigation path={pathName} />
            {/* {isLoading ? <Loading className="w-[40px] h-[40px] fill-current text-gray-500 mx-auto mt-[20px]" /> :
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[20px]">
                    chi tiết
                </div>} */}
        </div>
    )
}

export default DetailChallenge
