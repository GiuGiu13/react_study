import React, { Component } from 'react';
// import axios from 'axios';
import Posts from '../Posts/Posts';
import {Route} from 'react-router-dom';

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>

                <Route path='/' exact render={() => <h1>home</h1>} />
                

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