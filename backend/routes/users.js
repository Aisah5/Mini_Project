import express from "express";
import { getUser } from "../controller/user.js";

const router = express.Router()

router.get("/find/:userId", getUser)
// router.put("/", updateUser)


export default router;