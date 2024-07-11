db = db.getSiblingDB('Desafio');
db.createCollection('comments');

db.comments.insertMany([
        {
                "name": "Curso de Diseño de Interfaces de Usuario",
                "description": "Curso intensivo sobre diseño de interfaces de usuario",
                "modality": "Presencial",
                "startDate": "2024-07-20T10:00:00Z",
                "endDate": "2024-07-20T18:00:00Z",
                "price": 250,
                "instructor": "Carlos Díaz",
                "resourceType": "Formacion",
                "availableSlots": 20,
                "user": "60ebea5f3cc2d70015b3db5b"
              },
              {
                "name": "Introducción al Diseño UX",
                "description": "Curso básico sobre fundamentos de UX",
                "modality": "Online",
                "startDate": "2024-08-05T09:00:00Z",
                "endDate": "2024-08-05T17:00:00Z",
                "price": 100,
                "instructor": "Ana García",
                "resourceType": "Formacion",
                "availableSlots": 30,
                "user": "60ebea5f3cc2d70015b3db5b"
              },
              {
                "name": "Taller de Prototipado con Figma",
                "description": "Taller práctico sobre prototipado de interfaces con Figma",
                "modality": "Presencial",
                "startDate": "2024-08-15T10:00:00Z",
                "endDate": "2024-08-15T18:00:00Z",
                "price": 300,
                "instructor": "David Ruiz",
                "resourceType": "Formacion",
                "availableSlots": 15,
                "user": "60ebea5f3cc2d70015b3db5b"
              },
              {
                "name": "Conferencia Internacional de UX",
                "description": "Evento anual sobre las últimas tendencias y prácticas en UX",
                "modality": "Presencial",
                "startDate": "2024-09-10T09:00:00Z",
                "endDate": "2024-09-10T18:00:00Z",
                "price": 500,
                "instructor": "María Fernández",
                "resourceType": "Evento",
                "availableSlots": 100,
                "user": "60ebea5f3cc2d70015b3db5b"
              },
              {
                "name": "Webinar de Diseño UI con Adobe XD",
                "description": "Webinar sobre diseño de interfaces de usuario utilizando Adobe XD",
                "modality": "Online",
                "startDate": "2024-08-25T15:00:00Z",
                "endDate": "2024-08-25T17:00:00Z",
                "price": 50,
                "instructor": "Laura Martínez",
                "resourceType": "Evento",
                "availableSlots": 200,
                "user": "60ebea5f3cc2d70015b3db5b"
              },
              {
                "name": "Taller de Diseño de Experiencia de Usuario",
                "description": "Taller práctico enfocado en mejorar la experiencia de usuario en productos digitales",
                "modality": "Presencial",
                "startDate": "2024-09-20T10:00:00Z",
                "endDate": "2024-09-20T16:00:00Z",
                "price": 150,
                "instructor": "Pedro López",
                "resourceType": "Evento",
                "availableSlots": 30,
                "user": "60ebea5f3cc2d70015b3db5b"
              }
])