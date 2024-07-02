// components/PostDetail/PostDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePostInSubforumById, getAllUsers } from '../../utils/fetch';
import "./SubforumDetails.css";

const SubforumDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [postResult, usersResult] = await Promise.all([getOnePostInSubforumById(id), getAllUsers()]);
        if (postResult.error) {
          setError(postResult.error);
        } else {
          setPost(postResult.data);
        }
        if (usersResult.error) {
          setError(usersResult.error);
        } else {
          setUsers(Array.isArray(usersResult.data) ? usersResult.data : []);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const findUsernameById = (id) => {
    const user = users.find(user => user._id === id);
    return user ? user.username : 'Unknown user';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="post-detail">
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <p>Posted by: {findUsernameById(post.user)}</p>
          <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
          <div className="comments-section">
            <h3>Comments</h3>
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment) => (
                <div key={comment._id} className="comment-item">
                  <p>{comment.content}</p>
                  <p>Commented by: {findUsernameById(comment.user)}</p>
                </div>
              ))
            ) : (
              <p>No comments yet</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubforumDetails;
