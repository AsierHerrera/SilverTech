db = db.getSiblingDB('Desafio'); 

db.createCollection('users');

db.users.insertMany([
    {
        _id: ObjectId("668580e9d88a7bd288213fc9"),  
        username: "alex",      
        password: "$2a$10$LIzizvyZ1WVtBLT93U0Wie7du2jmWpq1ZR6rqQL0C9tNIrggUvi8O",
        email:  "alex@alex.com",
        role: "user",
        resources: [],
        subforums: [],
        comments: [],
        participations:[]

      },    
      {
        _id: ObjectId("6686ef98f95cfdd376f3bc66"),
        username: "anna",   
        password: "$2a$10$cMuSAk04oe7t9beSji4Ik.bvQTdtQZHcI/4Yptj064yusLyjN0JYG",     
        email:  "anna@anna.com",
        role: "user",
        resources:  [],
        subforums: [],
        comments: [],
        participations: [],
      },
      {
        _id: ObjectId("6686623e227867a3e8543cc4"),
        username: "asier",   
        password: "$2a$10$it.Bf8DPmNQlMr5X6M5/X.HSq8m4Z5a1X1uOmjRw7xvt1EAhy1FO6",     
        email:  "asier@admin.com",
        role: "admin",
        resources:  [],
        subforums: [],
        comments: [],
        participations: [],
      },

  ]
);
