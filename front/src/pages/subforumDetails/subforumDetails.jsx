// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getPostById, getAllUsers, createComment, updateComment, deleteComment } from '../../utils/fetch';
// import { getToken, parseToken } from '../../utils/local.js';
// import './Subforum.css';

// const SubforumDetails = () => {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newCommentText, setNewCommentText] = useState("");
//   const [editCommentId, setEditCommentId] = useState(null);
//   const [editCommentText, setEditCommentText] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [postResult, usersResult] = await Promise.all([getPostById(postId), getAllUsers()]);
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
//   }, [postId]);

//   const findUsernameById = (id) => {
//     const user = users.find(user => user._id === id);
//     return user ? user.username : 'Unknown user';
//   };

//   const handleCreateComment = async () => {
//     try {
//       const token = getToken();
//       const userId = parseToken(token).userId;
//       const newComment = { text: newCommentText, user: userId, post: postId };
//       const result = await createComment(newComment);
//       if (!result.error) {
//         setPost({ ...post, comments: [...post.comments, result.data] });
//         setNewCommentText("");
//       } else {
//         setError(result.error);
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleEditComment = async (id) => {
//     try {
//       const updatedComment = { text: editCommentText };
//       const result = await updateComment(id, updatedComment);
//       if (!result.error) {
//         setPost({
//           ...post,
//           comments: post.comments.map(comment => comment._id === id ? result.data : comment)
//         });
//         setEditCommentId(null);
//         setEditCommentText("");
//       } else {
//         setError(result.error);
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleDeleteComment = async (id) => {
//     try {
//       const result = await deleteComment(id);
//       if (!result.error) {
//         setPost({
//           ...post,
//           comments: post.comments.filter(comment => comment._id !== id)
//         });
//       } else {
//         setError(result.error);
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.text}</p>
//       <p>Posted by: {findUsernameById(post.user)}</p>
//       <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
//       <div className="comments-section">
//         <h2>Comments</h2>
//         {post.comments.map(comment => (
//           <div key={comment._id} className="comment-item">
//             <p>{comment.content}</p>
//             <p>Posted by: {findUsernameById(comment.user)}</p>
//             <p>Created at: {new Date(comment.createdAt).toLocaleString()}</p>
//             {editCommentId === comment._id ? (
//               <>
//                 <textarea
//                   value={editCommentText}
//                   onChange={(e) => setEditCommentText(e.target.value)}
//                 />
//                 <button onClick={() => handleEditComment(comment._id)}>Save</button>
//                 <button onClick={() => setEditCommentId(null)}>Cancel</button>
//               </>
//             ) : (
//               <div className="comment-actions">
//                 <p>Likes: {comment.likes} Dislikes: {comment.dislikes}</p>
//                 {(comment.user === parseToken(getToken()).userId || parseToken(getToken()).role === 'admin') && (
//                   <>
//                     <button onClick={() => setEditCommentId(comment._id)}>Edit</button>
//                     {parseToken(getToken()).role === 'admin' && (
//                       <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
//                     )}
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//         <div>
//           <h3>Add a new comment</h3>
//           <textarea
//             value={newCommentText}
//             onChange={(e) => setNewCommentText(e.target.value)}
//           />
//           <button onClick={handleCreateComment}>Add Comment</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubforumDetails;
