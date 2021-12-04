import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from 'src/Components/Loading';
import { timeFormatter } from 'src/Helpers/Timer';
import { useSelector } from 'react-redux';
import PostAPI from '../../../../Apis/PostApi';

const PublishItem = (props) => {
    // _props
    const { title, content, index, createBy, createAt, shortId,publishedBy } = props;
    // selector 
    const { profile } = useSelector(state => state.Auth)
    // state 
    const [loading, setLoading] = useState({
        error: false,
        success: false
    });
    const [published, setPublished] = useState(publishedBy);

    const onPublish = async (boolean) => {
        console.log(profile);
        try {
            if (boolean) setLoading({ ...loading, success: true });
            else setLoading({ ...loading, error: true });
            const request = {
                shortId: shortId,
                data: {
                    isConfirm: boolean
                }
            }
            const response = await PostAPI.publish(request);
            setPublished({
                ...publishedBy,
                user: {
                    fullname: profile.fullname,
                    username: profile.username
                },
                isConfirm: boolean
            })
        } catch (error) {
            console.log(error);
        }
        if (boolean) setLoading({ ...loading, success: true });
        else setLoading({ ...loading, error: true });
    }


    return (
        <div className="nav bg-white border-b  text-[15px] p-[10px] grid 
        grid-cols-[60px,1fr,2.5fr,0.5fr,0.5fr,1.2fr] ">
            <div className="font-medium ">{index}</div>
            <div className="font-medium mr-[30px] text-blue-500 underline ">
                <Link>
                    {title}
                </Link>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} className="mr-[30px] text-ellipsis "></div>
            <div className="">
                <Link className="text-blue-500 underline " to="">{createBy.fullname}</Link>
            </div>
            <div className="text-[13px] ">{timeFormatter(createAt)}</div>
            {
                !published.user ?
                    <div className="mx-auto flex ">
                        <button disabled={loading.success} onClick={() => onPublish(true)} className="h-[35px] px-[10px] mb-[5px] flex items-center py-[5px] bg-blue-500 disabled:bg-gray-400 mr-[5px] text-white rounded-md ">
                            {loading.success && <Loading className="w-[20px] fill-current mr-[5px] h-[20px] " />}
                            Duyệt
                        </button>
                        <button disabled={loading.error} onClick={() => onPublish(false)} className="h-[35px] px-[10px] mb-[5px] flex items-center py-[5px] bg-red-500 disabled:bg-gray-400 mr-[5px] text-white rounded-md ">
                            {loading.error && <Loading className="w-[20px] fill-current mr-[5px] h-[20px] " />}
                            Hủy bỏ
                        </button>
                    </div>
                    : <Link className="mx-auto block">{published.isConfirm ?
                        <span className="block py-[10px] bg-green-400 px-[10px] rounded-md text-white ">Phê duyệt bởi : {published.user.fullname}</span> :
                        <span className="block py-[10px] bg-gray-400 px-[10px] rounded-md text-white ">Hủy bỏ bởi : {published.user.fullname}</span>
                    }</Link>
            }
        </div>
    );
};

export default PublishItem;