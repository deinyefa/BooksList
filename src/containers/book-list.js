import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li
					key={book.title}
					className="list-group-item"
					onClick={() => this.props.selectBook(book)}
				>
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	//- whatever gets returned will show up as props inside of booklist (will be linked to this.props from above)
	return {
		books: state.books
	};
}

//- anything returned will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	//- whenever selectbook is called, result is passed to all reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//- connect takes a function and a component and returns a container
//- needs to know about dispatch method, selectbook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
