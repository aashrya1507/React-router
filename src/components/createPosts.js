import React from 'react';
import  { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

const CreatePosts = React.createClass({
	contextTypes: {
		router: React.PropTypes.object
  },
  submitAction(props) {
  	this.props.createPost(props)
  	.then( () => {
  		this.context.router.push('posts/message');
  	});
  },
	render() {
		const { fields: { title, categories, content} ,handleSubmit , createPost} = this.props;
		return (
			<div>
				<h1>
					Add New Post Here
				</h1>
				<form onSubmit={handleSubmit(this.submitAction)}>
					<div className="form-group">
						<label>Title</label>
						<input type="text" className="form-control" {...title} />
						<div className="text-help">
							{title.touched ? title.error : ''}
						</div>
					</div>
					<div className="form-group">
						<label>Catagoery</label>
						<input type="text" className="form-control" {...categories} />
						<div className="text-help">
							{categories.touched ? categories.error : ''}
						</div>
					</div>
					<div className="form-group">
						<label>Description</label>
						<input type="text" className="form-control" {...content} />
						<div className="text-help">
							{content.touched ? content.error : ''}
						</div>
					</div>
					<input type="submit" className="btn btn-primary" /> 
				</form>
			</div>
		);
	}
});

function validate(values) {
	const error = {};

	if(!values.title)
		error.title = 'Enter User Name';
	if(!values.categories)
		error.categories = 'Enter Categories';
	if(!values.content)
		error.content = 'Enter Content';

	return error;
}

export default reduxForm({
	form: 'postNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(CreatePosts);