import express from "express";

import {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  removeUserById,
  removeAllUser,
} from "../controllers/user.controller.ts";
import { verifyToken } from "../middlewares/auth.middleware.ts";

const router = express.Router();

router.route("/").get(getAllUser).post(createUser).delete(removeAllUser);
router.route("/:id").get(getUserById).put(updateUser).delete(removeUserById);

export default router;
