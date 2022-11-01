import React from "react";
import "../Book/book.css";
import Bookshape from "../BookShape/bookshape.js";
import info from '../../Data/info.js'

export default function Book({ book, link, text, title }) {

    const renderBooks = (info) =>
        info.map((item) => {
            return <Bookshape item={item} stack={item.stack} />;
        });

    return <>{renderBooks(info)}</>;
}
