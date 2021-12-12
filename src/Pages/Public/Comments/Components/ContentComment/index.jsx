import React from 'react'
import { useDispatch } from 'react-redux'
import { Icon } from 'src/Components/Icon';
import FiledContent from '../FiledContent';

const ContentComment = ({ Comments, shortId }) => {
    const dispatch = useDispatch();
    const { models, actionLoading, isLoading, pagination } = Comments;

    return (
        <div className="w-full">
            {models?.map((data, index) => <FiledContent key={index} shortId={shortId} data={data} />)}
            {models?.length === 0 && <div className="w-full text-gray-400 flex items-center justify-center py-[30px] gap-5">
                <Icon.Comment className="fill-current w-[30px] text-gray-300" />
                <p className="font-light text-base">Hãy là người đầu tiên để lại ý kiến tại đây</p>
            </div>}
        </div>
    )
}

export default ContentComment
