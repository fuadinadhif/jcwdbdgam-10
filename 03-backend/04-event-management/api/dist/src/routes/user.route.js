import express from "express";
import { getAllUser, getUserById, hardDeleteAllUser, hardDeleteUserById, softDeleteAllUser, softDeleteUserById, updateUser, } from "../controllers/user.controller.js";
const router = express.Router();
router.route("/").get(getAllUser);
router.route("/delete").put(softDeleteAllUser).delete(hardDeleteAllUser);
router.route("/:id").get(getUserById).put(updateUser);
router.route("/delete/:id").put(softDeleteUserById).delete(hardDeleteUserById);
export default router;
//# sourceMappingURL=user.route.js.map