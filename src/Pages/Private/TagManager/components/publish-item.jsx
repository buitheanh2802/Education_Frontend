import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LoadingIcon from "src/Components/Loading/LoadingIcon";
import { useSelector } from "react-redux";
import TagAPi from 'src/Apis/TagApi';
import swal from 'sweetalert'
import ModalEdit from './ModalEdit';
import UseModal from './useModal'

const PublishItem = (props) => {
    const { name, index, follow, post, question, id, slug, photo, onRemove, onEdit } = props;
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
                onRemove(slug);
                if (slug) setLoading({ ...loading, success: false });
                swal("Xóa tag thành công!");
            }
        } catch (error) {
            swal("Xóa tag thất bại!");
        }
    }

    const { isShowingEdit, toggleEdit } = UseModal();

    return (
        <div>
            <div className="nav bg-white border-b text-[15px] p-[10px] grid grid-cols-[60px,1.5fr,1fr,0.75fr,0.75fr,1.2fr]">
                <div className="font-medium ">{index}</div>
                <div className="font-medium mr-[30px] text-blue-500 underline ">
                    <Link to={`/tag/${slug}`}>{name}</Link>
                </div>
                <div className="text-[13px]">{follow}</div>
                <div className="text-[13px]">{post}</div>
                <div className="text-[13px]">{question}</div>
                <div className="flex">
                    <button onClick={() => handleDelete(slug)}
                        className="px-[15px] py-[5px] text-white bg-red-500 hover:bg-red-800 rounded-md flex mx-auto" >
                        {loading.success && (
                            <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                        )}
                        Xóa
                    </button>
                    <button onClick={toggleEdit}
                        className="px-[15px] py-[5px] text-white bg-blue-500 hover:bg-blue-800 rounded-md mx-auto" >
                        Sửa
                    </button>
                    <ModalEdit
                        onEdit={onEdit}
                        isShowingEdit={isShowingEdit}
                        hide={toggleEdit}
                        id={id}
                        photo={photo}
                        name={name}
                        slug={slug}
                    />
                </div>
            </div>
        </div>

    );
};

export default PublishItem;