import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

	state = {
		posts: [],
		fullPostId: null
	}

    componentDidMount(){
	    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
		   const posts = response.data.slice(0,4);
		   const updatedPosts = posts.map(post => {
			   return {...post, author: 'mridul'}
		   });
		    this.setState({ posts: updatedPosts});
	    });
    }

    showFullPostHandler = (id) => {
	    this.setState({fullPostId: id});
    }

    render () {
	    const postEl = this.state.posts.map(post => <Post key={post.id} title={post.title} author={post.author} showPost={() => this.showFullPostHandler(post.id)}/>) ;
        return (
            <div>
                <section className="Posts">{postEl}</section>
                <section>
                    <FullPost id={this.state.fullPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;