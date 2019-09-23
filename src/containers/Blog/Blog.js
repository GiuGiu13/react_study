import React, { Component } from 'react';
// import axios from 'axios';
import Posts from '../Posts/Posts';
import {Route, NavLink} from 'react-router-dom';
import NewPost from '../NewPost/NewPost'

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/" 
                                    exact
                                    //1 if you want assign a custom active class you can with below,
                                    //otherwise the class is always active by default
                                    // activeClassName="my-active"
                                    //2 you can also add inline style for the specific active element
                                    // activeStyle={{
                                    //     color:'cadetblue',
                                    //     textDecoration:'underline'
                                    // }}>
                                > 
                                    Home
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                //absolute path
                                pathname: '/new-post',
                                //relative path
                                // pathname: this.props.match.url + '/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true',
                                }}>New Post</NavLink></li>
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