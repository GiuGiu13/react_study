import React, {Component} from 'react';
import Post from '../../components/Post/Post'
import axios from '../../axios';
//1 import { Link }from 'react-router-dom';

import './Posts.css'

class Posts extends Component{
    state = {
        posts: []
        
    }
    componentDidMount (){
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return{
                        ...post,
                        author:'Gaga'
                    }
                })
                this.setState({posts: updatedPosts});
                //console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({error:true})
            });

    }
    postSelectedHandler = (id) => {
        //1 this.setState({selectedPostId: id});
        // this.props.history.push({pathname: '/' + id});
        this.props.history.push('/' + id); 
        // this will also work
    }
    render(){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                    //1 <Link to={'/' + post.id} key={post.id} >
                        // <Post 
                        //     clicked={() => this.postSelectedHandler(post.id)} 
                        //     title={post.title} 
                        //     // {...this.props}
                        //     author={post.author}
                        // />
                    // </Link> 
                    // another way to load the article
                    <Post 
                        key={post.id}
                        clicked={() => this.postSelectedHandler(post.id)} 
                        title={post.title} 
                        // {...this.props}
                        author={post.author}
                    />
                );
            });
          
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;
