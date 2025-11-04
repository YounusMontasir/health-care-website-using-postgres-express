import express, { NextFunction, Request, Response } from "express"
import { AuthController } from "./auth.controller";

const router = express.Router();

router.get('/login', AuthController.login)

export const authRoutes = router;