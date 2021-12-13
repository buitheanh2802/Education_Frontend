import React, { useState } from 'react';
import { Link } from "react-router-dom";

const PublishItem = (props) => {
    const { id, index, fullname, username, email, status, role, type } = props;
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });
    return (
        <div className="nav bg-white border-b text-[15px] p-[10px] grid grid-cols-[60px,1fr,1.5fr,1.5fr,0.8fr,0.8fr]">
            <div className="font-medium ">{ index }</div>
            <div className="font-medium mr-[30px] text-blue-500 underline ">
                <Link to={`/user/${username}`}>{ fullname }</Link>
            </div>
            <div className="text-[13px]">{ username }</div>
            <div className="text-[13px]">{ email }</div>
            <div className="text-[13px]">{ status }</div>
            <div className="flex">
                { role }
            </div>
        </div>
    );
};

export default PublishItem;