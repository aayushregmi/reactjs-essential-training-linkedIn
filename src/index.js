import React from "react";
import {render} from "react-dom";
import {Library} from "./Library";

let bookList = [
    {title: "Book 1", author: "Author 1", pages: 1},
    {title: "Book 2", author: "Author 2", pages: 2},
    {title: "Book 3", author: "Author 3", pages: 3},
    {title: "Book 4", author: "Author 4", pages: 4},
];

render(
    <Library books={bookList}/>,
    document.getElementById('root')
);

