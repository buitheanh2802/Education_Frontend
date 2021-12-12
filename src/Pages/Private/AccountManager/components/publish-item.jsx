import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LoadingIcon from "src/Components/Loading/LoadingIcon";

const PublishItem = (props) => {
    const { id, index, fullname, username, email, status, role, type } = props;
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });

    const changeStatus = (e) => {
    }

    return (
        <div className="nav bg-white border-b text-[15px] p-[10px] grid grid-cols-[60px,1.5fr,1.5fr,1.5fr,0.6fr,0.6fr,0.8fr]">
            <div className="font-medium"> {index} </div>
            <div className="font-medium mr-[30px]">
                <Link className="hover:underline text-blue-500" to={`/user/${username}`}>{fullname}</Link>
            </div>
            <div className="text-[14px]"> {username} </div>
            <div className="text-[14px]"> {email} </div>
            <div className="text-[14px]"> { type } </div>
            <div >
                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" onChange={(e) => changeStatus(e)}
                        defaultChecked={status === "active"}
                        name="toggle" id={`toggle-${index}`}
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" 
                    />
                    <label for={`toggle-${index}`}
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                    </label>
                </div>
            </div>
            <div className="flex">
                <select className='border py-[5px] px-[8px] border-green-300 rounded' name="role">
                    <option value="user">User</option>
                    <option value="collaborator">Collaborator</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </div>
    );
};

export default PublishItem;