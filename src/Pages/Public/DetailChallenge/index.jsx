import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { path } from 'src/Constants/';
import { ActionGetChallenge } from 'src/Redux/Actions/Challenge.action';
import Navigation from '../Commons/Navigation';
import Skeleton from 'react-loading-skeleton'
import { Icon } from 'src/Components/Icon';
import { OpenWindownTab } from 'src/Helpers/';

const DetailChallenge = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const { profile } = useSelector(state => state.Auth);
    const [challenge, setChallenge] = useState(null);
    const [isDownLoad, setIsDownLoad] = useState(null);
    const { id } = useParams();

    const pathName = [
        { path: `${path.CHALLENGE}/detail/${id}`, value: "Chi tiết bài tập" },
        { path: `${path.CHALLENGE_SOLUTION}/${id}`, value: "Giải pháp" }
    ]

    const button = isDownLoad ? {
        icon: Icon.questions,
        value: "Nộp bài", path: "/"
    } : {
        icon: Icon.LogOut,
        value: "Tải bài tập",
        event: () => OpenWindownTab(challenge?.resourceUrl)
    }

    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(ActionGetChallenge(id));
            const { data, status } = payload;
            if (status) return (() => {
                setChallenge(data)
                setIsDownLoad(data?.submitedBy?.includes(profile?._id));
                setIsLoading(true);
            })();
            history.push(path.NOT_FOUND)
        })()
    }, [dispatch, id, profile?._id])

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            {isLoading ? <Navigation path={pathName} button={(profile) ? button : null} /> : <Skeleton className="h-full py-[15px] border" />}
        </div>
    )
}

export default DetailChallenge
