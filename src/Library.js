import React from "react";
import {Book} from "./Book";
import {Hiring} from "./Hiring";
import {NotHiring} from "./NotHiring";
import {Product} from "./Product";

export class Library extends React.Component {

    state = {open: false, freeBookmark: false, hiring: false, data: [], loading: false};

    componentDidMount() {
        this.setState({loading: false});
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    };

    render() {
        const {books} = this.props;

        return (
            <div>
                {this.state.hiring ? <Hiring/> : <NotHiring/>}
                {this.state.loading ? "Loading..." : this.state.data.map(product => <Product key={product.id} product={product}/>)}
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark}/>
                )}
            </div>
        );
    }
}