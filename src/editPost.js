import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditPost extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const data = {
    newTitle,
    newMessage
  }
  this.props.UpdateData(data, this.props.post.id)
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}

const mapDispatchToProps=((dispatch)=>{return{
  UpdateData:(data,id)=>dispatch({ type: 'UPDATE', id: id, data: data })
}})
export default connect(null,mapDispatchToProps)(EditPost);