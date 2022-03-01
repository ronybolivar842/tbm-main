import express from "express";
import task from "../controllers/task.js";
import taskMidd from "../middlewares/task.js";
import auth from "../middlewares/auth.js";
import validId from "../middlewares/validId.js";
const router = express.Router();

router.post("/save", auth, taskMidd.validData, task.saveTask);
router.get("/list", auth, task.listTask);
router.put("/update", auth, task.updateTask);
router.delete("/delete/:_id", auth, validId, task.deleteTask);

export default router;
