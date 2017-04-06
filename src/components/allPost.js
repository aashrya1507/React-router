import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getAllPost } from '../actions/index';

 const AllPost = React.createClass({
	componentWillMount() {
		this.props.getAllPost();
	},
	renderPostList() {
		if(!this.props.posts) {
			return (<div>Loading</div>);
		} else {
			return this.props.posts.map( (post, index) => {
				return (<li key={index}>{post.title}</li>);
			});
		}
	},
	render() {
		return (
			<div>
				<Link to="/posts/new" className="btn btn-primary">
      		Add New Post
      	</Link>
      	<ul>
      		{this.renderPostList()}
      	</ul>
			</div>
		);
	}
});
function mapStateToProps(state) {
	return {posts: state.posts.all};
}

export default connect(mapStateToProps, { getAllPost })(AllPost);
