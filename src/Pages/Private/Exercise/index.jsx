import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ActionGetsChallengeCate } from 'src/Redux/Actions/ChallengeCate.action';
import Header from "./components/header";
import PublishItem from './components/publish-item';
import PublishNav from "./components/publish-nav";
import SkeletonGroup from './components/skeleton-group';

const Exercise = () => {
    const dispatch = useDispatch();
    const { challengeCates, pagination } = useSelector(state => state.ChallengeCate);

    useEffect(() => {
        dispatch(ActionGetsChallengeCate())
    }, [dispatch]);
    return (
        <div className="w-full">
            <Header />
            <PublishNav />
            {challengeCates ? challengeCates?.map((item, index) => <PublishItem key={index} index={index} data={item} />) : <SkeletonGroup />}
        </div>
    )
}

export default Exercise
