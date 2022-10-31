import React from "react";
import "../Book/book.css";
import bookreviews from "../../Assets/becks_bookcover.png";
import eviechargers from "../../Assets/evie_bookcover.png";
import scalespractice from "../../Assets/scales_bookcover.png";
import Bookshape from "../BookShape/bookshape.js";

export default function Book({ book, link, text, title }) {

    // const openInNewTab = (url) => {
    //     window.open(url, "_blank", "noopener,noreferrer");
    // };

    let info = [
        {
            image: bookreviews,
            title: "Book Reviews",
            text: `

        I'm an avid reader, and also like to write book
        reviews.
    
        I created this simple app where users can
        search and view my book reviews.
        `,
        },
        {
            image: eviechargers,
            title: "EVie Chargers",
            text: `

        Some words about EVie charger project
        `,
        },
        {
            image: scalespractice,
            title: "Scales Practice",
            text: `

    Some words about Scales project
    `,
        },
    ];

    const renderBooks = (info) =>
        info.map((item) => {
            return <Bookshape item={item} />;
        });

    return <>{renderBooks(info)}</>;
}
