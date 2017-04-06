import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchPost from './fetch-posts';
import createPost from './create-posts-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  posts: fetchPost,
  createStatus: createPost
});

export default rootReducer;
