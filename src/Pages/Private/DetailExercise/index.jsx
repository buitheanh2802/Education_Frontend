import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ChallengeApi from 'src/Apis/ChallengeApi';
import ChallengeCateApi from 'src/Apis/ChallengeCateApi';
import Panigation from '../Commons/Panigation';
import Header from './Components/Header'
import PublishItem from './Components/publish-item';
import PublishNav from './Components/publish-nav';
import SkeletonGroup from './Components/skeleton-group';

const DetailExercise = () => {
    const { id } = useParams();
    const [challengeCate, setChallengeCate] = useState(null);
    const [challenge, setChallenge] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isReload, setIsReload] = useState(false)

    const handelPagination = ({ selected }) => {
        setIsLoading(true)
        const currentPage = selected + 1;
        setPagination({ ...pagination, currentPage })
        setIsReload(!isReload)
    }

    useEffect(() => {
        (async () => {
            try {
                // call category
                const { data: dataCate, status: statusCate } = await ChallengeCateApi.get(id);
                if (statusCate) setChallengeCate(dataCate.data)

                // call challenge
                const { data: dataChall, status: statusChall } = await ChallengeApi.gets(id, pagination);
                if (statusChall) {
                    setChallenge(dataChall?.data?.models)
                    setPagination(dataChall?.data?.metaData?.pagination)
                }
                setIsLoading(false)
            } catch (error) { setIsLoading(false) }
        })();

    }, [isReload]);

    return (
        <div className="w-full">
            <Header name={challengeCate?.title} />
            <PublishNav />
            {isLoading ? <SkeletonGroup /> : challenge?.map((item, index) => <PublishItem isReload={isReload} setIsReload={setIsReload} key={index} index={index} data={item} />)}
            {challenge?.length === 0 && <div className="text-center py-[20vh] select-none"> <p className="font-light text-gray-400">Hãy thêm bài tập đầu tiên</p> </div>}
            {pagination?.totalPage > 1 && <Panigation onChange={handelPagination} pageCount={pagination?.totalPage} currentPage={pagination?.currentPage - 1} />}
        </div>
    )
}

export default DetailExercise
