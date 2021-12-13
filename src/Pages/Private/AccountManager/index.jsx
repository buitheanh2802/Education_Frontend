import React, { useState, useEffect } from "react";
import Header from "./components/header";
import PublishNav from "./components/publish-nav";
import SkeletonGroup from "./components/skeleton-group";
import UserApi from 'src/Apis/UserApi';
import PublishItem from "./components/publish-item";

const AccountManager = () => {
    const [startCall, setStartCall] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [reConnect, setReConnect] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setStartCall(true);
                const { data: listUser } = await UserApi.getListUser();
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

    return (
        <div className="w-full">
            <Header />
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
