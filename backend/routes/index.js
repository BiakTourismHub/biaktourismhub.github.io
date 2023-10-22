import express from "express";
import { getUsers, Register, login, logout } from "../controllers/Users.js"; // Pastikan Anda mengimpor logout
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', login);
router.delete('/logout', logout); // Ini adalah rute logout yang telah ditambahkan
// router.get('/token', refreshToken);

export default router;
