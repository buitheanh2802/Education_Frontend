import React, { useEffect, useState } from "react";
import Header from "./components/header";
import PublishNav from "./components/publish-nav";
import PublishItem from "./components/publish-item";
import queryString from "query-string";
import SkeletonGroup from "./components/skeleton-group";
import TagAPi from "src/Apis/TagApi";
import ModalAdd from './components/ModalAdd';
import UseModal from './components/useModal'

const TagManager = (props) => {
    const query = queryString.parse(props.location.search, {
        parseNumbers: true,
    });
    const [startCall, setStartCall] = useState(false);
    const [tagList, setTagList] = useState([]);
    const [reConnect, setReConnect] = useState(false);
    useEffect(() => {
        const getData = async () => {
            try {
                setStartCall(true);
                const { data: listTag } = await TagAPi.getAll();
                setTagList(listTag.data.models);
                setStartCall(false);
            } catch (error) {
                console.log(error);
                setStartCall(false);
            }
        }
        getData();
    }, [reConnect]);

    const onRemove = (slug) => {
        setTagList(tagList.filter((item) => item.slug !== slug))
    }

    const onAdd = (data) => {
        setTagList([data, ...tagList])
    }

    const onEdit = () => {
        setReConnect(!reConnect);
    }

    const { isShowing, toggle } = UseModal();

    return (
        <div className="w-full">
            <ModalAdd
                onAdd={onAdd}
                isShowing={isShowing}
                hide={toggle}
            />
            <Header />
            <div className="bg-white w-[100%] flex justify-end">
                <button onClick={toggle} className="mx-[20px] bg-green-500 hover:bg-green-800 text-white whitespace-nowrap h-[38px] leading-[38px] px-5 my-[10px] rounded"> Thêm tag </button>
            </div>
            <PublishNav />
            {startCall && <SkeletonGroup />}
            {tagList &&
                tagList.map((item, index) => {
                    return (
                        <PublishItem
                            onEdit={onEdit}
                            onRemove={onRemove}
                            index={index + 1}
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            follow={item.followerCounts}
                            post={item.postCounts}
                            question={item.questionCounts}
                            slug={item.slug}
                            photo={item?.avatar?.avatarUrl}
                        />
                    );
                })}
        </div>
    );
};

export default TagManager;



