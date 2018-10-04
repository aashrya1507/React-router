import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import AllPost from './components/allPost';
import CreatePost from './components/createPosts';
import MessageComponent from './components/success-screen';

console.log("jfssss");

export default 
 	(
		<Route path='/' component={App} >
			<IndexRoute component={AllPost} />
			<Route path="posts/new" component={CreatePost} />
			<Route path="posts/message" component={MessageComponent} />
		</Route>
	);
