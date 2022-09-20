
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post';
import EditComponent from './editPost';
class AllPost extends Component {
render() {
return (
<div>
 
  <h1 className="post_heading"> {this.props.posts.length?'All Posts':'No Post'}</h1>
  {this.props.posts.map((post) => (
  <div key={post.id}>
    {post.editing ? <EditComponent post={post}  /> : <Post post={post}
    />}
  </div>
))}
</div>
);
}
}

const mapStateToProps = (state) => {
return {
posts: state
}
}
export default connect(mapStateToProps)(AllPost);