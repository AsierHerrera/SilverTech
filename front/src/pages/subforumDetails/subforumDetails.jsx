// // components/PostDetail/PostDetail.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getOnePostInSubforumById, getAllUsers } from '../../utils/fetch';
// import "./SubforumDetails.css";

// const SubforumDetails = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [postResult, usersResult] = await Promise.all([getOnePostInSubforumById(id), getAllUsers()]);
//         if (postResult.error) {
//           setError(postResult.error);
//         } else {
//           setPost(postResult.data);
//         }
//         if (usersResult.error) {
//           setError(usersResult.error);
//         } else {
//           setUsers(Array.isArray(usersResult.data) ? usersResult.data : []);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const findUsernameById = (id) => {
//     const user = users.find(user => user._id === id);
//     return user ? user.username : 'Unknown user';
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="post-detail">
//       {post && (
//         <div>
//           <h2>{post.title}</h2>
//           <p>{post.text}</p>
//           <p>Posted by: {findUsernameById(post.user)}</p>
//           <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
//           <div className="comments-section">
//             <h3>Comments</h3>
//             {post.comments && post.comments.length > 0 ? (
//               post.comments.map((comment) => (
//                 <div key={comment._id} className="comment-item">
//                   <p>{comment.content}</p>
//                   <p>Commented by: {findUsernameById(comment.user)}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No comments yet</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // export default SubforumDetails;
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getOnePostInSubforumById, getAllCommentsByPostId, createComment, updateComment, deleteComment, getAllUsers } from '../../utils/fetch';
// import { getToken, parseToken } from '../../utils/local.js';
// import './SubforumDetails.css';

// const SubforumDetails = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState(null);
//     const [comments, setComments] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newComment, setNewComment] = useState("");
//     const [editCommentId, setEditCommentId] = useState(null);
//     const [editCommentContent, setEditCommentContent] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const [postResult, commentsResult, usersResult] = await Promise.all([
//                     getOnePostInSubforumById(id),
//                     getAllCommentsByPostId(id),
//                     getAllUsers()
//                 ]);
//                 if (postResult.error || commentsResult.error || usersResult.error) {
//                     setError(postResult.error || commentsResult.error || usersResult.error);
//                 } else {
//                     setPost(postResult.data);
//                     setComments(Array.isArray(commentsResult.data) ? commentsResult.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) : []);
//                     setUsers(Array.isArray(usersResult.data) ? usersResult.data : []);
//                 }
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id]);

//     const handleCreateComment = async () => {
//         try {
//             const token = getToken(); 
//             const userId = parseToken(token).userId; 
//             const newCommentData = { content: newComment, user: userId };
//             const result = await createComment(id, newCommentData);
//             if (!result.error) {
//                 setComments([...comments, result.data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
//                 setNewComment("");
//             } else {
//                 setError(result.error);
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const handleEditComment = async (commentId) => {
//         try {
//             const updatedComment = { content: editCommentContent };
//             const result = await updateComment(commentId, updatedComment);
//             if (!result.error) {
//                 setComments(comments.map(comment => comment._id === commentId ? result.data : comment).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
//                 setEditCommentId(null);
//                 setEditCommentContent("");
//             } else {
//                 setError(result.error);
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const handleDeleteComment = async (commentId) => {
//         try {
//             const result = await deleteComment(commentId);
//             if (!result.error) {
//                 setComments(comments.filter(comment => comment._id !== commentId));
//             } else {
//                 setError(result.error);
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const findUsernameById = (id) => {
//         const user = users.find(user => user._id === id);
//         return user ? user.username : 'Unknown user';
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="post-page">
//             {post && (
//                 <div className="post-details">
//                     <h2>{post.title}</h2>
//                     <p>{post.text}</p>
//                     <p>Posted by: {findUsernameById(post.user)}</p>
//                     <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
//                 </div>
//             )}
//             <div className="comments-section">
//                 <h3>Comments</h3>
//                 <ul>
//                     {comments.length === 0 ? (
//                         <li>No comments available</li>
//                     ) : (
//                         comments.map(comment => (
//                             <li key={comment._id} className="comment-item">
//                                 {editCommentId === comment._id ? (
//                                     <div>
//                                         <textarea
//                                             value={editCommentContent}
//                                             onChange={(e) => setEditCommentContent(e.target.value)}
//                                         />
//                                         <button onClick={() => handleEditComment(comment._id)}>Save</button>
//                                         <button onClick={() => setEditCommentId(null)}>Cancel</button>
//                                     </div>
//                                 ) : (
//                                     <div>
//                                         <p>{comment.content}</p>
//                                         <p>Posted by: {findUsernameById(comment.user)}</p>
//                                         <p>Created at: {new Date(comment.createdAt).toLocaleString()}</p>
//                                         <button onClick={() => {
//                                             setEditCommentId(comment._id);
//                                             setEditCommentContent(comment.content);
//                                         }}>Edit</button>
//                                         <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
//                                     </div>
//                                 )}
//                             </li>
//                         ))
//                     )}
//                 </ul>
//                 <div className="new-comment">
//                     <textarea
//                         value={newComment}
//                         onChange={(e) => setNewComment(e.target.value)}
//                         placeholder="Write a comment..."
//                     />
//                     <button onClick={handleCreateComment}>Add Comment</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SubforumDetails;




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePostInSubforumById, getAllCommentsByPostId, createComment, updateComment, deleteComment, getAllUsers } from '../../utils/fetch';
import { getToken, parseToken } from '../../utils/local.js';
import './SubforumDetails.css';

const SubforumDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newComment, setNewComment] = useState("");
    const [editCommentId, setEditCommentId] = useState(null);
    const [editCommentContent, setEditCommentContent] = useState("");

    useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          try {
              const [postResult, commentsResult, usersResult] = await Promise.all([
                  getOnePostInSubforumById(id),
                  getAllCommentsByPostId(id),
                  getAllUsers()
              ]);
              if (postResult.error || commentsResult.error || usersResult.error) {
                  setError(postResult.error || commentsResult.error || usersResult.error);
              } else {
                  setPost(postResult.data);
                  setComments(Array.isArray(commentsResult.data) ? commentsResult.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) : []);
                  setUsers(Array.isArray(usersResult.data) ? usersResult.data : []);
                  console.log('Users:', usersResult.data); // Log users data here
              }
          } catch (error) {
              setError(error.message);
          } finally {
              setLoading(false);
          }
      };
  
      fetchData();
  }, [id]);
  

    const handleCreateComment = async () => {
        try {
            if (newComment.trim() === "") {
                alert("Comment cannot be empty");
                return;
            }
            const token = getToken(); 
            const userId = parseToken(token).userId; 
            const newCommentData = { content: newComment, user: userId };
            const result = await createComment(id, newCommentData);
            if (!result.error) {
                setComments([...comments, result.data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
                setNewComment("");
            } else {
                setError(result.error);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEditComment = async (commentId) => {
        try {
            const updatedComment = { content: editCommentContent };
            const result = await updateComment(commentId, updatedComment);
            if (!result.error) {
                setComments(comments.map(comment => comment._id === commentId ? result.data : comment).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
                setEditCommentId(null);
                setEditCommentContent("");
            } else {
                setError(result.error);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            const result = await deleteComment(commentId);
            if (!result.error) {
                setComments(comments.filter(comment => comment._id !== commentId));
            } else {
                setError(result.error);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const findUsernameById = (id) => {
      const user = users.find(user => user._id === id);
      console.log('User found:', user); 
      // console.log(user.username)
      // Add a log to see which user is found
      return user ? user.username : 'Unknown user';
  };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="post-page">
            {post && (
                <div className="post-details">
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                    <p>Posted by: {findUsernameById(post.user)}</p>
                    <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
                </div>
            )}
            <div className="comments-section">
                <h3>Comments</h3>
                <ul>
                    {comments.length === 0 ? (
                        <li>No comments available</li>
                    ) : (
                        comments.map(comment => (
                            <li key={comment._id} className="comment-item">
                                {editCommentId === comment._id ? (
                                    <div>
                                        <textarea
                                            value={editCommentContent}
                                            onChange={(e) => setEditCommentContent(e.target.value)}
                                        />
                                        <button onClick={() => handleEditComment(comment._id)}>Save</button>
                                        <button onClick={() => setEditCommentId(null)}>Cancel</button>
                                    </div>
                                ) : (
                                    <div>
                                        <p>{comment.content}</p>
                                        <p>Posted by: {findUsernameById(comment.user)}</p>
                                        <p>Created at: {new Date(comment.createdAt).toLocaleString()}</p>
                                        <button onClick={() => {
                                            setEditCommentId(comment._id);
                                            setEditCommentContent(comment.content);
                                        }}>Edit</button>
                                        <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
                                    </div>
                                )}
                            </li>
                        ))
                    )}
                </ul>
                <div className="new-comment">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                    />
                    <button onClick={handleCreateComment}>Add Comment</button>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default SubforumDetails;

