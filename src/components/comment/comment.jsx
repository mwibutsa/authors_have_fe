import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faPencilAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { getLoggedInUser } from '../../helpers/authentication';
import CommentForm from './commentForm';
import '../../styles/css/comment.css';

/**
 * @author Mwibutsa Floribert
 * @param {Integer} id  --
 * @returns { * } --
 */
class Comment extends Component {
  /**
   * @author Mwibutsa Floribert
   * @returns { * } ---
   */
  render() {
    const user = getLoggedInUser();
    const {
      comment,
      deleteComment,
      slug,
      editComment,
      formId,
      toggleEditCommentForm,
    } = this.props;
    const { author, comment: body, id } = comment;
    if (user) {
      user.role = user.role ? user.role : 'User';
    }
    const { editMode } = this.props;
    if (editMode && formId === id) {
      return (
        <div className="edit-form-container">
          <FontAwesomeIcon
            icon={faTimes}
            className="delete"
            onClick={() => toggleEditCommentForm(true)}
            test-data="closeButton"
          />
          {'   '}
          <span className="color-success">Editing</span>
          <CommentForm
            buttonLabel="save"
            slug={slug}
            currentValue={body}
            saveComment={(editedComment, articleSlug) => {
              toggleEditCommentForm(formId);
              return editComment(articleSlug, id, editedComment);
            }}
          />
        </div>
      );
    }
    return (
      <div className="comment-container">
        <div className="comment-author">
          <img src={author.image} alt="" />
        </div>

        <div className="comment-body">
          <span className="author-name">{author.username}</span>
          <p className="comment-body">{body}</p>
          {user && (
            <div>
              {(user.username === author.username || user.role !== 'User') && (
                <FontAwesomeIcon
                  icon={faTrash}
                  className="delete"
                  onClick={() => deleteComment(slug, id)}
                  test-data="deleteButton"
                />
              )}
              {(user.username === author.username || user.role !== 'User') && (
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="edit"
                  onClick={() => toggleEditCommentForm()}
                  test-data="editButton"
                />
              )}
            </div>
          )}
          <br />
        </div>
      </div>
    );
  }
}
export default Comment;
