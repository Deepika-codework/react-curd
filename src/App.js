import React, { Component } from 'react';
import PostForm from './postForm';
import AllPost from './allPost';
import {createStore} from 'redux';
import postReducer from './store/postReducer';
import { Provider } from 'react-redux';
import ErrorBoundary from './errorHandling'

const storeData = createStore(postReducer);

class App extends Component {
  render() {
    return (
     <ErrorBoundary> 
    <div className="App">
      <Provider store={storeData}> 
        <PostForm />
        <AllPost />
         </Provider> 
    </div>
   </ErrorBoundary> 
    );
    }
  }
export default App;