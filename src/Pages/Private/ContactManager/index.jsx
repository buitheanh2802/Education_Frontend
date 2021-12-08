import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PostAPI from "../../../Apis/PostApi";
import Header from "./components/header";
import PublishItem from "./components/publish-item";
import queryString from "query-string";
import PublishNav from "./components/publish-nav";
import SkeletonGroup from "./components/skeleton-group";
import ContactApi from "src/Apis/ContactApi";

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
  // __effect
  useEffect(() => {
    setRender(false);
    async function getData() {
      try {
        // start call api
        setStartCall(true);
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
  }, [render]);
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
  // __render data
  return (
    <div className="w-full">
      <Header />
      <PublishNav />

      {startCall && <SkeletonGroup />}
      {contactList &&
        contactList.map((item, index) => {
          return (
            <PublishItem
              index={index + 1}
              key={index}
              title={item.title}
              content={item.content}
              name={item.name}
              email={item.email}
              createAt={item.createdAt}
              id={item._id}
              feedback={item.feedback}
              fullName={item.submittedBy.fullname}
              handelRemoveContact={handelRemoveContact}
              handelFeedbackContact={handelFeedbackContact}
            />
          );
        })}
    </div>
  );
};

export default ContactManager;
