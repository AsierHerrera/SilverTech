db = db.getSiblingDB('Desafio');
      
db.createCollection('Subforum');

db.products.insertMany([
    {   
            _id:ObjectId("6685172b93eca4aa5890548b"),
            title: "ттт  ff",
            user: ObjectId("6684ff751d2e2648d5dee955"),
            text: "тьтьhg;ihfiyfvcjgcjgcgujcgcfgcckutgcgfhcvgjvcghjvfiugoughoughoughóuguo…",
            comments: Array (empty),
            createdAt: "2024-07-03T09:17:31.940+00:00",
            updatedAt: "2024-07-03T16:50:37.084+00:00"
    },
        {   
            _id:ObjectId("668560b6d88a7bd288213dc5"),
            title: "ттт  иииии",
            user: "6684ff751d2e2648d5dee955",
            text: "тьтьhg;ihfiyfvcjgcjgcgujcgcfgcckutgcgfhcvghoughóuguo…",
            comments: Array (empty),
            createdAt: "2024-07-03T09:17:31.940+00:00",
            updatedAt: "2024-07-03T16:50:37.084+00:00"
    },
    {   
        _id:ObjectId("6685654bd88a7bd288213de9"),
        title: "ммм",
        user: "6684ff751d2e2648d5dee955",
        text: "тьтьhg;ihfiyfvcjgcjgcgujcgcfgcckutgcgfhcvgjvcghjvfiuughóuguo…",
        comments: Array (empty),
       
},
 
]);