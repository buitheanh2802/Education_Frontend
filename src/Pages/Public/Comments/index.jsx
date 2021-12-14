import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContentComment from './Components/ContentComment'
import InsertComment from './Components/InsertComment'
import { ActionGetsComment } from 'src/Redux/Actions/Comments.action'

const Comments = ({ shortId, userId }) => {
    const dispatch = useDispatch();
    const Comments = useSelector(state => state.Comments);
    useEffect(() => dispatch(ActionGetsComment(shortId)), [dispatch, shortId])

    return (
        <div className="comments w-full bg-white rounded p-2 border border-gray-100">
            <h3 className="font-medium text-lg my-3">Tổng số thảo luận <span className="font-normal text-base">({Comments?.pagination?.countDocuments})</span></h3>
            {shortId && <>
                <InsertComment userId={userId} shortId={shortId} />
                <ContentComment userId={userId} Comments={Comments} shortId={shortId} />
            </>
            }
        </div>
    )
}

export default Comments
