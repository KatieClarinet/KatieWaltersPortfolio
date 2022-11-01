import React from "react";
import "../Book/book.css";
import Bookshape from "../BookShape/bookshape.js";
import info from "../../Data/info.js";

export default function Book() {
    const renderBooks = (info) =>
        info.map((item) => {
            return (
                <Bookshape
                    item={item}
                    stack={item.stack}
                    live={item.livelink}
                    repo={item.repolink}
                />
            );
        });

    return <>{renderBooks(info)}</>;
}
