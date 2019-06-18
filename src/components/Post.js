import React, { Fragment, Component } from 'react';
import Faker from 'faker'
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');
import PostModal from './PostModal'

class Post extends Component {

  state = {
    isViewingModal: false
  }

  renderLikes = () => {
    switch (this.props.post.likes) {
      case 0:
        return <Fragment>{this.props.post.likes.length} Likes</Fragment>
        // break;
      case 1:
        return <Fragment>{this.props.post.likes.length} Like</Fragment>
        // break;
      default:
        return <Fragment>{this.props.post.likes.length} Likes</Fragment>
    }
  }

  h3Style = {
    color:'rgb(54, 124, 255)', fontWeight:'400', lineHeight:'.69', verticalAlign: 'top',borderBottom: '2px solid rgb(54, 124, 255)', width: "75%", float: "right"
  }

  handleModalClick = (event) => {
    this.setState({
      isViewingModal: !this.state.isViewingModal
    })
  }


  render() {
    const content = this.props.post.content

    return (
      <Fragment>

        <div onClick={this.handleModalClick} data-toggle="modal" data-target={".bd-example-modal-lg-" + this.props.post.id} key={this.props.post.id} className="single-post">
        {
          this.props.post.user ?
          <Fragment>
            <h2 >{this.props.post.title}</h2>
            <p className="post-content">{content.substring(0,100)}...</p>
            <section className="post-footer">
              <hr></hr>
              <div className="post-footer-option container" style={{"display":"flex", "width":"auto", "justifyContent":"space-between"}}>
                <div>
                  {this.renderLikes()}
                  <button data-toggle="modal" data-target={".bd-example-modal-lg-" + this.props.post.id} type="button" className="btn btn-light"><i className="glyphicon glyphicon-comment"></i> Comments</button>
                  <button type="button" className="btn btn-light"><i className="glyphicon glyphicon-share-alt"></i> Share</button>
                </div>
                <section className="post-heading">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="media">
                        <div className="media-left">
                          <a href="#">
                            <img src={Faker.image.avatar()} width="40" height="40" alt="..."/>
                          </a>
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">{this.props.post.user? this.props.post.user.username : null}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-user" style={this.h3Style}>
                    <p className="post-user" style={{fontSize:'10px',float:'right',marginTop:"10%"}}> <TimeAgo datetime={this.props.post.created_at}/></p>
                  </div>
                </section>
              </div>
            </section>
          </Fragment>
          :
          null
        }
        </div>
        <div>
          <PostModal  postObjToView={this.props.postObjToView}  currentUser={this.props.currentUser} addNewComment={this.props.addNewComment} post={this.props.post}/>

        </div>
      </Fragment>
    );
  }

}

export default Post;
