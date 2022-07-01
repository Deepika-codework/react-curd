import React, { Component } from 'react';
import PostForm from './postForm';
import AllPost from './allPost';
import {createStore} from 'redux';
import postReducer from './store/postReducer';
import { Provider } from 'react-redux';

const storeData = createStore(postReducer);

class App extends Component {
  render() {
    return (
    <div className="App">
      <Provider store={storeData}> 
        <PostForm />
        <AllPost />
         </Provider> 
    </div>
    );
    }
  }
export default App;