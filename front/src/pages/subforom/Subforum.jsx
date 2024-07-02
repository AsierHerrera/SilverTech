import React, { useEffect, useState } from 'react';
import { getAllPostsInSubforum, createPostInSubforum, updatePostInSubforum, deletePostInSubforum, getAllUsers } from '../../utils/fetch';
import { getToken, parseToken } from '../../utils/local.js';

const Subforum = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [editPostId, setEditPostId] = useState(null);
  const [editPostTitle, setEditPostTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [postsResult, usersResult] = await Promise.all([getAllPostsInSubforum(), getAllUsers()]);
        if (postsResult.error) {
          setError(postsResult.error);
        } else {
          setPosts(Array.isArray(postsResult.data) ? postsResult.data : []);
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
      const newPost = { title: newPostTitle, user: userId };
      const result = await createPostInSubforum(newPost);
      console.log('New post created:', result);
      if (!result.error) {
        setPosts([...posts, result.data]);
        setNewPostTitle("");
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditPost = async (id) => {
    try {
      const updatedPost = { title: editPostTitle };
      const result = await updatePostInSubforum(id, updatedPost);
      console.log('Post updated:', result);
      if (!result.error) {
        setPosts(posts.map(post => post._id === id ? result : post));
        setEditPostId(null);
        setEditPostTitle("");
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
      <input
        type="text"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        placeholder="New post title"
      />
      <button onClick={handleCreatePost}>Create Post</button>
      <ul>
        {posts.length === 0 ? (
          <li>No posts available</li>
        ) : (
          posts.map((post) => {
            // console.log('post:', post);
            return (
              <li key={post._id}>
                {editPostId === post._id ? (
                  <div>
                    <input
                      type="text"
                      value={editPostTitle}
                      onChange={(e) => setEditPostTitle(e.target.value)}
                    />
                    <button onClick={() => handleEditPost(post._id)}>Save</button>
                    <button onClick={() => setEditPostId(null)}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <h2>{post.title}</h2>
                    <p>Posted by: {findUsernameById(post.user)}</p>
                    <p>{Array.isArray(post.comments) ? post.comments.length : 0} comments</p>
                    <button onClick={() => {
                      setEditPostId(post._id);
                      setEditPostTitle(post.title);
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
