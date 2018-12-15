import React, { Component } from 'react';


class MovieItem extends Component {

    
    render() {
        let { movie } = this.props;
        return (
            <div className="item">
                <p>{movie.title}</p>
            </div>
        );
    }
}

export default MovieItem;