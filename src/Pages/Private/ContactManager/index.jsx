import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import PublishItem from "./components/publish-item";
import queryString from "query-string";
import PublishNav from "./components/publish-nav";
import SkeletonGroup from "./components/skeleton-group";
import ContactApi from "src/Apis/ContactApi";
import Pagination from "src/Pages/Public/Commons/Panigation";
import { useHistory, useLocation } from "react-router-dom";
const ContactManager = (props) => {
  // get query params
  const query = queryString.parse(props.location.search, {
    parseNumbers: true,
  });
  // __state
  const [startCall, setStartCall] = useState(false);
  const [contactList, setContactList] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [render, setRender] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const timeout = useRef(null);
  // __effect
  useEffect(() => {
    setRender(false);
    setContactList(null);
    async function getData() {
      try {
        // start call api
        setStartCall(true);
        const query = queryString.parse(location.search);
        const {
          data: {
            data: { models, metaData },
          },
        } = await ContactApi.getContact();
        if (models && models.length > 0) setContactList(models);
        // set Pagination
        setPagination(metaData.pagination);
        // end call
        setStartCall(false);
      } catch (error) {
        console.log(error);
        setStartCall(false);
      }
    }
    getData();
  }, [render, location.search]);
  const [loading, setLoading] = useState({
    error: false,
    success: false,
  });

  const handelRemoveContact = async (id) => {
    // if (id) setLoading({ ...loading, success: true });
    await ContactApi.deleteContact(id);
    const dataNew = contactList?.filter((data) => data?._id !== id);
    setContactList(dataNew);
  };
  const handelFeedbackContact = async (id) => {
    // if (id) setLoading({ ...loading, success: true });
    await ContactApi.feedbackContact(id);
    setRender(true);
  };

  const handleSearch = async (e) => {
    try {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(async () => {
        const { data: resultSearch } = await ContactApi.searchContact(
          e.target.value
        );
        setContactList(resultSearch.data);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const onPageChange = (e) => {
    const query = queryString.stringify({ page: e.selected + 1 });
    history.push(`${location.pathname}?${query}`);
  };
  // __render data
  return (
    <div className="w-full">
      <Header handleSearch={handleSearch} />
      <PublishNav />

      {startCall && <SkeletonGroup />}
      {contactList &&
        contactList.map((item, index) => {
          return (
            <PublishItem
              index={index + 1}
              key={index}
              title={item?.title}
              content={item?.content}
              name={item?.name}
              email={item?.email}
              createAt={item?.createdAt}
              id={item?._id}
              feedback={item?.feedback}
              fullName={item?.submittedBy?.fullname}
              handelRemoveContact={handelRemoveContact}
              handelFeedbackContact={handelFeedbackContact}
            />
          );
        })}
      {pagination &&
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

export default ContactManager;
