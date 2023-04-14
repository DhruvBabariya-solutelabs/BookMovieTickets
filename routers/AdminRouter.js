import route from "express";
import adminController from "../controllers/AdminController.js";
const router = route.Router();

router.post("/movie", adminController.saveMovie);

router.get("/movies", adminController.findAllMovie);

router.get("/movie/:id", adminController.findById);

router.put("/movie/:id", adminController.updateMovie);

router.delete("/movie/:id", adminController.deleteMovie);

export default router;
