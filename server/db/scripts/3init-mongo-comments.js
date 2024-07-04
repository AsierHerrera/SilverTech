db = db.getSiblingDB('Desafio');
db.createCollection('comments');

db.comments.insertMany([
    {   
            _id:ObjectId("668664c8d4025e73142a2121"),
            content: "nkjn",
            user: ObjectId("6686623e227867a3e8543cc4"),
            subforum: ObjectId("6685172b93eca4aa5890548b"),
            likes:0,
            dislikes:0,
            createdAt: "2024-07-04T09:00:56.445+00:00",
            updatedAt: "2024-07-04T09:00:56.445+00:00"

    },

    {   
            _id:ObjectId("6686691214a9cc0513b97a2c"),
            content: "mmmmmmmm",
            user: ObjectId("6686623e227867a3e8543cc4"),
            subforum: ObjectId("6685172b93eca4aa5890548b"),
            likes:0,
            dislikes:0,
            createdAt: "2024-07-04T09:00:56.445+00:00",
            updatedAt: "2024-07-04T09:00:56.445+00:00"
    }


])