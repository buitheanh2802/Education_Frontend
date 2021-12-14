import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserApi from 'src/Apis/UserApi';
import LoadingIcon from "src/Components/Loading/LoadingIcon";

const PublishItem = (props) => {
    const { id, index, fullname, username, email, status, role, type, reCall } = props;
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });

    const changeStatus = async (e, username) => {
        try {
            let dataSend;
            if (e.target.checked) {
                dataSend = { status: "active" };
            } else {
                dataSend = { status: "block" };
            }
            if (dataSend) setLoading({ ...loading, success: true });
            const { data: user } = await UserApi.editManagerUser(username, dataSend);
            if (user) setLoading({ ...loading, success: false });
            // console.log("Thành công!");
        } catch (error) {
            console.log("Thất bại");
        }
    }

    const handleChangeRole = async (e, username) => {
        try {
            let dataSend;
            if (e.target.value) {
                dataSend = { role: e.target.value };
            }
            const { data: user } = await UserApi.editManagerUser(username, dataSend);
            if (user) reCall();
            // console.log("Thành công!");
        } catch (error) {
            console.log("Thất bại");
        }
    }

    return (
        <div className="nav bg-white border-b text-[15px] p-[10px] grid grid-cols-[60px,1.5fr,1.5fr,1.5fr,0.6fr,0.6fr,0.8fr]">
            <div className="font-medium"> {index} </div>
            <div className="font-medium mr-[30px]">
                <Link
                    className="hover:underline text-blue-500"
                    to={`/user/${username}`}
                >
                    {fullname}
                </Link>
            </div>
            <div className="text-[14px]"> {username} </div>
            <div className="text-[14px]"> {email} </div>
            <div className="text-[14px]"> {type} </div>
            <div className='pl-[30px]'>
                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-500 ease-in">
                    {loading.success && (
                        <LoadingIcon className="w-[20px] absolute left-[-30px] inline-block fill-current mr-[5px] h-[20px] " />
                    )}
                    <input type="checkbox"
                        onChange={(e) => changeStatus(e, username)}
                        defaultChecked={status === "active"}
                        name="toggle"
                        id={`toggle-${index}`}
                        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                        for={`toggle-${index}`}
                        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    >
                    </label>
                </div>
            </div>
            <div >
                <select
                    onChange={(e) => handleChangeRole(e, username)} defaultValue={role}
                    className='border py-[5px] px-[8px] border-green-300 rounded' name="role"
                >
                    <option value="user">User</option>
                    <option value="collaborators">Collaborator</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </div>
    );
};

export default PublishItem;