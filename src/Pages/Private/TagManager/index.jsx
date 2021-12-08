import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./components/header";
import PublishNav from "./components/publish-nav";

const TagManager = () => {
    return (
        <div className="w-full">
            <Header />
            <PublishNav />
            
        </div>
    )
};

export default TagManager;
