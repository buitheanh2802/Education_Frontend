import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Icon } from 'src/Components/Icon';
import { ActionFindComments } from 'src/Redux/Actions/Comments.action'
import Panigation from '../Commons/Panigation';
import Header from './components/header'
import PublishItem from './components/publish-item';
import PublishNav from './components/publish-nav'

const CommentManager = () => {
    const dispath = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [models, setModels] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [reLoad, setReLoad] = useState(false)
    const [checked, setChecked] = useState(false);

    const handelPagination = async ({ selected }) => {
        setPagination({ ...pagination, currentPage: selected + 1 })
        setReLoad(!reLoad);
    }

    useEffect(() => {
        (async () => {
            const { payload } = await dispath(ActionFindComments(pagination?.currentPage))
            const { status, data } = payload;
            setIsLoading(false);
            if (status) {
                setPagination(data.metaData.pagination)
                setModels(data.models)
            }
        })()
    }, [reLoad])

    return (
        <div className="w-full">
            <Header />
            <PublishNav setChecked={setChecked} />
            {/* {isLoading} */}
            {models?.map((item, index) => <PublishItem reLoad={reLoad} setReLoad={setReLoad} checked={checked} key={index} data={item} />)}

            {pagination?.totalPage > 1 && <Panigation onChange={handelPagination} pageCount={pagination?.totalPage} currentPage={pagination?.currentPage - 1} />}
        </div>
    )
}

export default CommentManager
