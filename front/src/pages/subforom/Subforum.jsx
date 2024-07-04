

import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPostsInSubforum, createPostInSubforum, updatePostInSubforum, deletePostInSubforum, getAllUsers } from '../../utils/fetch';
import { getToken, parseToken } from '../../utils/local.js';
import { FiArrowUpRight } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { TfiComment } from "react-icons/tfi";
import { FaRegTrashCan } from "react-icons/fa6";

import './Subforum.scss';

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
  const createPostRef = useRef(null);
  const token = getToken();
  const currentUser = parseToken(token);
  console.log('users :>> ', users);
  console.log('currentUser :>> ', currentUser);


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
      if (newPostTitle.trim() === "" || newPostText.trim() === "") {
        alert("Title and text cannot be empty");
        return;
      }
      const newPost = { title: newPostTitle, text: newPostText, user: currentUser.userId };
      const result = await createPostInSubforum(newPost);
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
      const confirmed = confirm("Are you sure you want to delete this post?");
      if (!confirmed) {
        return; 
      }
  
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

  const handlePostClick = (id) => {
    navigate(`/foro/${id}`);
  };

  const handleSortByNewest = () => {
    const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setPosts(sortedPosts);
  };

  const handleSortByMostCommented = () => {
    const sortedPosts = [...posts].sort((a, b) => (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0));
    setPosts(sortedPosts);
  };

  const handleScrollToCreatePost = () => {
    setEditPostId('new');
  };

  useEffect(() => {
    if (editPostId === 'new' && createPostRef.current) {
      createPostRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [editPostId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="hero">
        <div className='sectionimg'>
          <img src="../../../public/EllipseForo.jpg" alt="" />
        </div>
      </div>
  
      <div className="filters">
        <button onClick={handleSortByMostCommented}> <FiArrowUpRight/> Sort by Most Commented</button>
        <button onClick={handleSortByNewest}> <BsClock /> Sort by Newest</button>
        <button onClick={handleScrollToCreatePost}><BsPlusCircle /> Create New Post</button>
      </div>
   
      <ul className="post-list">
        {posts.length === 0 ? (
          <li>No posts available</li>
        ) : (
          posts.map((post) => (
            <li key={post._id} className="post-item"> 
              <div>
                {currentUser.role === 'admin' || post.user === currentUser._id ? (
                    <HiDotsVertical 
                    className="icon-dots"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditPostId(post._id);
                      setEditPostTitle(post.title);
                      setEditPostText(post.text);
                    }}
                  />
                  ) : null}
                <div onClick={() => handlePostClick(post._id)}>
                <p className="post-author"> {findUsernameById(post.user)}</p>
                <p className="post-date">{new Date(post.createdAt).toLocaleString()}</p>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-text">{post.text.length > 100 ? `${post.text.substring(0, 100)}...` : post.text}</p>
                 
                  <p className="post-comments"> <span style={{marginRight: '5px'}}> < TfiComment /></span> {Array.isArray(post.comments) ? post.comments.length : 0}  COMENTARIOS</p>
                </div>
                {editPostId === post._id && (
                  <div className="post-actions">
                {currentUser.role === 'admin' || post.user === currentUser._id ? (
                    <div className="edit-section">
                      <input
                        type="text"
                        value={editPostTitle}
                        onChange={(e) => setEditPostTitle(e.target.value)}
                      />
                      <textarea
                        value={editPostText}
                        onChange={(e) => setEditPostText(e.target.value)}
                      />
                      <div className="button-group">
                        <button className="edit-button" onClick={() => handleEditPost(post._id)}>Edit</button>
                        <button onClick={() => setEditPostId(null)}>Cancel</button>
                      </div>
                    </div>
                  ) : null}
                  {currentUser.role === 'admin' &&  (
                    <button className="delete-button" onClick={() => handleDeletePost(post._id)}><FaRegTrashCan /></button>
                  ) }
                </div>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
      {editPostId === 'new' && (
        <div className="create-post-container" ref={createPostRef}>
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
          <div className="button-container">
            <button onClick={handleCreatePost}>Create Post</button>
            <button className="cancel-button" onClick={() => setEditPostId(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subforum;
