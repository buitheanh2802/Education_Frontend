import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ActionGetsChallengeCate } from 'src/Redux/Actions/ChallengeCate.action';
import Panigation from '../Commons/Panigation';
import Header from "./components/header";
import PublishItem from './components/publish-item';
import PublishNav from "./components/publish-nav";
import SkeletonGroup from './components/skeleton-group';

const Exercise = () => {
    const dispatch = useDispatch();
    const { challengeCates, pagination, isLoading } = useSelector(state => state.ChallengeCate);
    const [isReload, setIsReload] = useState(false)

    useEffect(() => {
        dispatch(ActionGetsChallengeCate(pagination?.currentPage))
    }, [dispatch, isReload]);

    const handelPagination = async ({ selected }) => {
        dispatch(ActionGetsChallengeCate(selected + 1))
    }

    return (
        <div className="w-full">
            <Header />
            <PublishNav />
            {isLoading ? <SkeletonGroup /> : challengeCates?.map((item, index) => <PublishItem isReload={isReload} setIsReload={setIsReload} key={index} index={index} data={item} />)}
            <Panigation onChange={handelPagination} pageCount={pagination?.totalPage} currentPage={pagination?.currentPage - 1} />
        </div>
    )
}

export default Exercise
