import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            message: "",
        };
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: new Date(),
            title: this.state.title,
            message: this.state.message,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.setState({title:'',message:''})

    }

     setValueForField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" name='title' value={this.state.title} onChange={(e) => this.setValueForField(e)}
                        placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" name='message' value={this.state.message} onChange={(e) => this.setValueForField(e)}
                        cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);