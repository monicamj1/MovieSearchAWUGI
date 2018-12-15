import React, { Component } from 'react';
import './List.css';
import MovieItem from './MovieItem';
import axios from 'axios';


class List extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            filter: null,
        }
    }

    componentDidMount = () => {
        let { filter } = this.state;
        let query = null;
        if (filter !== null) {
            query = `https://api.themoviedb.org/3/search/movie?api_key=7646dd9166d443d20a01615dbcd1ff60&query=${filter}`;
        } else {
            query = `https://api.themoviedb.org/3/discover/movie?api_key=7646dd9166d443d20a01615dbcd1ff60&sort_by=popularity.desc`;
        }
        if( filter !== ""){
        axios.get(query)
            .then(response => {
                const movielist = response.data;
                this.setState({
                    list: movielist.results,
                })
                console.log(this.state.list);
            });
        }
    }

    updateText = (e) => {
        this.setState({
            filter: e.target.value
        });
    }


    filterTerm = () => {
        if (this.state.filter !== null) {
            let text = this.state.filter.split(" ");
            text = text.join("+");
            this.setState({
                filter: text
            });
            this.componentDidMount();
        }
    }


    render() {
        let { list } = this.state;
        let result;

        return (
            <div>
                <div className="header">
                    <input type="text" onChange={this.updateText} className="textbox" />
                    <button onClick={this.filterTerm} className="searchButton">Search </button>
                </div>
                <div className="movielist">
                    {list.map((item, index) =>
                        <MovieItem
                            key={item.id}
                            index={index + 1}
                            movie={item}

                        />
                    )}
                </div>
            </div>
        );
    }
}

export default List;