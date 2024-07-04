db = db.getSiblingDB('Desafio'); 

db.createCollection('User');

db.users.insertMany([
    {
        _id: ObjectId("668580e9d88a7bd288213fc9"),  
        username: "alex",      
        password: "$2a$10$LIzizvyZ1WVtBLT93U0Wie7du2jmWpq1ZR6rqQL0C9tNIrggUvi8O",
        email:  "alex@alex.com",
        role: "user",
        resources:   Array (empty),
        subforums: Array (empty),
        comments: Array (empty),
        participations:   Array (empty)

      },    
      {
        _id: ObjectId("6684ff751d2e2648d5dee955"),
        username: "anna",   
        password: "$2a$10$$$2a$10$k3Rl8Hr8IYCih7pJ8xiw.elUd9AjMejSOqlaawbnmNaaUPc3F6NJa",     
        email:  "anna@anna.com",
        role: "user",
        resources:   Array (empty),
        subforums: Array (empty),
        comments: Array (empty),
        participations:   Array (empty)
      },
   
  ]
);
