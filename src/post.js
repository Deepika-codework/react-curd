import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
render() {
return (
<div className="post">
  <h2 className="post_title">{this.props.post.title}</h2>
  <p className="post_message">{this.props.post.message}</p>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.EditData(this.props.post.id)
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.DeleteData(this.props.post.id )}
    >Delete</button>
  </div>
</div>
);
}
}

const mapDispatchToProps=((dispatch)=>{return{
  EditData:(id)=>dispatch({ type: 'EDIT_POST', id: id }),
  DeleteData:(id)=>dispatch({ type: 'DELETE_POST', id: id })
}})
export default connect(null,mapDispatchToProps)(Post);