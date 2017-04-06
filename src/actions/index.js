import axios from 'axios';

const root_url = 'http://reduxblog.herokuapp.com/api';
const api_key = '?key=12121';

export function createPost (props) {
	const request = axios.post(`${root_url}/posts${api_key}`, props);
  return {
  	type: 'CREATE_POST',
  	payload: request
  };
}

export function getAllPost (props) {
	const request = axios.get(`${root_url}/posts${api_key}`, props);
  return {
  	type: 'GET_POSTS',
  	payload: request
  };
}