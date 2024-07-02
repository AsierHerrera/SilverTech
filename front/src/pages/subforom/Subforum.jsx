import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPostsInSubforum, createPostInSubforum, updatePostInSubforum, deletePostInSubforum, getAllUsers } from '../../utils/fetch';
import { getToken, parseToken } from '../../utils/local.js';
import './Subforum.css';

const Subforum = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostText, setNewPostText] = useState("");
  const [editPostId, setEditPostId] = useState(null);
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostText, setEditPostText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [postsResult, usersResult] = await Promise.all([getAllPostsInSubforum(), getAllUsers()]);
        if (postsResult.error) {
          setError(postsResult.error);
        } else {
          setPosts(Array.isArray(postsResult.data) ? postsResult.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : []);
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
  }, []);

  const handleCreatePost = async () => {
    try {
      const token = getToken();
      const userId = parseToken(token).userId;
      const newPost = { title: newPostTitle, text: newPostText, user: userId };
      const result = await createPostInSubforum(newPost);
      console.log('New post created:', result);
      if (!result.error) {
        setPosts([...posts, result.data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        setNewPostTitle("");
        setNewPostText("");
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditPost = async (id) => {
    try {
      const updatedPost = { title: editPostTitle, text: editPostText };
      const result = await updatePostInSubforum(id, updatedPost);
      console.log('Post updated:', result);
      if (!result.error) {
        setPosts(posts.map(post => post._id === id ? result.data : post).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        setEditPostId(null);
        setEditPostTitle("");
        setEditPostText("");
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const result = await deletePostInSubforum(id);
      if (!result.error) {
        setPosts(posts.filter(post => post._id !== id));
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

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
    <div>
      <h1>Subforum</h1>
      <div className="create-post-container">
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="New post title"
        />
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="New post text"
        />
        <button onClick={handleCreatePost}>Create Post</button>
      </div>
      <ul className="post-list">
        {posts.length === 0 ? (
          <li>No posts available</li>
        ) : (
          posts.map((post) => {
            console.log('post:', post);
            return (
              <li key={post._id} className="post-item">
                {editPostId === post._id ? (
                  <div className="edit-post-container">
                    <input
                      type="text"
                      value={editPostTitle}
                      onChange={(e) => setEditPostTitle(e.target.value)}
                    />
                    <textarea
                      value={editPostText}
                      onChange={(e) => setEditPostText(e.target.value)}
                    />
                    <button onClick={() => handleEditPost(post._id)}>Save</button>
                    <button onClick={() => setEditPostId(null)}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <h2>{post.title}</h2>
                    <p className="post-text">{post.text}</p>
                    <p>Posted by: {findUsernameById(post.user)}</p>
                    <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
                    <p>{Array.isArray(post.comments) ? post.comments.length : 0} comments</p>
                    <button onClick={() => {
                      setEditPostId(post._id);
                      setEditPostTitle(post.title);
                      setEditPostText(post.text);
                    }}>Edit</button>
                    <button onClick={() => handleDeletePost(post._id)}>Delete</button>
                  </div>
                )}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Subforum;
