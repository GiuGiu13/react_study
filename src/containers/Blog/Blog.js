import React, { Component } from 'react';
// import axios from 'axios';
import Posts from '../Posts/Posts';
import {Route, Link} from 'react-router-dom';
import NewPost from '../NewPost/NewPost'

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                                }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={() => <h1>home</h1>} />
                <Route path='/'  render={() => <h1>home2</h1>} /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
                

                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;