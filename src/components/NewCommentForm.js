import React, { Component, Fragment } from 'react';

class NewCommentForm extends Component {

  handleClick = (event) => {
    event.preventDefault()
    // console.log(event.target.firstChild.value);
    let commentObj = {
      content: document.querySelector(`textarea[name]`).value,
      user: this.props.currentUser,
      post: this.props.post
    }
    this.props.addNewComment(commentObj)
    this.props.handleAddComment(commentObj)
  }

  render() {
    return (
      <Fragment>
        <textarea id="comment-textarea" type="text" name="comment" style={{height:"44px", width:"500px", display: "inline-block"}} placeholder="Write your comment here..."></textarea>
        <input id="comment-button" onClick={this.handleClick} style={{height:"44px", display: "inline-block"}} type="button" value="Comment !"></input>
      </Fragment>
    );
  }

}

export default NewCommentForm;
