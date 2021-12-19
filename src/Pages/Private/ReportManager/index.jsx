import React, { useEffect, useState } from 'react'
import SpamApi from 'src/Apis/SpamApi';
import Header from './components/header'
import PublishItem from './components/publish-item';
import PublishNav from './components/publish-nav'
import SkeletonGroup from './components/skeleton-group';

const ReportManager = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [models, setModels] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [reLoad, setReLoad] = useState(false)
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await SpamApi.listSpam()
                setModels(data?.data?.models);
                setPagination(data?.metaData?.pagination);
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        })()
    }, [reLoad])

    return (
        <div className="w-full">
            <Header />
            <PublishNav setChecked={setChecked} />

            {isLoading ? <SkeletonGroup /> : models?.map((item, index) => <PublishItem reLoad={reLoad} setReLoad={setReLoad} checked={checked} key={index} data={item} />)}
        </div>
    )
}

export default ReportManager
