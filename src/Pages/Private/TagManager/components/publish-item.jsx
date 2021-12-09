import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoadingIcon from "src/Components/Loading/LoadingIcon";
import { useSelector } from "react-redux";
import TagAPi from 'src/Apis/TagApi';
import SuccessMessage from 'src/Components/SuccessMessage';
import ErrorMessage from 'src/Components/ErrorMessage';
import swal from 'sweetalert'

const PublishItem = (props) => {
    const { name, index, follow, post, question, id, slug } = props;
    const { profile } = useSelector((state) => state.Auth);
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });
    const handleDelete = async (slug) => {
        try {
            const removePro = window.confirm("Bạn có chắc chắn muốn xoá không?");
            if (removePro) {
                if (slug) setLoading({ ...loading, success: true });    
                await TagAPi.deleteTag(slug);
                if (slug) setLoading({ ...loading, success: false });
                swal("Xóa tag thành công!");
            }
        } catch (error) {
            swal("Xóa tag thất bại!");
        }
    }

    return (
        <div>
            <div className="nav bg-white border-b text-[15px] p-[10px] grid grid-cols-[60px,1.5fr,1fr,0.75fr,0.75fr,1.2fr]">
                <div className="font-medium ">{index}</div>
                <div className="font-medium mr-[30px] text-blue-500 underline ">
                    <Link to={`/tag/${slug}}`}>{name}</Link>
                </div>
                <div className="text-[13px]">{follow}</div>
                <div className="text-[13px]">{post}</div>
                <div className="text-[13px]">{question}</div>
                <div className="text-center flex">
                    <button onClick={() => handleDelete(slug)} className="px-[15px] py-[5px] text-white bg-red-500 hover:bg-red-800 rounded-md mx-auto" >
                        Xóa
                    </button>
                    <button className="px-[15px] py-[5px] text-white bg-blue-300 hover:bg-blue-600 rounded-md mx-auto" >
                        Sửa
                    </button>
                </div>
            </div>
        </div>

    );
};

export default PublishItem;