import commentController from "./commentController.js";

const getAll = async (req, res) => {
    const comments = await commentController.getAll();
    res.json({ data: comments });
}

const getById = async (req, res) => {
    const id = req.params.id;
    const comment = await commentController.getById(id);
    res.json({ data: comment });
}

const getByUser = async (req, res) => {
    const userId = req.params.userId;
    const comments = await commentController.getByUser(userId);
    res.json({ data: comments });
}

const create = async (req, res) => {
    const user = req.user._id
    const subFormId = req.params.forumid
    
    const comment = await commentController.create(req.body, subFormId, user);
    res.json({ data: comment });
}

const update = async (req, res) => {
    const id = req.params.id;
    const comment = await commentController.update(id, req.body);
    res.json({ data: comment });
}

const remove = async (req, res) => {
    const id = req.params.id;
    const comment = await commentController.remove(id);
    res.json({ data: comment });
}
const getByForumId = async (req, res) => {
    const forumId = req.params.forumid;
    const comments = await commentController.getByForumId(forumId);
    res.json({ data: comments });
}
const likeComment = async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user._id; 
    const result = await commentController.likeComment(commentId, userId);
    res.json({ data: result });
};

const dislikeComment = async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user._id; 
    const result = await commentController.dislikeComment(commentId, userId);
    res.json({ data: result });
};

export default {
    getAll,
    getById,
    getByUser,
    create,
    update,
    remove,
    getByForumId,
    dislikeComment,
    likeComment
}
