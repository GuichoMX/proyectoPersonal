import { Router } from "express";
import { methods as userController } from "../../controllers/user.controller"

const router=Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.get("/", userController.addUsers);
router.get("/", userController.deleteUser);
router.get("/", userController.updateUser);

export default router;