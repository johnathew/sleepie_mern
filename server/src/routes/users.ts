import express from "express";
import * as UserController from "../controllers/users";

const router = express.Router();

router.get("/", UserController.getAuthenticatedUserId);

router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

router.post("/logout", UserController.logout);

export default router;
