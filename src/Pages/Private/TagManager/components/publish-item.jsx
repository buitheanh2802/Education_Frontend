import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoadingIcon from "src/Components/Loading/LoadingIcon";
import { useSelector } from "react-redux";
import TagAPi from 'src/Apis/TagApi';
import SuccessMessage from 'src/Components/SuccessMessage';
import ErrorMessage from 'src/Components/ErrorMessage';

const PublishItem = (props) => {
    const { name, index, follow, post, question, id, slug } = props;
    const { profile } = useSelector((state) => state.Auth);
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });
    let message, errors;
    const handleDelete = async (slug) => {
        try {
            const removePro = window.confirm("Bạn có muốn xoá sản phẩm không?");
            if (removePro) {
                if (slug) setLoading({ ...loading, success: true });
                await TagAPi.deleteTag(slug);
                if (slug) setLoading({ ...loading, success: true });
                message = "Xóa tag thành công"
            }
        } catch (error) {
            console.log(error);
            errors = "Xóa tag thất bại"
        }
    }

    return (
        <div>
            {message && <SuccessMessage message={message} />}
            {errors && <ErrorMessage message={errors} />}
            <div className="nav bg-white border-b text-[15px] p-[10px] grid grid-cols-[60px,1.5fr,1fr,0.75fr,0.75fr,1.2fr]">
                <div className="font-medium ">{index}</div>
                <div className="font-medium mr-[30px] text-blue-500 underline ">
                    <Link to={`/tag/${slug}}`}>{name}</Link>
                </div>
                <div className="text-[13px]">{follow}</div>
                <div className="text-[13px]">{post}</div>
                <div className="text-[13px]">{question}</div>
                <div className="text-center flex">
                    <button onClick={() => handleDelete(slug)} className="px-[15px] py-[5px] text-white bg-red-500 rounded-md mx-auto" >
                        Xóa
                    </button>
                    <button className="px-[15px] py-[5px] text-white bg-blue-300 rounded-md mx-auto" >
                        Sửa
                    </button>
                </div>
            </div>
        </div>

    );
};

export default PublishItem;