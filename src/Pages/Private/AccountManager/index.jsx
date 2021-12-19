import React, { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import PublishNav from "./components/publish-nav";
import SkeletonGroup from "./components/skeleton-group";
import UserApi from "src/Apis/UserApi";
import PublishItem from "./components/publish-item";
import { useHistory, useLocation } from "react-router-dom";
import Pagination from "src/Pages/Public/Commons/Panigation";
import queryString from "query-string";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Notfound from "src/Pages/Public/Notfound";
import { path } from "src/Constants/";

const AccountManager = () => {
  const [startCall, setStartCall] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [reConnect, setReConnect] = useState(false);
  const timeout = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const [pagination, setPagination] = useState(null);
  const { profile } = useSelector(state => state.Auth);


  useEffect(() => {
    setListUsers(null);
    const query = queryString.parse(location.search);
    const getData = async () => {
      try {
        setStartCall(true);
        const { data: listUser } = await UserApi.getListUserAdmin(query);
        setListUsers(listUser.data.models);
        setPagination(listUser?.data?.metaData?.pagination);
        setStartCall(false);
      } catch (error) {
        console.log(error);
        setStartCall(false);
      }
    };
    getData();
  }, [reConnect, location.search]);

  const onPageChange = (e) => {
    const query = queryString.stringify({ page: e.selected + 1 });
    history.push(`${location.pathname}?${query}`);
  };
  const reCall = () => {
    setReConnect(!reConnect);
  };

  const handleSearch = async (e) => {
    try {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(async () => {
        const { data: resultSearch } = await UserApi.searchUser(e.target.value);
        setListUsers(resultSearch.data);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  if (profile?.role !== "admin") return <Redirect to={path?.NOT_FOUND} component={Notfound} />

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
          );
        })}
      {Pagination &&
        pagination?.totalPage > 1 &&
        pagination?.countDocuments !== 0 && (
          <Pagination
            pageCount={pagination.totalPage}
            onChange={onPageChange}
            currentPage={pagination.currentPage - 1}
          />
        )}
    </div>
  );
};

export default AccountManager;
