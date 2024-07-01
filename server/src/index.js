import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongo.js";
import router from "./routes/router.js";
import cors from "cors";
import multer from 'multer';
import path from 'path';



dotenv.config();
const CONTAINER_PORT = 3000;

const app = express();
app.use(cors())
app.use(express.json()) ; // api
app.use(express.urlencoded({extended:true})); // vistas
app.use((_, res, next) => {
  res.set('Access-Control-Allow-Origin', '*'); // or 'localhost:8888'
  res.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  return next();
}); // sets headers before routes

connectDB();
app.get("/",(req,res)=>{
    res.json({message:"Hello World"});
})

app.use("/api",router);



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/uploads', upload.single('file'), (req, res) => {
  try {
      res.json({ message: 'Imagen subida correctamente', file: req.file });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al subir la imagen' });
  }
});

app.listen(CONTAINER_PORT ,()=>{
    console.log("Aplicacion en marcha en el puerto "+process.env.APP_PORT);
})