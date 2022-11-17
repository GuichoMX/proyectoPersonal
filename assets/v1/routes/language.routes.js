import { Router } from "express";
import { methods as userController } from "../../controllers/user.controller"

const router=Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.get("/", userController.addUsers);
router.get("/:id", userController.deleteUser);
router.get("/:id", userController.updateUser);

export default router;