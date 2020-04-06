import React from "react";

export const Book = ({title, author, pages, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
        </section>
    );
};