import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidMount (){
        this.loadData();
        
    }

    componentDidUpdate(){
        this.loadData();
    }
    loadData(){
        if(this.props.match.params.id){
            //here therei s a problem with the check, we check between two id but the first is a number
            //and the second is a string so we change the second from string to number adding a plus 
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)){
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        // console.log(response)
                        this.setState({loadedPost: response.data})
                    });
            }
        }
    }
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response)
            });
    }
    render () {
        let post = <p style={{textAlign: 'Center'}}>Please select a Post!</p>;
        if(this.props.match.params.id){
            post = <p style={{textAlign: 'Center'}}>Loading....</p>;
        }
        
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;