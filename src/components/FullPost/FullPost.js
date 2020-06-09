import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        fullPost: null
    }

    componentDidUpdate(){
        if (!this.props.id || (this.state.fullPost && this.props.id == this.state.fullPost.id) ) return;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(res => {
            this.setState({ fullPost: res.data });
        });
    }

    render() {

        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (!this.props.id) {
            return post;
        }

        if (this.state.fullPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.fullPost.title}</h1>
                    <p>{this.state.fullPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }else{
            post = <p style={{ textAlign: 'center' }}>loading...</p>;
        }
        return post;
    }
}

export default FullPost;