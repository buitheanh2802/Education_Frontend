import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoadingIcon from "src/Components/Loading/LoadingIcon";
import { useSelector } from "react-redux";

const PublishItem = (props) => {
    const { name, index, follow, post, question, id, slug } = props;
    const { profile } = useSelector((state) => state.Auth);
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });

    return (
        <div className="nav bg-white border-b  text-[15px] p-[10px] grid 
        grid-cols-[60px,1.5fr,1fr,0.75fr,0.75fr,1.5fr]">
            <div className="font-medium ">{index}</div>
            <div className="font-medium mr-[30px] text-blue-500 underline ">
                <Link to={`/tag/${slug}}`}>{name}</Link>
            </div>
            <div className="text-[13px]">{follow}</div>
            <div className="text-[13px]">{post}</div>
            <div className="text-[13px]">{question}</div>
            <div className="text-center">
                <button className="px-[15px] py-[5px] text-white bg-red-500 rounded-md flex mx-auto" >
                    Xóa
                </button>
            </div>
        </div>
    );
};

export default PublishItem;