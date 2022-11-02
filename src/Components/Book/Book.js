import React from "react";
import "../Book/book.css";
import Bookshape from "../BookShape/bookshape.js";
import info from '../../Data/info.js'

export default function Book({darkmode}) {

    const renderBooks = (info) =>
        info.map((item) => {
            // console.log(item.livelink)
            console.log(item.repolink)
            return <Bookshape item={item} stack={item.stack} live={item.livelink} repo={item.repolink} darkmode={darkmode}/>;
        });

    return <>{renderBooks(info)}</>;
}
