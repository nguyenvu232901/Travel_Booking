
import express from 'express';
import { login, register } from './../controllers/authController.js';


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
//router.get("/user", user);


export default router;