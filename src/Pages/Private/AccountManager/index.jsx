import React, { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import PublishNav from "./components/publish-nav";
import SkeletonGroup from "./components/skeleton-group";
import UserApi from 'src/Apis/UserApi';
import PublishItem from "./components/publish-item";

const AccountManager = () => {
    const [startCall, setStartCall] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [reConnect, setReConnect] = useState(false);
    const timeout = useRef(null);
    useEffect(() => {
        const getData = async () => {
            try {
                setStartCall(true);
                const { data: listUser } = await UserApi.getListUserAdmin();
                setListUsers(listUser.data.models);
                setStartCall(false);
            } catch (error) {
                console.log(error);
                setStartCall(false);
            }
        }
        getData();
    }, [reConnect])

    const reCall = () => {
        setReConnect(!reConnect)
    }

    const handleSearch = async (e) => {
        try {
            if (timeout.current) { clearTimeout(timeout.current) }
            timeout.current = setTimeout(async () => {
                const { data: resultSearch } = await UserApi.searchUser(e.target.value);
                setListUsers(resultSearch.data);
            }, 1000)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full">
            <Header handleSearch={handleSearch} />
            <PublishNav />
            {startCall && <SkeletonGroup />}
            {listUsers &&
                listUsers.map((item, index) => {
                    return (
                        <PublishItem
                            reCall={reCall}
                            index={index + 1}
                            key={item._id}
                            id={item._id}
                            fullname={item.fullname}
                            username={item.username}
                            email={item.email}
                            status={item.status}
                            role={item.role}
                            type={item.socialType}
                        />
                    )
                })
            }
        </div>
    )
};

export default AccountManager;
