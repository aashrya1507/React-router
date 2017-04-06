import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const MessageTemplate = React.createClass({
	render() {
		const { createStatus: {status} } = this.props;
		return (
			<div>
				<h3>{status === 'Created' ? 'Success' : 'Error'}</h3>
				<Link to="/" className="btn btn-primary" >
					Home
				</Link>
			</div>
		);
	}
});

function mapStateToProps(state) {
	return {createStatus: state.createStatus};
}

export default connect(mapStateToProps, null)(MessageTemplate); 