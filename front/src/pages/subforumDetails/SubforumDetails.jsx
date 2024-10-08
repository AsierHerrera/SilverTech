import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePostInSubforumById, getAllCommentsByPostId, createComment, updateComment, deleteComment, getAllUsers } from '../../utils/fetch.js';
import { getToken, parseToken } from '../../utils/local.js';
import './SubforumDetails.css';
import { FaRegTrashCan } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import moment from 'moment';
import Footer2 from "../../componentes/Footer/Footer2";

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

    const token = getToken(); 
    const data = parseToken(token);
    const userId = data._id;
    const userRole = data.role;

    const fetchComments = async () => {
        try {
            const commentsResult = await getAllCommentsByPostId(id);
            if (!commentsResult.error) {
                setComments(Array.isArray(commentsResult.data) ? commentsResult.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) : []);
            } else {
                setError(commentsResult.error);
            }
        } catch (error) {
            setError(error.message);
        }
    };

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
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersResult = await getAllUsers();
            if (!usersResult.error) {
                setUsers(usersResult.data);
            }
        };
        fetchUsers();
    }, []);

    const handleCreateComment = async () => {
        try {
            if (newComment.trim() === "") {
                alert("Comment cannot be empty");
                return;
            }
            const user = users.find(u => u._id === userId);
            const newCommentData = { 
                content: newComment, 
                user: userId,
                username: user ? user.username : 'Unknown user' 
            };
            const result = await createComment(id, newCommentData);
            if (!result.error) {
                setNewComment("");
                // Після успішного додавання коментаря оновлюємо список коментарів
                fetchComments();
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
                // Після успішного редагування коментаря оновлюємо список коментарів
                fetchComments();
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
            const confirmed = confirm("Are you sure you want to delete this post?");
            if (!confirmed) {
                return; 
            }
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
        if (typeof id === 'object' && id !== null) {
            return id.username || 'Unknown user';
        }
        if (!id) return 'Unknown user';
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
        <>
        <p className="navegation-history-foro" > <span>Inicio</span>  {">"} <span>Networking</span> {">"} <span>Foro</span></p>
        <div className="container">
        <div className="post-page">
            {post && (
                <div className="post-details">
                    <p className="username"> {findUsernameById(post.user)}</p>
                    <p className="date"> Publicado el {moment(post.createdAt).format('DD/MM/YYYY')}</p>
                    <h2>{post.title}</h2>
                    <p className="textpost">{post.text}</p>
                    
                </div>
            )}
            <div className="comments-section">
                <h2 className="comments-section-h2">Respuestas ({Array.isArray(comments) ? comments.length : 0})</h2>
                <ul>
                    {comments.length === 0 ? (
                        <li style={{color: '#091864'}}>No hay comentarios</li>
                    ) : (
                        comments.map(comment => (
                            <li key={comment._id} className="comment-item">
                                {editCommentId === comment._id ? (
                                    <div className="edit-comment">
                                        <textarea
                                            value={editCommentContent}
                                            onChange={(e) => setEditCommentContent(e.target.value)}
                                        />
                                        <div className="edit-buttons">
                                            <button onClick={() => handleEditComment(comment._id)}>Save</button>
                                            <button onClick={() => setEditCommentId(null)}>Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="comment-details">
                                            <p className="comment-details-item">{moment(comment.createdAt).format('DD MMM, YYYY HH:mm')}</p>
                                            <p className="comment-details-item"><BiLike style={{ width: '24px', height: '24px' }}  /></p>
                                        </div>
                                        
                                        <p style={{ fontSize: 18, fontWeight: 'bold',  color: '#212121', fontFamily: "Montserrat"}}>{findUsernameById(comment.user)}</p>
                                        <p>{comment.content}</p>
                                        {(comment.user._id === userId || userRole === 'admin') && (
                                            <div className="comment-actions">
                                                <button onClick={() => {
                                                    setEditCommentId(comment._id);
                                                    setEditCommentContent(comment.content);
                                                }}>Edit</button>
                                                <button onClick={() => handleDeleteComment(comment._id)}><FaRegTrashCan /> Delete</button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </li>
                        ))
                    )}
                </ul>
                <div className="new-comment">
                    <h3 className="new-comment-title">Escribe tu respuesta</h3>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Escribe aqui..."
                    />
                    <button onClick={handleCreateComment}>Enviar</button>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default SubforumDetails;
